import React from 'react';
import { render, screen } from '../test-utils';
import CityWeatherCard from './CityWeatherCard';
import { createTestStore } from '../state/weather-state';

test('renders CityWeatherCard with loading', () => {
  const store = createTestStore({
    cities: {
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
    },
    topCities: ['Country/Region/City1', 'Country2/Region2/City2'],
  });

  const city = store.topCities[0];
  render(
    <CityWeatherCard city={city}/>,
    {
      store,
    }
  );

  expect(screen.getByText("City1")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/city/Country/Region/City1');

  expect(screen.getByRole("loading")).toBeInTheDocument();
});

test('renders CityWeatherCard with above zero weather', () => {
  const store = createTestStore({
    cities: {
      'Country/Region/City1': {
        id: 'Country/Region/City1',
        name: 'City1',
        country: 'Country',
        region: 'Region',
        note: '',
        currentWeather: {
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
      },
      'Country2/Region2/City2': {
        id: 'Country2/Region2/City2',
        name: 'City2',
        country: 'Country2',
        region: 'Region2',
        note: '',
        currentWeather: null
      },
    },
    topCities: ['Country/Region/City1', 'Country2/Region2/City2'],
  });

  const city = store.topCities[0];
  render(
    <CityWeatherCard city={city}/>,
    {
      store,
    }
  );

  expect(screen.getByText("City1")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/city/Country/Region/City1');
  
  expect(screen.getByText("9/9/2020, 7:15:12 PM")).toBeInTheDocument();
  const temp = screen.getByText("+30°");
  expect(temp).toBeInTheDocument();
  expect(temp).toHaveClass('positive-0-2-8');
});

test('renders CityWeatherCard with below zero weather', () => {
  const store = createTestStore({
    cities: {
      'Country/Region/City1': {
        id: 'Country/Region/City1',
        name: 'City1',
        country: 'Country',
        region: 'Region',
        note: '',
        currentWeather: {
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
          "temp_c": -30,
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
      },
      'Country2/Region2/City2': {
        id: 'Country2/Region2/City2',
        name: 'City2',
        country: 'Country2',
        region: 'Region2',
        note: '',
        currentWeather: null
      },
    },
    topCities: ['Country/Region/City1', 'Country2/Region2/City2'],
  });

  const city = store.topCities[0];
  render(
    <CityWeatherCard city={city}/>,
    {
      store,
    }
  );

  expect(screen.getByText("City1")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/city/Country/Region/City1');
  
  expect(screen.getByText("9/9/2020, 7:15:12 PM")).toBeInTheDocument();
  const temp = screen.getByText("-30°");
  expect(temp).toBeInTheDocument();
  expect(temp).toHaveClass('negative-0-2-7');
});
