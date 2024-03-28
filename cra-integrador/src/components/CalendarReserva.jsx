import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const CalendarioReserva = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  // get the target element to toggle 
  const refOne = useRef(null)

  const reservas = [
  {
  nombreReserva: "uno",
  startDate : new Date(2024, 3, 1),
  endDate : new Date(2024, 3, 5)
  },
  {
    nombreReserva: "dos",  
    startDate : new Date(2024, 3, 10),
    endDate : new Date(2024, 3, 15)
    }]

  const datesArray = [];

  reservas.forEach(reserva => {
    let currentDate = new Date(reserva.startDate);
    while (currentDate <= reserva.endDate) {
      datesArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return (
      
       <div ref={refOne} className="calendarWrapReserva">
        {<DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="vertical"
            className="calendarElementReserva"
            fixedHeight="false"
            disabledDates={datesArray}
            
            />
        }
      </div>

   
  )
}

export default CalendarioReserva