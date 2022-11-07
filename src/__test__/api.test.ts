import { expect, test, describe } from "vitest";
import { formatWeather, kelvinToCelsius, type RawWeather, Weather } from "../api";

describe("kelvinToCelsius", () => {
  test("should converter temperature from kelvin to celsius", () => {
    expect(kelvinToCelsius(288.24)).toBe(15);
  });
});

describe("formatWeather", () => {
  const RESPONSE: RawWeather = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1667844000,
        main: {
          temp: 297.09,
          feels_like: 296.27,
          temp_min: 297.09,
          temp_max: 299.08,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 820,
          humidity: 28,
          temp_kf: -1.99,
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
          all: 15,
        },
        wind: {
          speed: 7.73,
          deg: 116,
          gust: 4.61,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-07 18:00:00",
      },
      {
        dt: 1667854800,
        main: {
          temp: 295.64,
          feels_like: 294.78,
          temp_min: 295.41,
          temp_max: 295.64,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 819,
          humidity: 32,
          temp_kf: 0.23,
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
          all: 70,
        },
        wind: {
          speed: 2.68,
          deg: 175,
          gust: 2.89,
        },
        visibility: 10000,
        pop: 0.2,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-07 21:00:00",
      },
      {
        dt: 1667865600,
        main: {
          temp: 293,
          feels_like: 292.03,
          temp_min: 293,
          temp_max: 293,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 822,
          humidity: 38,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 2.36,
          deg: 137,
          gust: 3.82,
        },
        visibility: 10000,
        pop: 0.16,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-08 00:00:00",
      },
      {
        dt: 1667876400,
        main: {
          temp: 290.77,
          feels_like: 289.84,
          temp_min: 290.77,
          temp_max: 290.77,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 822,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1.81,
          deg: 240,
          gust: 1.76,
        },
        visibility: 10000,
        pop: 0.37,
        rain: {
          "3h": 0.16,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-08 03:00:00",
      },
      {
        dt: 1667887200,
        main: {
          temp: 288.55,
          feels_like: 287.61,
          temp_min: 288.55,
          temp_max: 288.55,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 818,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 0.55,
          deg: 225,
          gust: 1.1,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-08 06:00:00",
      },
      {
        dt: 1667898000,
        main: {
          temp: 287.04,
          feels_like: 286,
          temp_min: 287.04,
          temp_max: 287.04,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 817,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 7,
        },
        wind: {
          speed: 1.17,
          deg: 59,
          gust: 1.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-08 09:00:00",
      },
      {
        dt: 1667908800,
        main: {
          temp: 291.5,
          feels_like: 290.49,
          temp_min: 291.5,
          temp_max: 291.5,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 821,
          humidity: 42,
          temp_kf: 0,
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
          speed: 1.62,
          deg: 96,
          gust: 1.14,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-08 12:00:00",
      },
      {
        dt: 1667919600,
        main: {
          temp: 296.45,
          feels_like: 295.62,
          temp_min: 296.45,
          temp_max: 296.45,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 821,
          humidity: 30,
          temp_kf: 0,
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
          all: 5,
        },
        wind: {
          speed: 2.44,
          deg: 139,
          gust: 1.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-08 15:00:00",
      },
      {
        dt: 1667930400,
        main: {
          temp: 299.96,
          feels_like: 299.24,
          temp_min: 299.96,
          temp_max: 299.96,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 819,
          humidity: 24,
          temp_kf: 0,
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
          all: 7,
        },
        wind: {
          speed: 7.5,
          deg: 113,
          gust: 4.14,
        },
        visibility: 10000,
        pop: 0.09,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-08 18:00:00",
      },
      {
        dt: 1667941200,
        main: {
          temp: 295.87,
          feels_like: 295.03,
          temp_min: 295.87,
          temp_max: 295.87,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 818,
          humidity: 32,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 0.27,
          deg: 103,
          gust: 2.95,
        },
        visibility: 10000,
        pop: 0.38,
        rain: {
          "3h": 0.12,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-08 21:00:00",
      },
      {
        dt: 1667952000,
        main: {
          temp: 293.41,
          feels_like: 292.56,
          temp_min: 293.41,
          temp_max: 293.41,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 820,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 0.29,
          deg: 232,
          gust: 4.04,
        },
        visibility: 10000,
        pop: 0.43,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-09 00:00:00",
      },
      {
        dt: 1667962800,
        main: {
          temp: 292.1,
          feels_like: 291.23,
          temp_min: 292.1,
          temp_max: 292.1,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 820,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 1.66,
          deg: 168,
          gust: 1.9,
        },
        visibility: 10000,
        pop: 0.13,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-09 03:00:00",
      },
      {
        dt: 1667973600,
        main: {
          temp: 290.28,
          feels_like: 289.38,
          temp_min: 290.28,
          temp_max: 290.28,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 817,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 0.69,
          deg: 51,
          gust: 1.08,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-09 06:00:00",
      },
      {
        dt: 1667984400,
        main: {
          temp: 289.01,
          feels_like: 288.04,
          temp_min: 289.01,
          temp_max: 289.01,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 815,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 1.85,
          deg: 3,
          gust: 1.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-09 09:00:00",
      },
      {
        dt: 1667995200,
        main: {
          temp: 294.52,
          feels_like: 293.68,
          temp_min: 294.52,
          temp_max: 294.52,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 818,
          humidity: 37,
          temp_kf: 0,
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
          all: 2,
        },
        wind: {
          speed: 1.73,
          deg: 54,
          gust: 2.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-09 12:00:00",
      },
      {
        dt: 1668006000,
        main: {
          temp: 300.22,
          feels_like: 299.37,
          temp_min: 300.22,
          temp_max: 300.22,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 818,
          humidity: 23,
          temp_kf: 0,
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
          speed: 3.17,
          deg: 118,
          gust: 3.8,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-09 15:00:00",
      },
      {
        dt: 1668016800,
        main: {
          temp: 301.43,
          feels_like: 300.17,
          temp_min: 301.43,
          temp_max: 301.43,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 815,
          humidity: 23,
          temp_kf: 0,
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
          all: 29,
        },
        wind: {
          speed: 9.74,
          deg: 113,
          gust: 5.92,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-09 18:00:00",
      },
      {
        dt: 1668027600,
        main: {
          temp: 298.61,
          feels_like: 297.99,
          temp_min: 298.61,
          temp_max: 298.61,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 814,
          humidity: 30,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 56,
        },
        wind: {
          speed: 6.6,
          deg: 101,
          gust: 6.8,
        },
        visibility: 10000,
        pop: 0.42,
        rain: {
          "3h": 0.22,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-09 21:00:00",
      },
      {
        dt: 1668038400,
        main: {
          temp: 293.34,
          feels_like: 292.67,
          temp_min: 293.34,
          temp_max: 293.34,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 815,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 49,
        },
        wind: {
          speed: 1.98,
          deg: 68,
          gust: 2.63,
        },
        visibility: 10000,
        pop: 0.41,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-10 00:00:00",
      },
      {
        dt: 1668049200,
        main: {
          temp: 291.34,
          feels_like: 290.65,
          temp_min: 291.34,
          temp_max: 291.34,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 815,
          humidity: 55,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 0.38,
          deg: 199,
          gust: 1.52,
        },
        visibility: 10000,
        pop: 0.22,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-10 03:00:00",
      },
      {
        dt: 1668060000,
        main: {
          temp: 289.74,
          feels_like: 289.05,
          temp_min: 289.74,
          temp_max: 289.74,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 813,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 0.85,
          deg: 228,
          gust: 1.17,
        },
        visibility: 10000,
        pop: 0.38,
        rain: {
          "3h": 0.14,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-10 06:00:00",
      },
      {
        dt: 1668070800,
        main: {
          temp: 289.02,
          feels_like: 288.2,
          temp_min: 289.02,
          temp_max: 289.02,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 812,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 23,
        },
        wind: {
          speed: 0.95,
          deg: 340,
          gust: 1.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-10 09:00:00",
      },
      {
        dt: 1668081600,
        main: {
          temp: 295.42,
          feels_like: 294.49,
          temp_min: 295.42,
          temp_max: 295.42,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 816,
          humidity: 30,
          temp_kf: 0,
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
          all: 11,
        },
        wind: {
          speed: 1.19,
          deg: 151,
          gust: 2.25,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-10 12:00:00",
      },
      {
        dt: 1668092400,
        main: {
          temp: 301.26,
          feels_like: 299.84,
          temp_min: 301.26,
          temp_max: 301.26,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 817,
          humidity: 9,
          temp_kf: 0,
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
          speed: 1.38,
          deg: 178,
          gust: 5.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-10 15:00:00",
      },
      {
        dt: 1668103200,
        main: {
          temp: 304.16,
          feels_like: 302.2,
          temp_min: 304.16,
          temp_max: 304.16,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 815,
          humidity: 6,
          temp_kf: 0,
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
          speed: 4.79,
          deg: 138,
          gust: 6.97,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-10 18:00:00",
      },
      {
        dt: 1668114000,
        main: {
          temp: 299.17,
          feels_like: 299.17,
          temp_min: 299.17,
          temp_max: 299.17,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 813,
          humidity: 31,
          temp_kf: 0,
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
          all: 36,
        },
        wind: {
          speed: 7.02,
          deg: 122,
          gust: 5.95,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-10 21:00:00",
      },
      {
        dt: 1668124800,
        main: {
          temp: 291.36,
          feels_like: 290.83,
          temp_min: 291.36,
          temp_max: 291.36,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 816,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 41,
        },
        wind: {
          speed: 1.47,
          deg: 229,
          gust: 2,
        },
        visibility: 10000,
        pop: 0.57,
        rain: {
          "3h": 1.72,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-11 00:00:00",
      },
      {
        dt: 1668135600,
        main: {
          temp: 292.27,
          feels_like: 291.62,
          temp_min: 292.27,
          temp_max: 292.27,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 817,
          humidity: 53,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 60,
        },
        wind: {
          speed: 1.27,
          deg: 287,
          gust: 2.28,
        },
        visibility: 10000,
        pop: 0.85,
        rain: {
          "3h": 1.25,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-11 03:00:00",
      },
      {
        dt: 1668146400,
        main: {
          temp: 289.63,
          feels_like: 289,
          temp_min: 289.63,
          temp_max: 289.63,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 814,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 38,
        },
        wind: {
          speed: 0.75,
          deg: 206,
          gust: 0.81,
        },
        visibility: 10000,
        pop: 0.72,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-11 06:00:00",
      },
      {
        dt: 1668157200,
        main: {
          temp: 288.85,
          feels_like: 288.17,
          temp_min: 288.85,
          temp_max: 288.85,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 813,
          humidity: 65,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.28,
          deg: 25,
          gust: 1.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-11 09:00:00",
      },
      {
        dt: 1668168000,
        main: {
          temp: 293.7,
          feels_like: 293.01,
          temp_min: 293.7,
          temp_max: 293.7,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 816,
          humidity: 46,
          temp_kf: 0,
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
          speed: 2.13,
          deg: 100,
          gust: 1.81,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-11 12:00:00",
      },
      {
        dt: 1668178800,
        main: {
          temp: 300.53,
          feels_like: 299.45,
          temp_min: 300.53,
          temp_max: 300.53,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 816,
          humidity: 19,
          temp_kf: 0,
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
          speed: 3.77,
          deg: 144,
          gust: 6.76,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-11 15:00:00",
      },
      {
        dt: 1668189600,
        main: {
          temp: 303.83,
          feels_like: 301.87,
          temp_min: 303.83,
          temp_max: 303.83,
          pressure: 1000,
          sea_level: 1000,
          grnd_level: 814,
          humidity: 17,
          temp_kf: 0,
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
          speed: 9.96,
          deg: 111,
          gust: 8.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-11 18:00:00",
      },
      {
        dt: 1668200400,
        main: {
          temp: 300.09,
          feels_like: 299.57,
          temp_min: 300.09,
          temp_max: 300.09,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 813,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 30,
        },
        wind: {
          speed: 6.46,
          deg: 119,
          gust: 5.28,
        },
        visibility: 10000,
        pop: 0.34,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-11 21:00:00",
      },
      {
        dt: 1668211200,
        main: {
          temp: 293.83,
          feels_like: 293.49,
          temp_min: 293.83,
          temp_max: 293.83,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 814,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 41,
        },
        wind: {
          speed: 2.63,
          deg: 117,
          gust: 3.66,
        },
        visibility: 10000,
        pop: 0.4,
        rain: {
          "3h": 0.21,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-12 00:00:00",
      },
      {
        dt: 1668222000,
        main: {
          temp: 292.7,
          feels_like: 292.49,
          temp_min: 292.7,
          temp_max: 292.7,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 814,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 0.25,
          deg: 1,
          gust: 0.89,
        },
        visibility: 10000,
        pop: 0.31,
        rain: {
          "3h": 0.12,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-12 03:00:00",
      },
      {
        dt: 1668232800,
        main: {
          temp: 291.2,
          feels_like: 290.94,
          temp_min: 291.2,
          temp_max: 291.2,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 812,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 33,
        },
        wind: {
          speed: 0.83,
          deg: 259,
          gust: 0.82,
        },
        visibility: 10000,
        pop: 0.07,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-12 06:00:00",
      },
      {
        dt: 1668243600,
        main: {
          temp: 290.32,
          feels_like: 289.89,
          temp_min: 290.32,
          temp_max: 290.32,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 811,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.08,
          deg: 358,
          gust: 1.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-11-12 09:00:00",
      },
      {
        dt: 1668254400,
        main: {
          temp: 297.18,
          feels_like: 296.27,
          temp_min: 297.18,
          temp_max: 297.18,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 815,
          humidity: 24,
          temp_kf: 0,
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
          speed: 1.21,
          deg: 292,
          gust: 3.48,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-12 12:00:00",
      },
      {
        dt: 1668265200,
        main: {
          temp: 302.78,
          feels_like: 301.08,
          temp_min: 302.78,
          temp_max: 302.78,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 816,
          humidity: 6,
          temp_kf: 0,
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
          speed: 1.93,
          deg: 282,
          gust: 5.27,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-11-12 15:00:00",
      },
    ],
    city: {
      id: 3903320,
      name: "Tarija",
      coord: {
        lat: -21.5355,
        lon: -64.7296,
      },
      country: "BO",
      population: 159269,
      timezone: -14400,
      sunrise: 1667813540,
      sunset: 1667860373,
    },
  };
  test("should format raw weather correctly", () => {
    const actual = formatWeather(RESPONSE);
    const expected: Weather = {
      city: {
        id: "3903320",
        name: "Tarija",
      },
      forecast: [
        { date: "7/11/2022", min: 24, max: 26 },
        { date: "8/11/2022", min: 27, max: 27 },
        { date: "9/11/2022", min: 28, max: 28 },
        { date: "10/11/2022", min: 31, max: 31 },
        { date: "11/11/2022", min: 31, max: 31 },
      ],
    };
    expect(actual).toStrictEqual(expected);
  });
});
