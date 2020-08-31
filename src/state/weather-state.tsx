import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { types, Instance, SnapshotIn, onSnapshot, getParentOfType, getEnv } from "mobx-state-tree";
import { AppApi, ICity, IWeatherData } from '../api/AppApi';

const WeatherDataTTL = 10 * 60 * 1000;

export const WeatherState = types
  .model("WeatherState", {
    "last_updated_epoch": types.number,
    "last_updated": types.string,
    "temp_c": types.number,
    "temp_f": types.number,
    "is_day": types.number,
    "condition": types.model({
        "text": types.string,
        "icon": types.string,
        "code": types.number,
    }),
    "wind_mph": types.number,
    "wind_kph": types.number,
    "wind_degree": types.number,
    "wind_dir": types.string,
    "pressure_mb": types.number,
    "pressure_in": types.number,
    "precip_mm": types.number,
    "precip_in": types.number,
    "humidity": types.number,
    "cloud": types.number,
    "feelslike_c": types.number,
    "feelslike_f": types.number,
    "vis_km": types.number,
    "vis_miles": types.number,
    "uv": types.number,
    "gust_mph": types.number,
    "gust_kph": types.number,
    updated_at: types.Date,
  })
  .actions(self => {
    return {
    }
  });

export const CityState = types
  .model("CityState", {
    id: types.identifier,
    name: types.string,
    country: types.string,
    region: types.string,
    currentWeather: types.maybeNull(WeatherState),
  })
  .views(self => {
    return {
      isUpdated(now: Date){
        return now.getTime() - (self.currentWeather?.updated_at.getTime() || 0) < WeatherDataTTL;
      },
      isFavorite(): boolean{
        const parent = getParentOfType(self, AppState);
        const index = parent.favoriteCities.findIndex( c => c === self);
        return index !== -1;
      },
    }
  })
  .actions(self => {
    return {
      setCurrentWeather(weather: IWeatherData){
        self.currentWeather = WeatherState.create(weather.current);
      },
    }
  });

export const LookupResultState = types
  .model("LookupResultState", {
    name: types.string,
    country: types.string,
    region: types.string,
  });

export const AppState = types
  .model("AppState", {
    topCities: types.array(types.reference(CityState)),
    favoriteCities: types.array(types.reference(CityState)),
    cities: types.map(CityState),
    lookup: types.optional(types.string, ''),
    lookupResult: types.array(LookupResultState),
  })
  .views(self => {
    return {
      findCity(country: string, region: string, name: string): ICityState | undefined{
        const city = self.cities.get(`${country}/${region}/${name}`);
        return city;
      },
    }
  })
  .actions(self => {
    return {
      addToTopCity(city: ICityState) {
        const index = self.topCities.findIndex( c => c.name.localeCompare(city.name) > 0);
        if(index === -1){
          self.topCities.push(city);
        }else{
          self.topCities.splice(index, 0, city);
        }
      },
      removeFromTopCity(city: ICityState) {
        const index = self.topCities.findIndex( c => c === city);
        if(index !== -1){
          self.topCities.splice(index, 1);
        }
      },
    }
  })
  .actions(self => {
    return {
      setTopCities(cities: ICity[]) {
        self.topCities.clear();
        cities.forEach( city => {
          const cityRef = self.cities.put(CityState.create({
            id: `${city.country}/${city.region}/${city.name}`,
            name: city.name,
            country: city.country,
            region: city.region,
          }));
          if(!cityRef.isFavorite()){
            self.topCities.push(cityRef);
          }
        });
      },
      addToFavorite(city: ICityState) {
        const index = self.favoriteCities.findIndex( c => c.name.localeCompare(city.name) > 0);
        if(index === -1){
          self.favoriteCities.push(city);
        }else{
          self.favoriteCities.splice(index, 0, city);
        }
        self.removeFromTopCity(city);
      },
      removeFromFavorite(city: ICityState) {
        const index = self.favoriteCities.findIndex( c => c === city);
        if(index !== -1){
          self.favoriteCities.splice(index, 1);
        }
      },
      addCityWeather(weather: IWeatherData): ICityState{
        const cityRef = self.cities.put(CityState.create({
          id: `${weather.city.country}/${weather.city.region}/${weather.city.name}`,
          name: weather.city.name,
          country: weather.city.country,
          region: weather.city.region,
          currentWeather: WeatherState.create(weather.current),
        }));
        return cityRef;
      },
      removeCityWeather(city: ICityState){
        self.cities.delete(city.id);
      },
      setLookupResult(result?: ICity[]){
        self.lookupResult.clear();
        result && self.lookupResult.push(...result);
        console.log('lookup result set')
      },
    }
  })
  .actions(self => {
    return {
      async setLookup(query: string) {
        self.lookup = query;
        console.log('looking up')
        if(query){
          const result = await getEnv<EnvType>(self).api.fetchLookup(query);
          if(self.lookup === query){
            self.setLookupResult(result);
            console.log('same qeury, setting')
          }else{
            console.log('not same qeury, ignoring')
          }
        }else{
          console.log('empty query , make it empty')
          self.setLookupResult(undefined);
        }
      },
      async updateCurrentWeather(){
        const api = getEnv<EnvType>(self).api;
        const now = new Date();
        await Promise.all([...self.cities.values()].map( async (city) => {
          if(city.isUpdated(now)){
            return;
          }
          const weather = await api.fetchWeatherForCity(city.name);
          if(weather){
            if(`${weather.city.country}/${weather.city.region}/${weather.city.name}` === city.id){
              city.setCurrentWeather(weather);
            }else{
              const addedCity = self.addCityWeather(weather);
              self.removeFromTopCity(city);
              self.removeFromFavorite(city);
              self.removeCityWeather(city);
              self.addToTopCity(addedCity);
            }
          }
        }));
      },
    }
  })
  .actions(self => {
    return {
      async init() {
        if(!self.topCities?.length){
          const cities = await getEnv<EnvType>(self).api.fetchTopCities();
          if(cities){
            self.setTopCities(cities);
          }
        }
        await self.updateCurrentWeather();
      },
      async fetchCity(cityName: string){
        const weather = await getEnv<EnvType>(self).api.fetchWeatherForCity(cityName);
        if(weather){
          self.addCityWeather(weather);
        }
      }
    }
  });

const storeContext = React.createContext<IAppState | null>(null);

export const AppStateProvider: React.FunctionComponent = ({ children }) => {
  const store = useLocalStore(createStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useAppState = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}

export type EnvType = {
  api: AppApi,
}

export function createStore() {
  const appStore = localStorage.getItem('app-store');

  const injection: EnvType = {
    api: new AppApi(),
  }

  let store;
  try {
    store = AppState.create(appStore ? JSON.parse(appStore) : emptyStore(), injection);
  } catch (err) {
    console.error('could not restore, with the following error. fallback to empty store.');
    console.error(err);
    store = AppState.create(emptyStore(), injection);
  }
  onSnapshot(store, snapshot => {
    localStorage.setItem('app-store', JSON.stringify(snapshot));
  });

  return store;
}

function emptyStore(): IAppStateSnapshot {
  return {};
}

export interface IAppState extends Instance<typeof AppState> { };
export interface IAppStateSnapshot extends SnapshotIn<typeof AppState> { };
export interface ICityState extends Instance<typeof CityState> { };
export interface IWeatherState extends Instance<typeof WeatherState> { };