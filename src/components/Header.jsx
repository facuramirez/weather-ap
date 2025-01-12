import weather from "../assets/weather.svg";
import locationBlack from "../assets/locationBlack.svg";

export const Header = ({
  value,
  handleChange,
  isLoading,
  data,
  handleSelectCity,
}) => {
  return (
    <header className="sticky top-0 backdrop-blur-xl h-auto lg:h-[5rem] flex flex-col lg:flex-row justify-between items-center py-4 lg:py-0 px-8 [&>div]:basis-1/3">
      <div className="first flex flex-row gap-4 items-center basis-1/4">
        <figure>
          <img src={weather} alt="Weather" className="size-[4rem]" />
        </figure>
        <span className="text-xl lg:text-2xl">Weather App</span>
      </div>
      <div className="second basis-1/2">
        <div className="relative flex flex-col items-center justify-center w-fit mx-auto">
          <div className="overflow-hidden flex focus-within:rounded-none w-full">
            <input
              id="input-search"
              type="text"
              className="input-search pl-4 py-2 outline-none bg-[var(--secondary-bg)] transition-all w-[100%] w-[90%] lg:w-[22rem]"
              placeholder="Buscar ciudad..."
              onChange={handleChange}
              vavlue={value}
            />
            <button className="flex items-center justify-center px-4 bg-[var(--secondary-bg)]">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
          {value && (
            <div className="absolute flex flex-col gap-y-2 top-full left-0 px-4 py-2 w-full border bg-white [&>*]:text-black">
              {isLoading ? (
                <span>Buscando...</span>
              ) : data.length > 0 ? (
                data.map((city, index) => (
                  <div
                    onClick={() => handleSelectCity(city)}
                    key={index}
                    className="flex flex-row gap-x-4 items-center p-2 border-b border-grey-500 cursor-pointer hover:font-bold transition-all"
                  >
                    <figure className="size-[1rem]">
                      <img src={locationBlack} alt={index} />
                    </figure>
                    <span>{city.name}</span>
                    <span>{city.sys.country}</span>
                  </div>
                ))
              ) : (
                <div>
                  No se encontraro resultados. Por favor, verifica que el lugar
                  este completo o que no contenga errores ortograficos.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block"></div>
    </header>
  );
};
