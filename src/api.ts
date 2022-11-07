import { City } from "./cities";

export type RawWeather = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
    rain?: {
      "3h": number;
    };
  }>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export type Weather = {
  city: {
    id: string;
    name: string;
  };
  forecast: {
    date: string;
    min: number;
    max: number;
  }[];
};
export function kelvinToCelsius(temp: number): number {
  return Math.round(temp - 273.15);
}
export function formatWeather(weather: RawWeather): Weather {
  const {
    0: first,
    8: second,
    16: third,
    24: fourth,
    32: fifth,
  } = weather.list;

  return {
    city: {
      id: String(weather.city.id),
      name: weather.city.name,
    },
    forecast: [first, second, third, fourth, fifth].map((forecast: any) => ({
      date: new Date(forecast.dt * 1000).toLocaleDateString("es-BO"),
      min: kelvinToCelsius(forecast.main.temp_min),
      max: kelvinToCelsius(forecast.main.temp_max),
    })),
  };
}
const api = {
  weather: {
    fetch: async (city: City): Promise<Weather> => {
      //   const response : RawWeather = {
      //     "cod": "200",
      //     "message": 0,
      //     "cnt": 40,
      //     "list": [
      //       {
      //         "dt": 1667617200,
      //         "main": {
      //           "temp": 289.04,
      //           "feels_like": 287.52,
      //           "temp_min": 286.92,
      //           "temp_max": 289.04,
      //           "pressure": 1021,
      //           "sea_level": 1021,
      //           "grnd_level": 820,
      //           "humidity": 32,
      //           "temp_kf": 2.12
      //         },
      //         "weather": [
      //           {
      //             "id": 802,
      //             "main": "Clouds",
      //             "description": "scattered clouds",
      //             "icon": "03n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 34
      //         },
      //         "wind": {
      //           "speed": 0.45,
      //           "deg": 44,
      //           "gust": 0.83
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-05 03:00:00"
      //       },
      //       {
      //         "dt": 1667628000,
      //         "main": {
      //           "temp": 286.85,
      //           "feels_like": 285.22,
      //           "temp_min": 285.22,
      //           "temp_max": 286.85,
      //           "pressure": 1019,
      //           "sea_level": 1019,
      //           "grnd_level": 817,
      //           "humidity": 36,
      //           "temp_kf": 1.63
      //         },
      //         "weather": [
      //           {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 21
      //         },
      //         "wind": {
      //           "speed": 1.68,
      //           "deg": 42,
      //           "gust": 1.7
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-05 06:00:00"
      //       },
      //       {
      //         "dt": 1667638800,
      //         "main": {
      //           "temp": 283.48,
      //           "feels_like": 281.72,
      //           "temp_min": 283.48,
      //           "temp_max": 283.48,
      //           "pressure": 1017,
      //           "sea_level": 1017,
      //           "grnd_level": 816,
      //           "humidity": 44,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 0.79,
      //           "deg": 50,
      //           "gust": 1.2
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-05 09:00:00"
      //       },
      //       {
      //         "dt": 1667649600,
      //         "main": {
      //           "temp": 288.14,
      //           "feels_like": 286.53,
      //           "temp_min": 288.14,
      //           "temp_max": 288.14,
      //           "pressure": 1019,
      //           "sea_level": 1019,
      //           "grnd_level": 820,
      //           "humidity": 32,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 1.64,
      //           "deg": 144,
      //           "gust": 1.29
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-05 12:00:00"
      //       },
      //       {
      //         "dt": 1667660400,
      //         "main": {
      //           "temp": 293.46,
      //           "feels_like": 292.15,
      //           "temp_min": 293.46,
      //           "temp_max": 293.46,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 821,
      //           "humidity": 23,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 1.98,
      //           "deg": 141,
      //           "gust": 2.08
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-05 15:00:00"
      //       },
      //       {
      //         "dt": 1667671200,
      //         "main": {
      //           "temp": 297.5,
      //           "feels_like": 296.51,
      //           "temp_min": 297.5,
      //           "temp_max": 297.5,
      //           "pressure": 1011,
      //           "sea_level": 1011,
      //           "grnd_level": 820,
      //           "humidity": 20,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 7.27,
      //           "deg": 124,
      //           "gust": 4.29
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-05 18:00:00"
      //       },
      //       {
      //         "dt": 1667682000,
      //         "main": {
      //           "temp": 295.27,
      //           "feels_like": 294.24,
      //           "temp_min": 295.27,
      //           "temp_max": 295.27,
      //           "pressure": 1012,
      //           "sea_level": 1012,
      //           "grnd_level": 819,
      //           "humidity": 27,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 1
      //         },
      //         "wind": {
      //           "speed": 7.7,
      //           "deg": 121,
      //           "gust": 6.24
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-05 21:00:00"
      //       },
      //       {
      //         "dt": 1667692800,
      //         "main": {
      //           "temp": 290.55,
      //           "feels_like": 289.36,
      //           "temp_min": 290.55,
      //           "temp_max": 290.55,
      //           "pressure": 1017,
      //           "sea_level": 1017,
      //           "grnd_level": 820,
      //           "humidity": 39,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 802,
      //             "main": "Clouds",
      //             "description": "scattered clouds",
      //             "icon": "03n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 28
      //         },
      //         "wind": {
      //           "speed": 2.1,
      //           "deg": 133,
      //           "gust": 2.82
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-06 00:00:00"
      //       },
      //       {
      //         "dt": 1667703600,
      //         "main": {
      //           "temp": 288.87,
      //           "feels_like": 287.67,
      //           "temp_min": 288.87,
      //           "temp_max": 288.87,
      //           "pressure": 1018,
      //           "sea_level": 1018,
      //           "grnd_level": 820,
      //           "humidity": 45,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 803,
      //             "main": "Clouds",
      //             "description": "broken clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 80
      //         },
      //         "wind": {
      //           "speed": 0.97,
      //           "deg": 124,
      //           "gust": 1.35
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-06 03:00:00"
      //       },
      //       {
      //         "dt": 1667714400,
      //         "main": {
      //           "temp": 287.24,
      //           "feels_like": 286.04,
      //           "temp_min": 287.24,
      //           "temp_max": 287.24,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 818,
      //           "humidity": 51,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 802,
      //             "main": "Clouds",
      //             "description": "scattered clouds",
      //             "icon": "03n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 41
      //         },
      //         "wind": {
      //           "speed": 1.43,
      //           "deg": 48,
      //           "gust": 1.55
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-06 06:00:00"
      //       },
      //       {
      //         "dt": 1667725200,
      //         "main": {
      //           "temp": 285.82,
      //           "feels_like": 284.6,
      //           "temp_min": 285.82,
      //           "temp_max": 285.82,
      //           "pressure": 1017,
      //           "sea_level": 1017,
      //           "grnd_level": 818,
      //           "humidity": 56,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 1.11,
      //           "deg": 10,
      //           "gust": 1.18
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-06 09:00:00"
      //       },
      //       {
      //         "dt": 1667736000,
      //         "main": {
      //           "temp": 290.05,
      //           "feels_like": 288.92,
      //           "temp_min": 290.05,
      //           "temp_max": 290.05,
      //           "pressure": 1019,
      //           "sea_level": 1019,
      //           "grnd_level": 821,
      //           "humidity": 43,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 0.86,
      //           "deg": 156,
      //           "gust": 0.58
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-06 12:00:00"
      //       },
      //       {
      //         "dt": 1667746800,
      //         "main": {
      //           "temp": 295.21,
      //           "feels_like": 294.25,
      //           "temp_min": 295.21,
      //           "temp_max": 295.21,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 822,
      //           "humidity": 30,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 2.29,
      //           "deg": 145,
      //           "gust": 2.25
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-06 15:00:00"
      //       },
      //       {
      //         "dt": 1667757600,
      //         "main": {
      //           "temp": 297.9,
      //           "feels_like": 297.11,
      //           "temp_min": 297.9,
      //           "temp_max": 297.9,
      //           "pressure": 1012,
      //           "sea_level": 1012,
      //           "grnd_level": 821,
      //           "humidity": 26,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 9
      //         },
      //         "wind": {
      //           "speed": 8.06,
      //           "deg": 111,
      //           "gust": 5.42
      //         },
      //         "visibility": 10000,
      //         "pop": 0.01,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-06 18:00:00"
      //       },
      //       {
      //         "dt": 1667768400,
      //         "main": {
      //           "temp": 295.01,
      //           "feels_like": 294.09,
      //           "temp_min": 295.01,
      //           "temp_max": 295.01,
      //           "pressure": 1013,
      //           "sea_level": 1013,
      //           "grnd_level": 820,
      //           "humidity": 32,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 97
      //         },
      //         "wind": {
      //           "speed": 3.42,
      //           "deg": 142,
      //           "gust": 3.69
      //         },
      //         "visibility": 10000,
      //         "pop": 0.01,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-06 21:00:00"
      //       },
      //       {
      //         "dt": 1667779200,
      //         "main": {
      //           "temp": 292.3,
      //           "feels_like": 291.26,
      //           "temp_min": 292.3,
      //           "temp_max": 292.3,
      //           "pressure": 1017,
      //           "sea_level": 1017,
      //           "grnd_level": 821,
      //           "humidity": 38,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 99
      //         },
      //         "wind": {
      //           "speed": 3.64,
      //           "deg": 136,
      //           "gust": 4.06
      //         },
      //         "visibility": 10000,
      //         "pop": 0.01,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-07 00:00:00"
      //       },
      //       {
      //         "dt": 1667790000,
      //         "main": {
      //           "temp": 290.95,
      //           "feels_like": 289.93,
      //           "temp_min": 290.95,
      //           "temp_max": 290.95,
      //           "pressure": 1018,
      //           "sea_level": 1018,
      //           "grnd_level": 821,
      //           "humidity": 44,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 100
      //         },
      //         "wind": {
      //           "speed": 0.81,
      //           "deg": 119,
      //           "gust": 1.4
      //         },
      //         "visibility": 10000,
      //         "pop": 0.12,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-07 03:00:00"
      //       },
      //       {
      //         "dt": 1667800800,
      //         "main": {
      //           "temp": 288.53,
      //           "feels_like": 287.46,
      //           "temp_min": 288.53,
      //           "temp_max": 288.53,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 818,
      //           "humidity": 51,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 803,
      //             "main": "Clouds",
      //             "description": "broken clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 71
      //         },
      //         "wind": {
      //           "speed": 1.94,
      //           "deg": 32,
      //           "gust": 1.95
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-07 06:00:00"
      //       },
      //       {
      //         "dt": 1667811600,
      //         "main": {
      //           "temp": 286.89,
      //           "feels_like": 285.78,
      //           "temp_min": 286.89,
      //           "temp_max": 286.89,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 818,
      //           "humidity": 56,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 6
      //         },
      //         "wind": {
      //           "speed": 1.44,
      //           "deg": 57,
      //           "gust": 1.62
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-07 09:00:00"
      //       },
      //       {
      //         "dt": 1667822400,
      //         "main": {
      //           "temp": 291.3,
      //           "feels_like": 290.27,
      //           "temp_min": 291.3,
      //           "temp_max": 291.3,
      //           "pressure": 1017,
      //           "sea_level": 1017,
      //           "grnd_level": 821,
      //           "humidity": 42,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 4
      //         },
      //         "wind": {
      //           "speed": 1.34,
      //           "deg": 87,
      //           "gust": 1.02
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-07 12:00:00"
      //       },
      //       {
      //         "dt": 1667833200,
      //         "main": {
      //           "temp": 296.24,
      //           "feels_like": 295.41,
      //           "temp_min": 296.24,
      //           "temp_max": 296.24,
      //           "pressure": 1014,
      //           "sea_level": 1014,
      //           "grnd_level": 822,
      //           "humidity": 31,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 0
      //         },
      //         "wind": {
      //           "speed": 1.9,
      //           "deg": 139,
      //           "gust": 1.58
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-07 15:00:00"
      //       },
      //       {
      //         "dt": 1667844000,
      //         "main": {
      //           "temp": 298.34,
      //           "feels_like": 297.62,
      //           "temp_min": 298.34,
      //           "temp_max": 298.34,
      //           "pressure": 1011,
      //           "sea_level": 1011,
      //           "grnd_level": 820,
      //           "humidity": 27,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 16
      //         },
      //         "wind": {
      //           "speed": 8.86,
      //           "deg": 102,
      //           "gust": 5.76
      //         },
      //         "visibility": 10000,
      //         "pop": 0.01,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-07 18:00:00"
      //       },
      //       {
      //         "dt": 1667854800,
      //         "main": {
      //           "temp": 295.21,
      //           "feels_like": 294.33,
      //           "temp_min": 295.21,
      //           "temp_max": 295.21,
      //           "pressure": 1012,
      //           "sea_level": 1012,
      //           "grnd_level": 819,
      //           "humidity": 33,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 98
      //         },
      //         "wind": {
      //           "speed": 3.45,
      //           "deg": 166,
      //           "gust": 3.87
      //         },
      //         "visibility": 10000,
      //         "pop": 0.16,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-07 21:00:00"
      //       },
      //       {
      //         "dt": 1667865600,
      //         "main": {
      //           "temp": 292.64,
      //           "feels_like": 291.69,
      //           "temp_min": 292.64,
      //           "temp_max": 292.64,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 821,
      //           "humidity": 40,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 99
      //         },
      //         "wind": {
      //           "speed": 2.25,
      //           "deg": 203,
      //           "gust": 1.83
      //         },
      //         "visibility": 10000,
      //         "pop": 0.36,
      //         "rain": {
      //           "3h": 0.11
      //         },
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-08 00:00:00"
      //       },
      //       {
      //         "dt": 1667876400,
      //         "main": {
      //           "temp": 291.77,
      //           "feels_like": 290.81,
      //           "temp_min": 291.77,
      //           "temp_max": 291.77,
      //           "pressure": 1018,
      //           "sea_level": 1018,
      //           "grnd_level": 822,
      //           "humidity": 43,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 100
      //         },
      //         "wind": {
      //           "speed": 0.77,
      //           "deg": 191,
      //           "gust": 2.03
      //         },
      //         "visibility": 10000,
      //         "pop": 0.17,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-08 03:00:00"
      //       },
      //       {
      //         "dt": 1667887200,
      //         "main": {
      //           "temp": 289.08,
      //           "feels_like": 288.09,
      //           "temp_min": 289.08,
      //           "temp_max": 289.08,
      //           "pressure": 1015,
      //           "sea_level": 1015,
      //           "grnd_level": 818,
      //           "humidity": 52,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 803,
      //             "main": "Clouds",
      //             "description": "broken clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 81
      //         },
      //         "wind": {
      //           "speed": 1.32,
      //           "deg": 68,
      //           "gust": 1.56
      //         },
      //         "visibility": 10000,
      //         "pop": 0.09,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-08 06:00:00"
      //       },
      //       {
      //         "dt": 1667898000,
      //         "main": {
      //           "temp": 287.2,
      //           "feels_like": 286.2,
      //           "temp_min": 287.2,
      //           "temp_max": 287.2,
      //           "pressure": 1015,
      //           "sea_level": 1015,
      //           "grnd_level": 817,
      //           "humidity": 59,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 12
      //         },
      //         "wind": {
      //           "speed": 0.87,
      //           "deg": 42,
      //           "gust": 1.12
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-08 09:00:00"
      //       },
      //       {
      //         "dt": 1667908800,
      //         "main": {
      //           "temp": 291.95,
      //           "feels_like": 291.01,
      //           "temp_min": 291.95,
      //           "temp_max": 291.95,
      //           "pressure": 1016,
      //           "sea_level": 1016,
      //           "grnd_level": 820,
      //           "humidity": 43,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 6
      //         },
      //         "wind": {
      //           "speed": 1.42,
      //           "deg": 81,
      //           "gust": 1.39
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-08 12:00:00"
      //       },
      //       {
      //         "dt": 1667919600,
      //         "main": {
      //           "temp": 296.79,
      //           "feels_like": 296.02,
      //           "temp_min": 296.79,
      //           "temp_max": 296.79,
      //           "pressure": 1013,
      //           "sea_level": 1013,
      //           "grnd_level": 821,
      //           "humidity": 31,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 1
      //         },
      //         "wind": {
      //           "speed": 1.88,
      //           "deg": 121,
      //           "gust": 1.35
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-08 15:00:00"
      //       },
      //       {
      //         "dt": 1667930400,
      //         "main": {
      //           "temp": 298.31,
      //           "feels_like": 297.61,
      //           "temp_min": 298.31,
      //           "temp_max": 298.31,
      //           "pressure": 1009,
      //           "sea_level": 1009,
      //           "grnd_level": 819,
      //           "humidity": 28,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 22
      //         },
      //         "wind": {
      //           "speed": 8.08,
      //           "deg": 99,
      //           "gust": 5.83
      //         },
      //         "visibility": 10000,
      //         "pop": 0.05,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-08 18:00:00"
      //       },
      //       {
      //         "dt": 1667941200,
      //         "main": {
      //           "temp": 296.37,
      //           "feels_like": 295.58,
      //           "temp_min": 296.37,
      //           "temp_max": 296.37,
      //           "pressure": 1009,
      //           "sea_level": 1009,
      //           "grnd_level": 818,
      //           "humidity": 32,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 96
      //         },
      //         "wind": {
      //           "speed": 3.01,
      //           "deg": 132,
      //           "gust": 3.55
      //         },
      //         "visibility": 10000,
      //         "pop": 0.31,
      //         "rain": {
      //           "3h": 0.15
      //         },
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-08 21:00:00"
      //       },
      //       {
      //         "dt": 1667952000,
      //         "main": {
      //           "temp": 292.89,
      //           "feels_like": 292.09,
      //           "temp_min": 292.89,
      //           "temp_max": 292.89,
      //           "pressure": 1014,
      //           "sea_level": 1014,
      //           "grnd_level": 819,
      //           "humidity": 45,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 98
      //         },
      //         "wind": {
      //           "speed": 1.81,
      //           "deg": 253,
      //           "gust": 2.14
      //         },
      //         "visibility": 10000,
      //         "pop": 0.32,
      //         "rain": {
      //           "3h": 0.62
      //         },
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-09 00:00:00"
      //       },
      //       {
      //         "dt": 1667962800,
      //         "main": {
      //           "temp": 292.83,
      //           "feels_like": 291.98,
      //           "temp_min": 292.83,
      //           "temp_max": 292.83,
      //           "pressure": 1015,
      //           "sea_level": 1015,
      //           "grnd_level": 820,
      //           "humidity": 43,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 100
      //         },
      //         "wind": {
      //           "speed": 1.84,
      //           "deg": 199,
      //           "gust": 1.63
      //         },
      //         "visibility": 10000,
      //         "pop": 0.09,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-09 03:00:00"
      //       },
      //       {
      //         "dt": 1667973600,
      //         "main": {
      //           "temp": 290.64,
      //           "feels_like": 289.78,
      //           "temp_min": 290.64,
      //           "temp_max": 290.64,
      //           "pressure": 1012,
      //           "sea_level": 1012,
      //           "grnd_level": 817,
      //           "humidity": 51,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 804,
      //             "main": "Clouds",
      //             "description": "overcast clouds",
      //             "icon": "04n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 90
      //         },
      //         "wind": {
      //           "speed": 0.96,
      //           "deg": 75,
      //           "gust": 1.1
      //         },
      //         "visibility": 10000,
      //         "pop": 0.05,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-09 06:00:00"
      //       },
      //       {
      //         "dt": 1667984400,
      //         "main": {
      //           "temp": 289.04,
      //           "feels_like": 288.07,
      //           "temp_min": 289.04,
      //           "temp_max": 289.04,
      //           "pressure": 1012,
      //           "sea_level": 1012,
      //           "grnd_level": 815,
      //           "humidity": 53,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 801,
      //             "main": "Clouds",
      //             "description": "few clouds",
      //             "icon": "02n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 12
      //         },
      //         "wind": {
      //           "speed": 2.24,
      //           "deg": 3,
      //           "gust": 2.32
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-09 09:00:00"
      //       },
      //       {
      //         "dt": 1667995200,
      //         "main": {
      //           "temp": 294.18,
      //           "feels_like": 293.33,
      //           "temp_min": 294.18,
      //           "temp_max": 294.18,
      //           "pressure": 1011,
      //           "sea_level": 1011,
      //           "grnd_level": 818,
      //           "humidity": 38,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 6
      //         },
      //         "wind": {
      //           "speed": 2.69,
      //           "deg": 41,
      //           "gust": 3.07
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-09 12:00:00"
      //       },
      //       {
      //         "dt": 1668006000,
      //         "main": {
      //           "temp": 300.06,
      //           "feels_like": 299.33,
      //           "temp_min": 300.06,
      //           "temp_max": 300.06,
      //           "pressure": 1007,
      //           "sea_level": 1007,
      //           "grnd_level": 818,
      //           "humidity": 25,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 800,
      //             "main": "Clear",
      //             "description": "clear sky",
      //             "icon": "01d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 2
      //         },
      //         "wind": {
      //           "speed": 4.52,
      //           "deg": 69,
      //           "gust": 5.29
      //         },
      //         "visibility": 10000,
      //         "pop": 0,
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-09 15:00:00"
      //       },
      //       {
      //         "dt": 1668016800,
      //         "main": {
      //           "temp": 299.7,
      //           "feels_like": 299.7,
      //           "temp_min": 299.7,
      //           "temp_max": 299.7,
      //           "pressure": 1004,
      //           "sea_level": 1004,
      //           "grnd_level": 815,
      //           "humidity": 28,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 39
      //         },
      //         "wind": {
      //           "speed": 5.84,
      //           "deg": 87,
      //           "gust": 4.35
      //         },
      //         "visibility": 10000,
      //         "pop": 0.29,
      //         "rain": {
      //           "3h": 0.13
      //         },
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-09 18:00:00"
      //       },
      //       {
      //         "dt": 1668027600,
      //         "main": {
      //           "temp": 298.52,
      //           "feels_like": 297.9,
      //           "temp_min": 298.52,
      //           "temp_max": 298.52,
      //           "pressure": 1003,
      //           "sea_level": 1003,
      //           "grnd_level": 814,
      //           "humidity": 30,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10d"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 72
      //         },
      //         "wind": {
      //           "speed": 5.95,
      //           "deg": 86,
      //           "gust": 6.3
      //         },
      //         "visibility": 10000,
      //         "pop": 0.31,
      //         "rain": {
      //           "3h": 0.49
      //         },
      //         "sys": {
      //           "pod": "d"
      //         },
      //         "dt_txt": "2022-11-09 21:00:00"
      //       },
      //       {
      //         "dt": 1668038400,
      //         "main": {
      //           "temp": 293.13,
      //           "feels_like": 292.52,
      //           "temp_min": 293.13,
      //           "temp_max": 293.13,
      //           "pressure": 1008,
      //           "sea_level": 1008,
      //           "grnd_level": 815,
      //           "humidity": 51,
      //           "temp_kf": 0
      //         },
      //         "weather": [
      //           {
      //             "id": 500,
      //             "main": "Rain",
      //             "description": "light rain",
      //             "icon": "10n"
      //           }
      //         ],
      //         "clouds": {
      //           "all": 74
      //         },
      //         "wind": {
      //           "speed": 2.56,
      //           "deg": 156,
      //           "gust": 3.08
      //         },
      //         "visibility": 10000,
      //         "pop": 0.43,
      //         "rain": {
      //           "3h": 0.65
      //         },
      //         "sys": {
      //           "pod": "n"
      //         },
      //         "dt_txt": "2022-11-10 00:00:00"
      //       }
      //     ],
      //     "city": {
      //       "id": 3903320,
      //       "name": "Tarija",
      //       "coord": {
      //         "lat": 0,
      //         "lon": 0
      //       },
      //       "country": "BO",
      //       "population": 159269,
      //       "timezone": -14400,
      //       "sunrise": 1667554425,
      //       "sunset": 1667601070
      //     }
      //   }

      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=beb9c0f2fc0ece4e746ac3dcaee5b36a&mode=json`
      );
      const response: RawWeather = await request.json();
      return formatWeather(response);
    },
  },
};
export default api;
