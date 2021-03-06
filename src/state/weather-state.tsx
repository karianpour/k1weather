import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { types, Instance, SnapshotIn, onSnapshot, getParentOfType, getEnv } from "mobx-state-tree";
import { AppApi, ICity, IWeatherData, TAppApi } from '../api/AppApi';
import { MockAppApi } from '../api/MockAppApi';

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
  .views(self => {
    return {
      get lastUpdate () {
        return new Date(self.last_updated_epoch *  1000);
      },
    }
  });

export const CityState = types
  .model("CityState", {
    id: types.identifier,
    name: types.string,
    country: types.string,
    region: types.string,
    note: types.optional(types.string, ''),
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
      setNote(note: string){
        self.note = note;
      }
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
    lookupActiveIndex: types.maybeNull(types.number),
    offline: types.optional(types.boolean, false),
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
      setOffline() {
        !self.offline && (self.offline = true);
      },
      setOnline() {
        self.offline && (self.offline = false);
      },
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
        self.lookupActiveIndex = null;
        result && self.lookupResult.push(...result);
      },
      setLookupActiveIndex(index: number | null){
        self.lookupActiveIndex = index;
      },
    }
  })
  .actions(self => {
    return {
      async setLookup(query: string) {
        self.lookup = query;
        if(self.lookup){
          try{
            const result = await getEnv<EnvType>(self).api.fetchLookup(query);
              self.setOnline();
            if(self.lookup === query){
              self.setLookupResult(result);
            }
          }catch(err){
            if(err.message === 'NetworkError'){
              self.setOffline();
            }
          }
        }else{
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
          try{
            const weather = await api.fetchWeatherForCity(city.name);
            self.setOnline();
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
          }catch(err){
            if(err.message === 'NetworkError'){
              self.setOffline();
            }
          }
        }));
      },
      async currentLocationWeather(): Promise<ICityState> {
        if(!navigator.geolocation){
          throw new Error('no_location_service');
        }
        const position = await new Promise<GeolocationPosition>((resolve, rejected) => {
          navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
          }, (err) => {
            if(err.code === err.PERMISSION_DENIED){
              rejected(new Error('permission_denied'));
            }
            if(err.code === err.POSITION_UNAVAILABLE){
              rejected(new Error('position_unavailable'));
            }
            if(err.code === err.TIMEOUT){
              rejected(new Error('timeout'));
            }
          }, {
            enableHighAccuracy: false,
            timeout: 60 * 100,
          });
        });
        const weather = await getEnv<EnvType>(self).api.fetchWeatherForLocation(position.coords.latitude, position.coords.longitude);
        if(weather){
          const city = self.addCityWeather(weather);
          return city;
        }else{
          throw new Error('no_weather_for_your_location');
        }
      },
    }
  })
  .actions(self => {
    return {
      async init() {
        if(!self.topCities?.length){
          try{
            const cities = await getEnv<EnvType>(self).api.fetchTopCities();
            self.setOnline();
            if(cities){
              self.setTopCities(cities);
            }
          }catch(err){
            if(err.message === 'NetworkError'){
              self.setOffline();
            }
          }
        }
        await self.updateCurrentWeather();
      },
      async fetchCity(cityName: string): Promise<ICityState | undefined>{
        try{
          const weather = await getEnv<EnvType>(self).api.fetchWeatherForCity(cityName);
          self.setOnline();
          if(weather){
            const city = self.addCityWeather(weather);
            return city;
          }
        }catch(err){
          if(err.message === 'NetworkError'){
            self.setOffline();
          }
        }
        return undefined;
      }
    }
  });

export const AppStoreContext = React.createContext<IAppState | null>(null);

export const AppStateProvider: React.FunctionComponent = ({ children }) => {
  const store = useLocalStore(createStore)
  return <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>
}

export const useAppState = () => {
  const store = React.useContext(AppStoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store;
}

export type EnvType = {
  api: TAppApi,
}

export function createStore() {
  const injection: EnvType = {
    api: new AppApi(),
  }

  let store;
  try {
    store = AppState.create(createSnapshot(), injection);
  } catch (err) {
    console.error('could not restore, with the following error. fallback to empty store.');
    console.error(err);
    store = AppState.create(emptyStore(), injection);
  }
  onSnapshot(store, saveSnapshot);

  return store;
}

export function createTestStore(snapshot: IAppStateSnapshot, mockApi?: TAppApi): IAppState {
  const injection: EnvType = {
    api: mockApi || new MockAppApi(),
  }

  const store = AppState.create(snapshot, injection);

  return store;
}

export const SNAPSHOT_KEY = 'app-store';

export function createSnapshot(): IAppStateSnapshot {
  const snapshot = localStorage.getItem(SNAPSHOT_KEY);

  try{
    return snapshot ? JSON.parse(snapshot) : emptyStore();
  } catch (err) {
    console.error('could not restore, with the following error. fallback to empty store.');
    console.error(err);
    return emptyStore();
  }
}

export function saveSnapshot(snapshot: IAppStateSnapshot) {
  localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot));
}

function emptyStore(): IAppStateSnapshot {
  return {};
}

export interface IAppState extends Instance<typeof AppState> { };
export interface IAppStateSnapshot extends SnapshotIn<typeof AppState> { };
export interface ICityState extends Instance<typeof CityState> { };
export interface IWeatherState extends Instance<typeof WeatherState> { };