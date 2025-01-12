export const obtenerFechaFormateada = () => {
  const fecha = new Date(); // Obtiene la fecha actual

  // Array con los nombres de los días de la semana
  const diasSemana = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Array con los nombres abreviados de los meses
  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Obtén el día de la semana, el día del mes y el mes
  const diaSemana = diasSemana[fecha.getDay()]; // getDay() devuelve el índice del día de la semana (0 = Sunday)
  const diaMes = fecha.getDate(); // getDate() devuelve el día del mes
  const mes = meses[fecha.getMonth()]; // getMonth() devuelve el índice del mes (0 = Jan)

  // Devuelve la cadena formateada
  return `${diaSemana} ${diaMes}, ${mes}`;
};
