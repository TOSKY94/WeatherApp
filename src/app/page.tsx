"use client";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { WeatherData } from "@/utils/types";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { useQuery } from "react-query";
import { dummyWeatherData } from "@/utils/dummyWeatherData";
import WeatherIcon from "@/components/WeatherIcon";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcons";
import { metersToKilometers } from "@/utils/metersToKilmeters";
import WeatherDetails from "@/components/WeatherDetails";

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>(
    "weatherData",
    async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=51.5156177&lon=-0.0919983&appid=${process.env.PUBLIC_WEATHER_KEY}&cnt=2`
        );
        return data;
      } catch (err) {
        console.error("API call failed:", err);
        // Return dummy data if the API call fails
        return dummyWeatherData;
      }
    },
    {
      // Use the fallback data as initial data
      initialData: dummyWeatherData,
    }
  );

  const firstData = data?.list[0];

  console.log("data", data?.city.name);

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar city={data?.city.name ?? "Unknown City"} />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* today*/}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="flex gap-1 text-2xl items-end">
              <p>
                {firstData?.dt_txt
                  ? format(parseISO(firstData.dt_txt), "EEEE")
                  : "Saturday"}
              </p>
              <p className="text-lg">
                (
                {firstData?.dt_txt
                  ? format(parseISO(firstData.dt_txt), "dd.MM.yyyy")
                  : "24/08/2024"}
                )
              </p>
            </h2>
            <Container className="gap-10 px-6 items-center">
              {/* temperature*/}
              <div className="flex flex-col px-4">
                <span className="text-5xl">
                  {convertKelvinToCelsius(firstData?.main.temp ?? 300.15)}°C
                </span>
                <p className="text-xs space-x-1 whitespace-nowrap">
                  <span>Feels like</span>
                  <span>
                    {convertKelvinToCelsius(
                      firstData?.main.feels_like ?? 297.15
                    )}
                    °C
                  </span>
                </p>
                <p className="text-xs space-x-2">
                  <span>
                    {convertKelvinToCelsius(firstData?.main.temp_min ?? 273)}
                    °↓
                  </span>
                  <span>
                    {convertKelvinToCelsius(firstData?.main.temp_max ?? 373)}
                    °↑
                  </span>
                </p>
              </div>
              {/* time and weather*/}
              <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
                {data?.list.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 items-center text-xs font-semibold"
                  >
                    <p className="whitespace-nowrap">
                      {format(parseISO(d.dt_txt), "h:mm a")}
                    </p>
                    <WeatherIcon
                      iconName={getDayOrNightIcon(d?.weather[0].icon, d.dt_txt)}
                    />
                    <p className="pb-4">
                      {convertKelvinToCelsius(d?.main.temp ?? 300.15)}°C
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </div>
          <div className="flex gap-4">
            <Container className="w-fit justify-center flex-col px-4 items-center">
              <p className="capitalize text-center">
                {firstData?.weather[0].description}
              </p>
              <p>
                {" "}
                <WeatherIcon
                  iconName={getDayOrNightIcon(
                    firstData?.weather[0].icon ?? "",
                    firstData?.dt_txt ?? ""
                  )}
                />
              </p>
            </Container>
            <Container className="bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto">
              <WeatherDetails
                visibility={metersToKilometers(firstData?.visibility ?? 1000)}
                humidity={firstData?.main.humidity?.toString() + "%"}
                windspeed={
                  firstData?.wind.speed
                    ? (firstData.wind.speed * 3.6).toFixed(1) + " km/h"
                    : "N/A"
                }
                airPressure={firstData?.main.pressure?.toString() + " hPa"}
                sunrise={
                  data?.city.sunrise
                    ? format(new Date(data?.city.sunrise * 1000), "HH:mm")
                    : "N/A"
                }
                sunset={
                  data?.city.sunset
                    ? format(new Date(data?.city.sunset * 1000), "HH:mm")
                    : "N/A"
                }
              />
            </Container>
          </div>
        </section>
        <section className="flex w-full flex-col gap-4">
          {/* 7 days forcast data */}
          <p className="text-2xl">Forcast (5 days)</p>
        </section>
      </main>
    </div>
  );
}
