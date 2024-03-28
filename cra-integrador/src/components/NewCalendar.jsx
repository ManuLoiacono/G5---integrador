import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa los estilos CSS
import { subDays, addDays } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; // Importa la localización en español


const NewCalendar = () => {
  registerLocale('es', es);
  setDefaultLocale('es');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (update) => {
    setDateRange(update);
  };
  const excludeIntervals = [
    { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
    { start: new Date(2024, 3, 1), end: new Date(2024, 3, 10) }, 
  ];
console.log("dateRange");
console.log(dateRange);
  return (
    <div className='calendario-input'>
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateChange}
      isClearable={false}
      placeholderText="Elija fechas para reerva"
      excludeDateIntervals={excludeIntervals}
      dateFormat="dd/MM/YY"
      locale="es-ES"
      monthsShown={2}
      monthYearFormat="MMM yyyy"
    />
    </div>
  );
};

export default NewCalendar;