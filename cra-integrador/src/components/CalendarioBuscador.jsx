import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays, addDays } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; 


const CalendarioBuscador = ({ onDateRangeChange }) => {
  registerLocale('es', es);
  setDefaultLocale('es');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateRangeChange = (update) => {
    setDateRange(update);
    onDateRangeChange(update)
    console.log(update);
  };


  return (
    <div className='calendario-input'>
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateRangeChange}
      isClearable={false}
      placeholderText="Elija fechas para reserva"
      dateFormat="dd/MM/YY"
      locale="es"
      monthsShown={1}
      monthYearFormat="MMM yyyy"
    />
    </div>
  );
};

export default CalendarioBuscador;