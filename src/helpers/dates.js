export const getHour = (dateUNIX) => {
  const fecha = new Date(dateUNIX * 1000); // Convertir el timestamp a milisegundos
  const horas = fecha.getHours(); // Obtener la hora (0-23)
  const minutos = fecha.getMinutes(); // Obtener los minutos (0-59)

  // Formateamos la hora y minutos para mostrar como una hora completa
  return `${horas}:${minutos < 10 ? "0" + minutos : minutos}`;
};

export const getDay = (dateUNIX) => {
  const fecha = new Date(dateUNIX * 1000); // Convertir el timestamp a milisegundos

  // Array con los nombres de los días de la semana en español
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Array con los nombres de los meses en español (abreviados)
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

  const diaSemana = diasSemana[fecha.getDay()]; // Obtener el día de la semana (0-6)
  const dia = fecha.getDate(); // Obtener el día del mes (1-31)
  const mes = meses[fecha.getMonth()]; // Obtener el mes (0-11)

  return `${diaSemana} ${dia}, ${mes}`;
};
