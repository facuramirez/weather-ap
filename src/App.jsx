import { useEffect } from "react";
import { Header } from "./components/Header";
import { WeatherMain } from "./components/WeatherMain";
import { useCity } from "./hooks/useCity";
import { useLocation } from "./hooks/useLocation";

function App() {
  const { value, setValue, handleChange, isLoading, data } = useLocation();
  const { selectCity, handleSelectCity } = useCity();

  useEffect(() => {
    setValue("");
    const inputSearch = document.getElementById("input-search");
    inputSearch.value = "";
    inputSearch.blur();
  }, [selectCity]);

  return (
    <div className="flex flex-col gap-y-4 min-h-dvh">
      <Header
        value={value}
        handleChange={handleChange}
        isLoading={isLoading}
        data={data}
        handleSelectCity={handleSelectCity}
      />
      <WeatherMain selectCity={selectCity} />
    </div>
  );
}

export default App;
