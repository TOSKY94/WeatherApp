import { SingleWeatherDetailsProps, WeatherDetailsProps } from "@/utils/types";
import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

type Props = {};

export default function WeatherDetails(props: WeatherDetailsProps) {
  const {
    visibility = "25km",
    humidity = "50%",
    windspeed = "7km/h",
    airPressure = "1000hpa",
    sunrise = "6.00",
    sunset = "20.00",
  } = props;

  return (
    <>
      <SingleWeatherDetails
        icon={<LuEye />}
        information="Visibility"
        value={visibility}
      />
      <SingleWeatherDetails
        icon={<FiDroplet />}
        information="Humidity"
        value={humidity}
      />
      <SingleWeatherDetails
        icon={<MdAir />}
        information="Wind speed"
        value={windspeed}
      />
      <SingleWeatherDetails
        icon={<ImMeter />}
        information="Air pressure"
        value={airPressure}
      />
      <SingleWeatherDetails
        icon={<LuSunrise />}
        information="Sunrise"
        value={sunrise}
      />
      <SingleWeatherDetails
        icon={<LuSunset />}
        information="Sunset"
        value={sunset}
      />
    </>
  );
}

function SingleWeatherDetails(props: SingleWeatherDetailsProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}
