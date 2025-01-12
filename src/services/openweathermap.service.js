import axios from "axios";

export const getLatAndLong = async ({ city } = { city: "Cordoba" }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/find?q=${city}&limit=5&appid=${
        import.meta.env.VITE_APIKEY
      }&lang=sp&units=metric`
    );

    return response.data.list;
  } catch (error) {
    return [];
  }
};

export const getData = async ({ lat = "-31.4173", lon = "-64.1833" }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/fweather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_APIKEY
      }&lang=sp&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataForecast = async (
  { lat, lon } = { lat: "-31.4135", lon: "-64.1811" }
) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${
        import.meta.env.VITE_APIKEY
      }&lang=sp&units=metric`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
