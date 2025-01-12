import { useEffect } from "react";
import { Header } from "./components/Header";
import { WeatherMain } from "./components/WeatherMain";
import { useCity } from "./hooks/useCity";
import { useLocation } from "./hooks/useLocation";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";
import { ripples } from "ldrs";

ripples.register();

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
    <div className="flex flex-col gap-y-2 lg:gap-y-4 min-h-dvh lg:justify-between">
      <Header
        value={value}
        handleChange={handleChange}
        isLoading={isLoading}
        data={data}
        handleSelectCity={handleSelectCity}
      />
      {!selectCity.main.temp ? (
        <Loader />
      ) : (
        <>
          <WeatherMain selectCity={selectCity} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
