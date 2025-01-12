export const obtenerFechaFormateada = () => {
  const fecha = new Date(); // Obtiene la fecha actual

  // Array con los nombres de los días de la semana
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Array con los nombres abreviados de los meses
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  // Obtén el día de la semana, el día del mes y el mes
  const diaSemana = diasSemana[fecha.getDay()]; // getDay() devuelve el índice del día de la semana (0 = Sunday)
  const diaMes = fecha.getDate(); // getDate() devuelve el día del mes
  const mes = meses[fecha.getMonth()]; // getMonth() devuelve el índice del mes (0 = Jan)

  // Devuelve la cadena formateada
  return `${diaSemana} ${diaMes}, ${mes}`;
};
