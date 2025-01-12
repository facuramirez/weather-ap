import { useEffect } from "react";
import { Header } from "./components/Header";
import { WeatherMain } from "./components/WeatherMain";
import { useCity } from "./hooks/useCity";
import { useLocation } from "./hooks/useLocation";
import { Footer } from "./components/Footer";

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
    <div className="flex flex-col gap-y-4 min-h-dvh justify-between">
      <Header
        value={value}
        handleChange={handleChange}
        isLoading={isLoading}
        data={data}
        handleSelectCity={handleSelectCity}
      />
      <WeatherMain selectCity={selectCity} />
      <Footer />
    </div>
  );
}

export default App;
