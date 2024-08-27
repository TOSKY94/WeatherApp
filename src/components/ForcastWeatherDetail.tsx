import React from "react";
import Container from "./Container";
import WeatherIcon from "./WeatherIcon";
import { ForcastWeatherDetailsProps } from "@/utils/types";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";
import WeatherDetails from "./WeatherDetails";

export default function ForcastWeatherDetail(
  props: ForcastWeatherDetailsProps
) {
  const {
    weatherIcon = "02d",
    date = "26.08",
    day = "Monday",
    feels_like = 293,
    temp = 300,
    temp_min = 0,
    temp_max = 0,
    description = "Snow",
  } = props;
  return (
    <Container className="gap-4">
      <section className="flex gap-4 items-center px-4">
        <div className="flex flex-col gap-1 items-center">
          <WeatherIcon iconName={weatherIcon} />
          <p>{date}</p>
          <p className="text-sm">{day}</p>
        </div>
        <div className="flex flex-col px-4">
          <span className="text-5xl">
            {convertKelvinToCelsius(temp ?? 0)}°C
          </span>
          <p className="text-xs space-x-1 whitespace-nowrap">
            <span>Feels like</span>
            <span>{convertKelvinToCelsius(feels_like ?? 0)}°C</span>
          </p>
          <p className="text-xs space-x-2">
            <span>
              {convertKelvinToCelsius(temp_min ?? 273)}
              °↓
            </span>
            <span>
              {convertKelvinToCelsius(temp_max ?? 373)}
              °↑
            </span>
          </p>
          <p className="capitalize">{description}</p>
        </div>
      </section>
      <section className="overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}
