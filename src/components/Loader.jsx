export const Loader = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-4 items-center justify-center">
      <span className="text-lg lg:2xl">Cargando...</span>
      <l-ripples size="80" speed="2" color="white"></l-ripples>
    </div>
  );
};
