import { useEffect } from "react";
import { useState } from "react";
import {
  getDataForecast,
  getLatAndLong,
} from "../services/openweathermap.service";

const initialState = {
  main: {
    feels_like: "",
    feepressures_like: "",
    humidity: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  },
  daily: [],
  hourly: [],
  sys: {
    country: "",
  },
  weather: [
    {
      description: "",
    },
  ],
};

export const useCity = () => {
  const [selectCity, setSelectCity] = useState(initialState);

  const handleSelectCity = async (city) => {
    const {
      coord: { lat, lon },
    } = city;
    try {
      setSelectCity(initialState);
      const result = await getDataForecast({ lat, lon });
      const { daily, hourly } = result;

      setSelectCity({
        ...city,
        daily: daily.slice(0, 5),
        hourly: hourly.slice(0, 5),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await Promise.all([getLatAndLong(), getDataForecast()]);

        setSelectCity({
          ...result[0][0],
          daily: result[1].daily.slice(0, 5),
          hourly: result[1].hourly.slice(0, 5),
        });
      } catch (error) {
      } finally {
      }
    };

    getData();
  }, []);

  return { selectCity, handleSelectCity };
};
