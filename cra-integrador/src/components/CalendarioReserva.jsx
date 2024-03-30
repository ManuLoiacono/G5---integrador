import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays, addDays } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; 
import { toastError, toastSuccess } from '../components/utils/Notificaciones'

const CalendarioReserva = ({ onDateChange }) => {
  registerLocale('es', es);
  setDefaultLocale('es');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (update) => {
    if(update[0] < excludeIntervals[0].start && update[1]> excludeIntervals[0].end){
      toastError("El rango seleccionado tiene fechas reservadas, por favor seleccione otro");
      update = [null,null]
      setDateRange(update);
      onDateChange(update);
    }else{
      setDateRange(update);
      onDateChange(update);}
      
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
      placeholderText="Elija fechas para reserva"
      excludeDateIntervals={excludeIntervals}
      dateFormat="dd/MM/YY"
      locale="es"
      monthsShown={1}
      monthYearFormat="MMM yyyy"
      
    />
    </div>
  );
};

export default CalendarioReserva;