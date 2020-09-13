import React from 'react';
import { render, screen, fireEvent } from '../test-utils';
import CityDetails from './CityDetails';
import { createTestStore } from '../state/weather-state';

test('renders CityDetails with loading', () => {
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
    <CityDetails city={city}/>,
    {
      store,
    }
  );

  expect(screen.getByText("City1")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  expect(screen.getByRole("loading")).toBeInTheDocument();
});

test('renders CityDetails with above zero weather', () => {
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
          "uv": 1675,
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
    <CityDetails city={city}/>,
    {
      store,
    }
  );

  expect(screen.getByText("City1")).toBeInTheDocument();
  expect(screen.getByRole("heading")).toBeInTheDocument();

  expect(screen.getByText("9/9/2020, 7:15:12 PM")).toBeInTheDocument();
  const temp = screen.getByText("+30°");
  expect(temp).toBeInTheDocument();
  expect(temp).toHaveClass('positive-0-2-8');
  
  expect(screen.getByText("Feels like")).toBeInTheDocument();
  const feelsLike = screen.getByText("+37°");
  expect(feelsLike).toBeInTheDocument();
  expect(feelsLike).toHaveClass('positive-0-2-8');
  
  const img = screen.getByRole('img');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('alt', 'Mist');
  expect(img).toHaveAttribute('src', '//cdn.weatherapi.com/weather/64x64/night/143.png');
  
  const windDirection = screen.getByRole('windDirection');
  expect(windDirection).toBeInTheDocument();
  expect(windDirection).toHaveAttribute('style', 'transform: rotate(100deg);');

  expect(screen.getByText("6.8 km/h")).toBeInTheDocument();
  expect(screen.getByText("Gust 6.5 km/h")).toBeInTheDocument();
  expect(screen.getByText("1675")).toBeInTheDocument();
  expect(screen.getByText("UV factor")).toBeInTheDocument();
  expect(screen.getByText("89")).toBeInTheDocument();
  expect(screen.getByText("Humidity")).toBeInTheDocument();
  expect(screen.getByText("3 Km")).toBeInTheDocument();
  expect(screen.getByText("Visibility")).toBeInTheDocument();
  expect(screen.getByText("0.9 mm")).toBeInTheDocument();
  expect(screen.getByText("Precipitation")).toBeInTheDocument();
  expect(screen.getByText("1004 hPa")).toBeInTheDocument();
  expect(screen.getByText("Pressure")).toBeInTheDocument();
  expect(screen.getByText("Note")).toBeInTheDocument();

  const noteButton = screen.getByRole('noteEdit');
  expect(noteButton).toBeInTheDocument();
  fireEvent.click(noteButton);
  
  const noteEditor = screen.getByTestId('note-textbox');
  expect(noteEditor).toBeInTheDocument();
  fireEvent.change(noteEditor, { target: { value: 'new note'} }) ;

  expect(store.topCities[0].note).toBe('new note');

  fireEvent.click(noteButton);
  expect(screen.getByText("new note")).toBeInTheDocument();

  expect(screen.queryByTestId("note-textbox")).toBeNull();

  expect(screen.queryByRole("unfavorite")).toBeNull();

  const favoriteButton = screen.getByRole('favorite');
  expect(favoriteButton).toBeInTheDocument();
  fireEvent.click(favoriteButton);

  expect(screen.queryByRole("favorite")).toBeNull();

  const unfavoriteButton = screen.getByRole('unfavorite');
  expect(unfavoriteButton).toBeInTheDocument();
  fireEvent.click(unfavoriteButton);

  expect(screen.queryByRole("unfavorite")).toBeNull();
});

test('renders CityDetails with below zero weather', () => {
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
          "feelslike_c": -37,
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
          "uv": 1675,
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
    <CityDetails city={city}/>,
    {
      store,
    }
  );

  const temp = screen.getByText("-30°");
  expect(temp).toBeInTheDocument();
  expect(temp).toHaveClass('negative-0-2-7');
  
  expect(screen.getByText("Feels like")).toBeInTheDocument();
  const feelsLike = screen.getByText("-37°");
  expect(feelsLike).toBeInTheDocument();
  expect(feelsLike).toHaveClass('negative-0-2-7');
});

