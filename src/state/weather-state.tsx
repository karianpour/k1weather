import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { types, Instance, onPatch, SnapshotIn, onSnapshot, getParentOfType } from "mobx-state-tree";
import { WeatherApi } from '../api/WeatherApi';

export const CityWeatherState = types
  .model("CityWeatherState", {
    name: types.string,
    // name: types.optional(types.number, 0),
  })
  .views(self => {
    return {

    }
  });


export const WeatherState = types
  .model("WeatherState", {
    cityWeatherList: types.array(CityWeatherState),
    diagramIdTracker: types.optional(types.number, 0),
  })
  .views(self => {
    return {


    }
  });

const storeContext = React.createContext<IWeatherState | null>(null);

export const WeatherStateProvider: React.FunctionComponent = ({ children }) => {
  const store = useLocalStore(createStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useWeatherState = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}

export type EnvType = {
  weatherApi: WeatherApi,
}

export function createStore() {
  const weatherStore = localStorage.getItem('weather-store');

  const injection: EnvType = {
    weatherApi: new WeatherApi(),
  }

  let store;
  try {
    store = WeatherState.create(weatherStore ? JSON.parse(weatherStore) : emptyStore(), injection);
  } catch (err) {
    console.error('could not restore, with the following error. fallback to empty store.');
    console.error(err);
    store = WeatherState.create(emptyStore(), injection);
  }
  // onPatch(store, patch => {
  //   if (patch.path.startsWith('/fbd/drawingVector'))
  //     return;
  // });
  onSnapshot(store, snapshot => {
    localStorage.setItem('weather-store', JSON.stringify(snapshot));
  });

  return store;
}

function emptyStore(): IWeatherStateSnapshot {
  return {};
}

export interface IWeatherState extends Instance<typeof WeatherState> { };
export interface IWeatherStateSnapshot extends SnapshotIn<typeof WeatherState> { };