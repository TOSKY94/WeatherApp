// Root object
export interface WeatherData {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherEntry[];
    city: City;
  }
  
  // Weather entry for each timestamp
  export interface WeatherEntry {
    dt: number;
    main: MainWeather;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
  }
  
  // Main weather information
  export interface MainWeather {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
  
  // Weather description
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  // Cloud information
  export interface Clouds {
    all: number;
  }
  
  // Wind information
  export interface Wind {
    speed: number;
    deg: number;
    gust: number;
  }
  
  // System information
  export interface Sys {
    pod: string;
  }
  
  // City information
  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }
  
  // Coordinates for the city
  export interface Coord {
    lat: number;
    lon: number;
  }
  
export interface SingleWeatherDetailsProps{
  information: string;
  icon: React.ReactNode;
  value: string;
}

export interface WeatherDetailsProps{
  visibility: string;
  humidity: string;
  windspeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}

export interface ForcastWeatherDetailsProps extends WeatherDetailsProps{
  weatherIcon: string;
  date: string;
  day: string;
  feels_like: number;
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

