import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays, addDays } from 'date-fns';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es'; 
import { toastError, toastSuccess } from '../components/utils/Notificaciones'

const CalendarioReserva = ({ onDateChange }) => {
  const params = useParams();
  const fechasReservadas = [];
  
  const fetchDataReserva = async () => {
    try {
      const url = `https://api-terrarent.ddns.net:3001/Reserva/producto/${params.id}`;
      const settings = {
        method: 'GET',
        mode: 'cors'
      };
      const response = await fetch(url, settings);
      const dataReserva = await response.json();
      dataReserva.forEach(reserva => {
        const fechaIniRes = new Date(reserva.fechaInicio);
        const fechaFinRes = new Date(reserva.fechaFin);

        const añoIni = fechaIniRes.getFullYear();
      const mesIni = fechaIniRes.getMonth(); 
      const diaIni = fechaIniRes.getDate();
      const añoFin = fechaFinRes.getFullYear();
      const mesFin = fechaFinRes.getMonth(); 
      const diaFin = fechaFinRes.getDate();
      
      const fechaInicioFormateada = new Date(añoIni, mesIni, diaIni);
      const fechaFinFormateada = new Date(añoFin, mesFin, diaFin);
      fechasReservadas.push({ start: fechaInicioFormateada, end: fechaFinFormateada })
    })
    
  } catch (error) {
    console.error('Error al obtener reserva del producto:', error);
  }
};

console.log("fechasReservadas");
console.log(fechasReservadas);

useEffect(() => {
    fetchDataReserva();
      }, [params.id]);
      
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

  return (
    <div className='calendario-input'>
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={handleDateChange}
      isClearable={false}
      placeholderText="Elija fechas para reserva"
      excludeDateIntervals={fechasReservadas}
      dateFormat="dd/MM/YY"
      locale="es"
      monthsShown={1}
      monthYearFormat="MMM yyyy"
      
    />
    </div>
  );
};

export default CalendarioReserva;