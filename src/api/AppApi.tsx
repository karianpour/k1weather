
export interface IWeatherData {
  city: ICity,
  current: {
    "last_updated_epoch": number,
    "last_updated": string,
    "temp_c": number,
    "temp_f": number,
    "is_day": number,
    "condition": {
      "text": string,
      "icon": string,
      "code": number,
    },
    "wind_mph": number,
    "wind_kph": number,
    "wind_degree": number,
    "wind_dir": string,
    "pressure_mb": number,
    "pressure_in": number,
    "precip_mm": number,
    "precip_in": number,
    "humidity": number,
    "cloud": number,
    "feelslike_c": number,
    "feelslike_f": number,
    "vis_km": number,
    "vis_miles": number,
    "uv": number,
    "gust_mph": number,
    "gust_kph": number,
    updated_at: Date,
  }
}

export interface ICity {
  name: string,
  country: string,
  region: string,
}

export interface TAppApi {
  fetchTopCities(): Promise<ICity[] | undefined>;
  fetchWeatherForCity(cityName: string): Promise<IWeatherData | undefined>;
  fetchWeatherForLocation(lat: number, lon: number): Promise<IWeatherData | undefined>;
  fetchWeatherForMyIP(): Promise<IWeatherData | undefined>;
  fetchWeather(url: string): Promise<IWeatherData | undefined>;
  fetchLookup(query: string): Promise<ICity[] | undefined>;
}

export class AppApi implements TAppApi{
  private WeatherAPIKey: string;

  constructor() {
    // Setting api key in front-end is a bad practice and not secure,
    // but as the requirement is to avoid having back-end there is no other way 
    this.WeatherAPIKey = process.env.REACT_APP_WEATHERAPI_API_KEY || '';
  }

  async fetchTopCities(): Promise<ICity[] | undefined> {
    const url = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country`;
    try {
      const response = await fetch(url);
      const data = await response.json() as { records: any[] };
      if(response.status===200){
        const cities = data?.records?.map((r: any) => ({
          name: (r?.fields?.accentcity || r?.fields?.name) as string,
          country: r?.fields?.country as string,
          region: r?.fields?.region as string,
        })).sort((a, b) => a.name.localeCompare(b.name));
        return cities;
      }else{
      }
    } catch (err) {
      this.errorHandler(err);
    }
  }

  async fetchWeatherForCity(cityName: string): Promise<IWeatherData | undefined> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.WeatherAPIKey}&q=${cityName}`;
    // docs under https://www.weatherapi.com/api-explorer.aspx
    return this.fetchWeather(url);
  }

  async fetchWeatherForLocation(lat: number, lon: number): Promise<IWeatherData | undefined> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.WeatherAPIKey}&query=${lat},${lon}`;
    return this.fetchWeather(url);
  }

  async fetchWeatherForMyIP(): Promise<IWeatherData | undefined> {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.WeatherAPIKey}&query=fetch:ip`;
    return this.fetchWeather(url);
  }

  async fetchWeather(url: string): Promise<IWeatherData | undefined> {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if(response.status===200){
        const weather = {
          city: {
            name: data.location.name,
            country: data.location.country,
            region: data.location.region || 'x',
          },
          current: {
            "last_updated_epoch": data.current.last_updated_epoch,
            "last_updated": data.current.last_updated,
            "temp_c": data.current.temp_c,
            "temp_f": data.current.temp_f,
            "is_day": data.current.is_day,
            "condition": {
              "text": data.current.condition.text,
              "icon": data.current.condition.icon,
              "code": data.current.condition.code,
            },
            "wind_mph": data.current.wind_mph,
            "wind_kph": data.current.wind_kph,
            "wind_degree": data.current.wind_degree,
            "wind_dir": data.current.wind_dir,
            "pressure_mb": data.current.pressure_mb,
            "pressure_in": data.current.pressure_in,
            "precip_mm": data.current.precip_mm,
            "precip_in": data.current.precip_in,
            "humidity": data.current.humidity,
            "cloud": data.current.cloud,
            "feelslike_c": data.current.feelslike_c,
            "feelslike_f": data.current.feelslike_f,
            "vis_km": data.current.vis_km,
            "vis_miles": data.current.vis_miles,
            "uv": data.current.uv,
            "gust_mph": data.current.gust_mph,
            "gust_kph": data.current.gust_kph,
            updated_at: new Date(),
          }
        };
        return weather;
      }else{
        // {"error":{"code":2006,"message":"API key is invalid."}}
      }
    } catch (err) {
      this.errorHandler(err);
    }
  }

  async fetchLookup(query: string): Promise<ICity[] | undefined> {
    const url = `https://api.weatherapi.com/v1/search.json?key=${this.WeatherAPIKey}&q=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json() as any[];
      if(response.status===200){
        const cities = data.map( c => ({
          name: c.name,
          region: c.region || 'x',
          country: c.country,
        }));
        return cities;
      }else{
        // {"error":{"code":2006,"message":"API key is invalid."}}
      }
    } catch (err) {
      this.errorHandler(err);
    }
  }

  errorHandler (err: any){
    if(err.message?.includes('NetworkError') || err.message?.includes('Failed to fetch')){
      throw new Error('NetworkError');
    }else{
      console.log(err);
      throw new Error('UnknownError');
    }
  }

}

