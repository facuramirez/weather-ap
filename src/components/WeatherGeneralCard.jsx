import { getHour } from "../helpers/dates";
import temperature from "../assets/temperature.svg";
import pressure from "../assets/pressure.svg";
import humidity from "../assets/humidity.svg";

export const WeatherHorizontalCard = ({ title, content }) => {
  const mappedImg = [
    "Sensación termica",
    "Temperatura",
    "Temperatura Máxima",
    "Temperatura Mínima",
  ].includes(title)
    ? temperature
    : title === "Presión"
    ? pressure
    : humidity;
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 p-6 bg-[var(--secondary-bg)] rounded-2xl">
      <span>{title}</span>
      <div className="flex flex-row gap-x-4 items-center justify-center">
        <figure className="size-[3rem]">
          <img src={mappedImg} alt={content} />
        </figure>
        <span>
          {content}{" "}
          {[
            "Sensación termica",
            "Temperatura",
            "Temperatura Máxima",
            "Temperatura Mínima",
          ].includes(title) && "C"}
        </span>
      </div>
    </div>
  );
};

export const WeatherVerticalCard = ({ dt, temp }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 p-6 bg-[var(--secondary-bg)] rounded-2xl ">
      <span className="text-lg lg:text-xl">{getHour(dt)}</span>
      <figure className="size-[4rem] lg:size-[5rem]">
        <img src={temperature} alt={dt} />
      </figure>
      <span className="text-2xl lg:text-3xl">{temp} C</span>
    </div>
  );
};
