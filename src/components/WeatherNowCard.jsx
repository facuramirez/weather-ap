/* eslint-disable react/prop-types */
import temperature from "../assets/temperature.svg";
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";
import { obtenerFechaFormateada } from "../helpers/getDate";

export const WeatherNowCard = ({ temp, weather, name, country }) => {
  return (
    <div className="flex flex-col gap-y-4 bg-[var(--secondary-bg)] p-6 py-8 rounded-2xl ">
      <h3 className="text-lg lg:text-xl">Ahora</h3>
      <div className="flex flex-col gap-4 border-b border-[grey] pb-4">
        <div className="flex flex-row items-center gap-6">
          <span className="text-4xl text-5xl lg:text-6xl">{temp}C</span>
          <figure className="size-[3rem] lg:size-[4rem]">
            <img src={temperature} alt="WeatherIcon" className="size-[100%]" />
          </figure>
        </div>
        <span className="self-start">{weather[0].description}</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-2 items-center">
          <figure className="w-[1.3rem]">
            <img src={calendar} alt="calendar" />
          </figure>
          <span className="text-sm lg:text-base text-[grey]">
            {obtenerFechaFormateada()}
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <figure className="w-[1.3rem]">
            <img src={location} alt="location" />
          </figure>
          <span className="text-sm lg:text-base text-[grey]">
            {name}, {country}
          </span>
        </div>
      </div>
    </div>
  );
};
