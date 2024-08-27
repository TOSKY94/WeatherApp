"use client";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import { WeatherData } from "@/utils/types";
import axios from "axios";
import { format, fromUnixTime, parseISO } from "date-fns";
import { useQuery } from "react-query";
import { dummyWeatherData } from "@/utils/dummyWeatherData";
import WeatherIcon from "@/components/WeatherIcon";
import { getDayOrNightIcon } from "@/utils/getDayOrNightIcons";
import { metersToKilometers } from "@/utils/metersToKilmeters";
import WeatherDetails from "@/components/WeatherDetails";
import { meterPerHourToKilometerPerHour } from "@/utils/meterPerHourToKilometerPerHour";
import ForcastWeatherDetail from "@/components/ForcastWeatherDetail";
import { formatDate } from "@/utils/formatDate";
import { formatDay } from "@/utils/formatDay";
import { useAtom } from "jotai";
import { loadingCityAtom, placeAtom } from "./atom";
import { useEffect } from "react";
import WeatherSkeleton from "@/components/WeatherSkeleton";

export default function Home() {
  const { isLoading, error, data, refetch } = useQuery<WeatherData>(
    "weatherData",
    async () => {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
        );
        return data;
      } catch (err) {
        console.error("API call failed:", err);
        // Return dummy data if the API call fails
        //return dummyWeatherData;
      }
    }
  );

  const [place, setPlace] = useAtom(placeAtom);
  const [loadingCiity, setLoadingCity] = useAtom(loadingCityAtom);

  useEffect(() => {
    refetch();
  }, [place]);

  const firstData = data?.list[0];
  //setPlace(data?.city.name ?? "Unknown location");

  const uniqueDates = [
    ...new Set(
      data?.list.map((e) => new Date(e.dt * 1000).toISOString().split("T")[0])
    ),
  ];

  const firstDataForEachDate = uniqueDates.map((date) => {
    return data?.list.find((e) => {
      const entryDate = new Date(e.dt * 1000).toISOString().split("T")[0];
      const entryTime = new Date(e.dt * 1000).getHours();
      return entryDate === date && entryTime >= 6;
    });
  });

  if (isLoading)
    return (
      <div className="flex items-center min-h-screen justify-center">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar location={place} />
      <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
        {/* today*/}
        {loadingCiity ? (
          <WeatherSkeleton />
        ) : (
          <>
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
                        {convertKelvinToCelsius(
                          firstData?.main.temp_min ?? 273
                        )}
                        °↓
                      </span>
                      <span>
                        {convertKelvinToCelsius(
                          firstData?.main.temp_max ?? 373
                        )}
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
                          iconName={getDayOrNightIcon(
                            d?.weather[0].icon,
                            d.dt_txt
                          )}
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
                  <div>
                    <WeatherIcon
                      iconName={getDayOrNightIcon(
                        firstData?.weather[0].icon ?? "",
                        firstData?.dt_txt ?? ""
                      )}
                    />
                  </div>
                </Container>
                <Container className="bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto">
                  <WeatherDetails
                    visibility={metersToKilometers(
                      firstData?.visibility ?? 1000
                    )}
                    humidity={firstData?.main.humidity?.toString() + "%"}
                    windspeed={meterPerHourToKilometerPerHour(
                      firstData?.wind.speed ?? 0
                    )}
                    airPressure={firstData?.main.pressure?.toString() + " hPa"}
                    sunrise={format(
                      fromUnixTime(data?.city.sunrise ?? 1702949452),
                      "H:mm"
                    )}
                    sunset={format(
                      fromUnixTime(data?.city.sunset ?? 1702949452),
                      "H:mm"
                    )}
                  />
                </Container>
              </div>
            </section>
            <section className="flex w-full flex-col gap-4">
              {/* 7 days forcast data */}
              <p className="text-2xl">
                Forcast ({firstDataForEachDate.length - 1} days)
              </p>
              {firstDataForEachDate.slice(1).map((d, i) => (
                <ForcastWeatherDetail
                  key={i}
                  description={d?.weather[0].description ?? ""}
                  weatherIcon={d?.weather[0].icon ?? "01d"}
                  date={formatDate(d?.dt_txt ?? "")}
                  day={formatDay(d?.dt_txt ?? "")}
                  feels_like={d?.main.feels_like ?? 0}
                  temp={d?.main.temp ?? 0}
                  temp_max={d?.main.temp_max ?? 0}
                  temp_min={d?.main.temp_min ?? 0}
                  airPressure={`${d?.main.pressure}hPa`}
                  humidity={`${d?.main.humidity}%`}
                  sunrise={format(
                    fromUnixTime(data?.city.sunrise ?? 1702949452),
                    "H:mm"
                  )}
                  sunset={format(
                    fromUnixTime(data?.city.sunset ?? 1702949452),
                    "H:mm"
                  )}
                  visibility={metersToKilometers(d?.visibility ?? 1000)}
                  windspeed={meterPerHourToKilometerPerHour(d?.wind.speed ?? 0)}
                />
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
