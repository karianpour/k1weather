import { TAppApi, ICity, IWeatherData } from './AppApi';

export class MockAppApi implements TAppApi {
  async fetchTopCities(): Promise<ICity[] | undefined> {
    return [
      {
        name: 'City2',
        country: 'Country2',
        region: 'Region2',
      }, {
        name: 'City3',
        country: 'Country3',
        region: 'Region3',
      },
    ];
  }
  async fetchWeatherForCity(cityName: string): Promise<IWeatherData | undefined> {
    return {
      city: {
        name: 'City2',
        country: 'Country2',
        region: 'Region2',
      },
      current: {
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
      }
    }
  }

  async fetchWeatherForLocation(lat: number, lon: number): Promise<IWeatherData | undefined> {
    return this.fetchWeatherForCity('');
  }

  async fetchWeatherForMyIP(): Promise<IWeatherData | undefined> {
    return this.fetchWeatherForCity('');
  }

  async fetchWeather(url: string): Promise<IWeatherData | undefined> {
    return this.fetchWeatherForCity('');
  }

  async fetchLookup(query: string): Promise<ICity[] | undefined> {
    return [
      {
        name: 'City2',
        country: 'Country2',
        region: 'Region2',
      }, {
        name: 'City3',
        country: 'Country3',
        region: 'Region3',
      },
    ];
  }
}