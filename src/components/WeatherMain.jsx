import { WeatherForecastCard } from "./WeatherForecastCard";
import {
  WeatherHorizontalCard,
  WeatherVerticalCard,
} from "./WeatherGeneralCard";
import { WeatherNowCard } from "./WeatherNowCard";
import calendar from "../assets/calendar.svg";
import "../scss/WeatherMain.scss";

export const WeatherMain = ({ selectCity }) => {
  const {
    name,
    daily,
    hourly,
    main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    sys: { country },
    weather,
  } = selectCity;

  return (
    <main className="main w-[100%] md:w-[min(40rem,100%)] xl:w-[min(120rem,100%)] mx-auto mt-2">
      <div className="main-container flex flex-col xl:flex-row p-8 gap-8">
        <section className="first flex flex-col gap-8 [&>div]:grow xl:w-[min(29rem,100%)]">
          <WeatherNowCard
            temp={temp}
            weather={weather}
            name={name}
            country={country}
          />
          <WeatherForecastCard daily={daily} />
        </section>
        <section className="second flex flex-col gap-8 basis-full">
          <span className="block bg-[#F2D168] text-black py-2 text-base lg:text-lg text-center font-bold">
            Pronóstico general del día
          </span>
          <div className="secondUp grow">
            <WeatherHorizontalCard
              key={0}
              title={"Sensación termica"}
              img={calendar}
              content={feels_like}
            />
            <WeatherHorizontalCard
              key={1}
              title={"Presión"}
              img={calendar}
              content={pressure}
            />
            <WeatherHorizontalCard
              key={2}
              title={"Humedad"}
              img={calendar}
              content={humidity}
            />
            <WeatherHorizontalCard
              key={3}
              title={"Temperatura"}
              img={calendar}
              content={temp}
            />
            <WeatherHorizontalCard
              key={4}
              title={"Temperatura Máxima"}
              img={calendar}
              content={temp_max}
            />
            <WeatherHorizontalCard
              key={5}
              title={"Temperatura Mínima"}
              img={calendar}
              content={temp_min}
            />
          </div>
          <div className="grow">
            <span className="block bg-[#F2D168] text-black py-2 text-base lg:text-lg text-center font-bold">
              Pronóstico del día por hora
            </span>
          </div>
          <div className="secondDown grow">
            {hourly.map(({ dt, temp }) => (
              <WeatherVerticalCard key={dt} dt={dt} temp={temp} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
