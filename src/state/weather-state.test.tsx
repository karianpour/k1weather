import React from 'react';
import { SNAPSHOT_KEY, createStore } from './weather-state';

test('store is beeing created', () => {
  localStorage.clear();
  const store = createStore();

  expect(store).toBeDefined();
  expect(store.cities.toPOJO()).toStrictEqual({});
  expect(store.favoriteCities).toStrictEqual([]);
  expect(store.topCities).toStrictEqual([]);
  expect(store.offline).toBe(false);
  expect(store.lookup).toBe('');
  expect(store.lookupActiveIndex).toBe(null);
  expect(store.lookupResult).toStrictEqual([]);

});

test('store set top cities', () => {
  localStorage.clear();
  const store = createStore();

  store.setTopCities([{
    name: 'City1',
    region: 'Region',
    country: 'Country',
  }, {
    name: 'City2',
    region: 'Region2',
    country: 'Country2',
  }]);

  expect(store.topCities).toStrictEqual([{
    id: 'Country/Region/City1',
    name: 'City1',
    region: 'Region',
    country: 'Country',
    currentWeather: null,
    note: '',
  }, {
    id: 'Country2/Region2/City2',
    name: 'City2',
    region: 'Region2',
    country: 'Country2',
    currentWeather: null,
    note: '',
  }]);
});

test('store set city', () => {
  localStorage.clear();
  const store = createStore();

  const city = store.addCityWeather({
    city: {
      name: 'City3',
      region: 'Region3',
      country: 'Country3',
    },
    current: {
      "last_updated_epoch": 1599662712, "last_updated": "2020-09-09 20:15", "temp_c": 30, "temp_f": 86, "is_day": 0, "condition": { "text": "Mist", "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png", "code": 1030 }, "wind_mph": 4.3, "wind_kph": 6.8, "wind_degree": 100, "wind_dir": "E", "pressure_mb": 1004, "pressure_in": 30.1, "precip_mm": 0.9, "precip_in": 0.04, "humidity": 89, "cloud": 75, "feelslike_c": 37, "feelslike_f": 98.5, "vis_km": 3, "vis_miles": 1, "uv": 1, "gust_mph": 4, "gust_kph": 6.5, "updated_at": new Date(1599676614151),
    }
  });

  expect(store.cities.toPOJO()).toStrictEqual({
    "Country3/Region3/City3": {
      "country": "Country3",
      "currentWeather": {
        "cloud": 75,
        "condition": {
          "code": 1030,
          "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
          "text": "Mist",
        },
        "feelslike_c": 37,
        "feelslike_f": 98.5,
        "gust_kph": 6.5,
        "gust_mph": 4,
        "humidity": 89,
        "is_day": 0,
        "last_updated": "2020-09-09 20:15",
        "last_updated_epoch": 1599662712,
        "precip_in": 0.04,
        "precip_mm": 0.9,
        "pressure_in": 30.1,
        "pressure_mb": 1004,
        "temp_c": 30,
        "temp_f": 86,
        "updated_at": new Date(1599676614151),
        "uv": 1,
        "vis_km": 3,
        "vis_miles": 1,
        "wind_degree": 100,
        "wind_dir": "E",
        "wind_kph": 6.8,
        "wind_mph": 4.3,
      },
      "id": "Country3/Region3/City3",
      "name": "City3",
      "note": "",
      "region": "Region3",
    }
  });


  city.setNote('test note');
  expect(city.note).toBe('test note');

  city.setCurrentWeather({
    city: {
      name: 'City3',
      region: 'Region3',
      country: 'Country3',
    },
    current: {
      "last_updated_epoch": 1599662712, "last_updated": "2020-09-09 20:15", "temp_c": 31, "temp_f": 86, "is_day": 0, "condition": { "text": "Mist", "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png", "code": 1030 }, "wind_mph": 4.3, "wind_kph": 6.8, "wind_degree": 100, "wind_dir": "E", "pressure_mb": 1004, "pressure_in": 30.1, "precip_mm": 0.9, "precip_in": 0.04, "humidity": 89, "cloud": 75, "feelslike_c": 37, "feelslike_f": 98.5, "vis_km": 3, "vis_miles": 1, "uv": 1, "gust_mph": 4, "gust_kph": 6.5, "updated_at": new Date(1599676614151),
    }
  })

  expect(store.cities.toPOJO()).toStrictEqual({
    "Country3/Region3/City3": {
      "country": "Country3",
      "currentWeather": {
        "cloud": 75,
        "condition": {
          "code": 1030,
          "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
          "text": "Mist",
        },
        "feelslike_c": 37,
        "feelslike_f": 98.5,
        "gust_kph": 6.5,
        "gust_mph": 4,
        "humidity": 89,
        "is_day": 0,
        "last_updated": "2020-09-09 20:15",
        "last_updated_epoch": 1599662712,
        "precip_in": 0.04,
        "precip_mm": 0.9,
        "pressure_in": 30.1,
        "pressure_mb": 1004,
        "temp_c": 31,
        "temp_f": 86,
        "updated_at": new Date(1599676614151),
        "uv": 1,
        "vis_km": 3,
        "vis_miles": 1,
        "wind_degree": 100,
        "wind_dir": "E",
        "wind_kph": 6.8,
        "wind_mph": 4.3,
      },
      "id": "Country3/Region3/City3",
      "name": "City3",
      "note": "test note",
      "region": "Region3",
    }
  });
});

test('store set top city and favorite', () => {
  localStorage.clear();
  const store = createStore();

  const city3 = store.addCityWeather({
    city: {
      name: 'City3',
      region: 'Region3',
      country: 'Country3',
    },
    current: {
      "last_updated_epoch": 1599662712, "last_updated": "2020-09-09 20:15", "temp_c": 30, "temp_f": 86, "is_day": 0, "condition": { "text": "Mist", "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png", "code": 1030 }, "wind_mph": 4.3, "wind_kph": 6.8, "wind_degree": 100, "wind_dir": "E", "pressure_mb": 1004, "pressure_in": 30.1, "precip_mm": 0.9, "precip_in": 0.04, "humidity": 89, "cloud": 75, "feelslike_c": 37, "feelslike_f": 98.5, "vis_km": 3, "vis_miles": 1, "uv": 1, "gust_mph": 4, "gust_kph": 6.5, "updated_at": new Date(1599676614151),
    }
  });
  const city4 = store.addCityWeather({
    city: {
      name: 'City4',
      region: 'Region4',
      country: 'Country4',
    },
    current: {
      "last_updated_epoch": 1599662712, "last_updated": "2020-09-09 20:15", "temp_c": 30, "temp_f": 86, "is_day": 0, "condition": { "text": "Mist", "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png", "code": 1030 }, "wind_mph": 4.3, "wind_kph": 6.8, "wind_degree": 100, "wind_dir": "E", "pressure_mb": 1004, "pressure_in": 30.1, "precip_mm": 0.9, "precip_in": 0.04, "humidity": 89, "cloud": 75, "feelslike_c": 37, "feelslike_f": 98.5, "vis_km": 3, "vis_miles": 1, "uv": 1, "gust_mph": 4, "gust_kph": 6.5, "updated_at": new Date(1599676614151),
    }
  });

  store.addToFavorite(city3);
  expect(store.favoriteCities).toStrictEqual([city3]);

  store.addToTopCity(city4);
  expect(store.topCities).toStrictEqual([city4]);
  store.addToFavorite(city4);
  expect(store.favoriteCities).toStrictEqual([city3, city4]);
  expect(store.topCities).toStrictEqual([]);

  store.removeFromFavorite(city3);
  expect(store.favoriteCities).toStrictEqual([city4]);
  expect(store.topCities).toStrictEqual([]);

  store.addToTopCity(city3);
  expect(store.topCities).toStrictEqual([city3]);

  store.removeFromTopCity(city3);
  expect(store.topCities).toStrictEqual([]);

  expect(store.cities.toPOJO()).toStrictEqual({"Country3/Region3/City3": city3, "Country4/Region4/City4": city4});
  store.removeCityWeather(city3);
  expect(store.cities.toPOJO()).toStrictEqual({"Country4/Region4/City4": city4});
});

test('store lookup test', () => {
  localStorage.clear();
  const store = createStore();

  store.setLookup('CityName');
  expect(store.lookup).toBe('CityName');

  store.setLookupResult([
    {
      name: 'CityName3',
      region: 'Region3',
      country: 'Country3',
    },
    {
      name: 'CityName4',
      region: 'Region4',
      country: 'Country4',
    },
  ]);
  expect(store.lookupResult).toStrictEqual([
    {
      name: 'CityName3',
      region: 'Region3',
      country: 'Country3',
    },
    {
      name: 'CityName4',
      region: 'Region4',
      country: 'Country4',
    },
  ]);

  store.setLookupActiveIndex(1);
  expect(store.lookupActiveIndex).toBe(1);

  store.setLookupResult(undefined);
  expect(store.lookupResult).toStrictEqual([]);
});

test('store saves data', () => {
  localStorage.clear();
  const store = createStore();

  store.setTopCities([{
    name: 'City1',
    region: 'Region',
    country: 'Country',
  }, {
    name: 'City2',
    region: 'Region2',
    country: 'Country2',
  }]);

  const city = store.cities.get('Country2/Region2/City2');
  city && store.addToFavorite(city);

  const city3 = store.addCityWeather({
    city: {
      name: 'City3',
      region: 'Region3',
      country: 'Country3',
    },
    current: {
      "last_updated_epoch": 1599662712, "last_updated": "2020-09-09 20:15", "temp_c": 30, "temp_f": 86, "is_day": 0, "condition": { "text": "Mist", "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png", "code": 1030 }, "wind_mph": 4.3, "wind_kph": 6.8, "wind_degree": 100, "wind_dir": "E", "pressure_mb": 1004, "pressure_in": 30.1, "precip_mm": 0.9, "precip_in": 0.04, "humidity": 89, "cloud": 75, "feelslike_c": 37, "feelslike_f": 98.5, "vis_km": 3, "vis_miles": 1, "uv": 1, "gust_mph": 4, "gust_kph": 6.5, "updated_at": new Date(1599676614151),
    }
  });
  city3.setNote('Test Note');

  store.setLookup('lookup test');
  store.setLookupResult([{
    name: 'City4',
    region: 'Region4',
    country: 'Country4',
  }]);
  store.setLookupActiveIndex(0);

  const storedOffline = JSON.parse(localStorage.getItem(SNAPSHOT_KEY) as string);

  expect(storedOffline.lookup).toBe('lookup test');
  expect(storedOffline.lookupActiveIndex).toBe(0);
  expect(storedOffline.lookupResult).toStrictEqual([{
    name: 'City4',
    region: 'Region4',
    country: 'Country4',
  }]);

  expect(storedOffline.topCities).toStrictEqual(['Country/Region/City1']);
  expect(storedOffline.favoriteCities).toStrictEqual(['Country2/Region2/City2']);
  expect(storedOffline.cities).toStrictEqual({
    'Country/Region/City1': {
      id: 'Country/Region/City1',
      name: 'City1',
      country: 'Country',
      region: 'Region',
      note: '',
      currentWeather: null
    },
    'Country2/Region2/City2': {
      id: 'Country2/Region2/City2',
      name: 'City2',
      country: 'Country2',
      region: 'Region2',
      note: '',
      currentWeather: null
    },
    "Country3/Region3/City3": {
      "country": "Country3",
      "currentWeather": {
        "cloud": 75,
        "condition": {
          "code": 1030,
          "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
          "text": "Mist",
        },
        "feelslike_c": 37,
        "feelslike_f": 98.5,
        "gust_kph": 6.5,
        "gust_mph": 4,
        "humidity": 89,
        "is_day": 0,
        "last_updated": "2020-09-09 20:15",
        "last_updated_epoch": 1599662712,
        "precip_in": 0.04,
        "precip_mm": 0.9,
        "pressure_in": 30.1,
        "pressure_mb": 1004,
        "temp_c": 30,
        "temp_f": 86,
        "updated_at": 1599676614151,
        "uv": 1,
        "vis_km": 3,
        "vis_miles": 1,
        "wind_degree": 100,
        "wind_dir": "E",
        "wind_kph": 6.8,
        "wind_mph": 4.3,
      },
      "id": "Country3/Region3/City3",
      "name": "City3",
      "note": "Test Note",
      "region": "Region3",
    }
  });

});