import temperature from "../assets/temperature.svg";
import { getDay, getHour } from "../helpers/dates";

export const WeatherForecastCard = ({ daily }) => {
  return (
    <>
      <span className="block bg-[#F2D168] text-black py-2 text-base lg:text-lg text-center font-bold">
        Pronóstico 5 días
      </span>

      <div className="flex flex-col gap-y-4 bg-[var(--secondary-bg)] rounded-4 p-6 py-8 rounded-2xl ">
        <div className="flex flex-col gap-4">
          {daily.map(({ dt, temp }) => (
            <ForecastItem key={dt} dt={dt} temp={temp} />
          ))}
        </div>
      </div>
    </>
  );
};

const ForecastItem = ({ dt, temp }) => {
  return (
    <div className="flex flex-row gap-x-6 items-center ">
      <div className="flex flex-row gap-x-2 items-center">
        <figure className="size-[1rem]">
          <img src={temperature} />
        </figure>
        <span>{temp.min.toFixed(2)} C</span>-
        <span>{temp.max.toFixed(2)} C</span>
      </div>
      <span>{getDay(dt)}</span>
    </div>
  );
};
