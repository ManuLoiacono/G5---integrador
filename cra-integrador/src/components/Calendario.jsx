/*import React, { useState } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css'; // Importa los estilos predeterminados de react-calendar
import '../Styles/calenadarStyles.CSS'

function MyCalendar() {
  const [dates, setDates] = useState([new Date(), null]); // Array para almacenar las dos fechas

  const onChange = (date) => {
    // Si aún no se ha seleccionado la primera fecha, la establece como la fecha de entrada
    if (!dates[0]) {
      setDates([date, null]);
    }
    // Si ya se ha seleccionado la primera fecha pero no la segunda, establece la fecha de salida
    else if (!dates[1]) {
      // Verifica si la nueva fecha es anterior a la fecha de entrada
      if (date < dates[0]) {
        setDates([date, dates[0]]);
      } else {
        setDates([dates[0], date]);
      }
    }
    // Si ya se han seleccionado ambas fechas, reinicia la selección
    else {
      setDates([date, null]);
    }
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={dates}
        selectRange={true} // Habilita la selección de un rango de fechas
      />
    </div>
  );
}

export default MyCalendar;*/
