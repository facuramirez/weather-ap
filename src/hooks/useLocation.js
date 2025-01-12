import { useState, useEffect } from "react";
import { getLatAndLong } from "../services/openweathermap.service";

export const useLocation = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  useEffect(() => {
    // Este es el debounce, se activa después de 300 ms sin cambios
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    // Limpiar el timeout si el value cambia antes de 300 ms
    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    const getData = async () => {
      try {
        if (debouncedValue) {
          const result = await getLatAndLong({ city: value });
          setData(result);
        } else {
          setData([]);
        }
      } catch (error) {
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [debouncedValue]);

  return { value, setValue, handleChange, isLoading, data };
};
