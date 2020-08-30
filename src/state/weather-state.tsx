import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { types, Instance, SnapshotIn, onSnapshot, getParentOfType, getEnv } from "mobx-state-tree";
import { AppApi, ICity, IWeatherData } from '../api/AppApi';

const WeatherDataTTL = 10 * 60 * 1000;

export const WeatherState = types
  .model("WeatherState", {
    observation_time: types.string,
    temperature: types.number,
    weather_code: types.number,
    weather_icons: types.array(types.string),
    weather_descriptions: types.array(types.string),
    wind_speed: types.number,
    wind_degree: types.number,
    wind_dir: types.string,
    pressure: types.number,
    precip: types.number,
    humidity: types.number,
    cloudcover: types.number,
    feelslike: types.number,
    uv_index: types.number,
    visibility: types.number,
    is_day: types.boolean,
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
        self.name = weather.city.name;
        self.country = weather.city.country;
        self.region = weather.city.region;
        self.currentWeather = WeatherState.create(weather.current);
      },
    }
  });


export const AppState = types
  .model("AppState", {
    topCities: types.array(types.reference(CityState)),
    favoriteCities: types.array(types.reference(CityState)),
    cities: types.map(CityState),
  })
  .views(self => {
    return {
      findCity(cityName: string): ICityState | undefined{
        const city = self.cities.get(cityName);
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
            id: city.name,
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
          self.addToTopCity(city);
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
            city.setCurrentWeather(weather);
          }
        }));
      },
      addSearchedCityWeather(weather: IWeatherData){
        self.cities.put(CityState.create({
          id: weather.city.name,
          name: weather.city.name,
          country: weather.city.country,
          region: weather.city.region,
          currentWeather: WeatherState.create(weather.current),
        }));
      }
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
          self.addSearchedCityWeather(weather);
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