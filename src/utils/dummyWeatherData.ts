// dummyWeatherData.ts
import { WeatherData } from "@/utils/types";

export const dummyWeatherData: WeatherData = {
  cod: "200",
  message: 0,
  cnt: 40, // For 5 days with 3-hour intervals
  list: [
    // Day 1
    {
      dt: 1693032000,
      main: {
        temp: 293.15,
        feels_like: 292.15,
        temp_min: 292.15,
        temp_max: 294.15,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 80,
        temp_kf: 1.0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 3.5,
        deg: 200,
        gust: 6.0,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-26 00:00:00",
    },
    {
      dt: 1693046400,
      main: {
        temp: 295.15,
        feels_like: 294.15,
        temp_min: 294.15,
        temp_max: 296.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 75,
        temp_kf: 0.5,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 4.0,
        deg: 210,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-26 03:00:00",
    },
    {
      dt: 1693060800,
      main: {
        temp: 297.15,
        feels_like: 296.15,
        temp_min: 296.15,
        temp_max: 298.15,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1012,
        humidity: 70,
        temp_kf: 0.2,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.0,
        deg: 220,
        gust: 8.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-26 06:00:00",
    },
    {
        dt: 1693060800,
        main: {
          temp: 297.15,
          feels_like: 296.15,
          temp_min: 296.15,
          temp_max: 298.15,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 70,
          temp_kf: 0.2,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.0,
          deg: 220,
          gust: 8.0,
        },
        visibility: 10000,
        pop: 0.0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 09:00:00",
      },
      {
        dt: 1693060800,
        main: {
          temp: 297.15,
          feels_like: 296.15,
          temp_min: 296.15,
          temp_max: 298.15,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 70,
          temp_kf: 0.2,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.0,
          deg: 220,
          gust: 8.0,
        },
        visibility: 10000,
        pop: 0.0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 12:00:00",
      },
      {
        dt: 1693060800,
        main: {
          temp: 297.15,
          feels_like: 296.15,
          temp_min: 296.15,
          temp_max: 298.15,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 70,
          temp_kf: 0.2,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.0,
          deg: 220,
          gust: 8.0,
        },
        visibility: 10000,
        pop: 0.0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 15:00:00",
      },
      {
        dt: 1693060800,
        main: {
          temp: 297.15,
          feels_like: 296.15,
          temp_min: 296.15,
          temp_max: 298.15,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 70,
          temp_kf: 0.2,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.0,
          deg: 220,
          gust: 8.0,
        },
        visibility: 10000,
        pop: 0.0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 18:00:00",
      },
      {
        dt: 1693060800,
        main: {
          temp: 297.15,
          feels_like: 296.15,
          temp_min: 296.15,
          temp_max: 298.15,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1012,
          humidity: 70,
          temp_kf: 0.2,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.0,
          deg: 220,
          gust: 8.0,
        },
        visibility: 10000,
        pop: 0.0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-08-26 21:00:00",
      },
    // Day 2
    {
      dt: 1693152000,
      main: {
        temp: 294.15,
        feels_like: 293.15,
        temp_min: 293.15,
        temp_max: 295.15,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 78,
        temp_kf: 0.9,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 60,
      },
      wind: {
        speed: 3.8,
        deg: 230,
        gust: 6.5,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 00:00:00",
    },
    {
      dt: 1693166400,
      main: {
        temp: 296.15,
        feels_like: 295.15,
        temp_min: 295.15,
        temp_max: 297.15,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 73,
        temp_kf: 0.6,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 4.2,
        deg: 240,
        gust: 6.8,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 03:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 06:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 09:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 12:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 15:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 18:00:00",
    },
    {
      dt: 1693180800,
      main: {
        temp: 298.15,
        feels_like: 297.15,
        temp_min: 297.15,
        temp_max: 299.15,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 68,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 10,
      },
      wind: {
        speed: 4.5,
        deg: 250,
        gust: 7.0,
      },
      visibility: 10000,
      pop: 0.0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-27 21:00:00",
    },
    // Day 3
    {
      dt: 1693248000,
      main: {
        temp: 295.15,
        feels_like: 294.15,
        temp_min: 294.15,
        temp_max: 296.15,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 74,
        temp_kf: 0.7,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 4.0,
        deg: 260,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-28 00:00:00",
    },

  ],
  city: {
    id: 2643743,
    name: "Leicester",
    coord: {
      lat: 51.5156177,
      lon: -0.0919983,
    },
    country: "GB",
    population: 10000000,
    timezone: 3600,
    sunrise: 1693021200,
    sunset: 1693070400,
  },
};
