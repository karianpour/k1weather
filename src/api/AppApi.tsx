
export interface IWeatherData {
  city: ICity,
  current: {
    observation_time: string,
    temperature: number,
    weather_code: number,
    weather_icons: string[],
    weather_descriptions: string[],
    wind_speed: number,
    wind_degree: number,
    wind_dir: string,
    pressure: number,
    precip: number,
    humidity: number,
    cloudcover: number,
    feelslike: number,
    uv_index: number,
    visibility: number,
    is_day: boolean,
    updated_at: Date,
  }
}

export interface ICity {
  name: string,
  country: string,
  region: string,
}

export class AppApi {
  private WeatherstackAPIKey: string;

  constructor(){
    // Setting api key in front-end is a bad practice and not secure,
    // but as the requirement is to avoid having back-end there is no other way 
    this.WeatherstackAPIKey = process.env.REACT_APP_WEATHERSTACK_API_KEY || '';
  }

  async fetchTopCities(): Promise<ICity[] | undefined> {
    const url = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country`;
    try{
      const response = await fetch(url);
      const data = await response.json() as { records: any[] };
      const cities = data?.records?.map( (r: any) => ({
        name: (r?.fields?.accentcity || r?.fields?.name) as string,
        country: r?.fields?.country as string,
        region: r?.fields?.region as string,
      })).sort( (a, b) => a.name.localeCompare(b.name));
      return cities;
    }catch(err){
      console.log(err);
    }
  }

  async fetchWeatherForCity(cityName: string): Promise<IWeatherData | undefined> {
    // using http is not secure, but the free plan of the api does not support it
    const url = `http://api.weatherstack.com/current?access_key=${this.WeatherstackAPIKey}&query=${cityName}`;
    // docs under https://weatherstack.com/documentation#query_parameter
    try{
      const response = await fetch(url);
      const data = await response.json();
      const weather = {
        city: {
          name: data.location.name,
          country: data.location.country,
          region: data.location.region,
        },
        current: {
          observation_time: data.current.observation_time,
          temperature: data.current.temperature,
          weather_code: data.current.weather_code,
          weather_icons: data.current.weather_icons,
          weather_descriptions: data.current.weather_descriptions,
          wind_speed: data.current.wind_speed,
          wind_degree: data.current.wind_degree,
          wind_dir: data.current.wind_dir,
          pressure: data.current.pressure,
          precip: data.current.precip,
          humidity: data.current.humidity,
          cloudcover: data.current.cloudcover,
          feelslike: data.current.feelslike,
          uv_index: data.current.uv_index,
          visibility: data.current.visibility,
          is_day: data.current.is_day === "yes",
          updated_at: new Date(),
        }
      };
      return weather;
    }catch(err){
      console.log(err);
    }
  }

  async fetchWeatherForLocation(lat: number, lon: number): Promise<IWeatherData | undefined> {
    // using http is not secure, but the free plan of the api does not support it
    const url = `http://api.weatherstack.com/current?access_key=${this.WeatherstackAPIKey}&query=${lat},${lon}`;
    // docs under https://weatherstack.com/documentation#query_parameter
    return;
  }

  async fetchWeatherForMyIP(): Promise<IWeatherData | undefined> {
    // using http is not secure, but the free plan of the api does not support it
    const url = `http://api.weatherstack.com/current?access_key=${this.WeatherstackAPIKey}&query=fetch:ip`;
    // docs under https://weatherstack.com/documentation#query_parameter
    return;
  }

  async fetchLookup(query: string): Promise<ICity | undefined> {
    // using http is not secure, but the free plan of the api does not support it
    const url = `http://api.weatherstack.com/autocomplete?access_key=${this.WeatherstackAPIKey}&query=${query}`;
    // docs under https://weatherstack.com/documentation#query_parameter
    return;
  }

}