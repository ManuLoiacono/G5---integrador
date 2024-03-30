import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/app.css";
import lupa from "../img/lupa.png"
import Calendar from "../components/Calendar";
import NewCalendar from "../components/NewCalendar";

const Buscador = () => {
  const [parametro, setParametro] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDateRangeChange = (newRange) => {
    setSelectedDateRange(newRange);
  };
console.log("selectedDateRange");
console.log(selectedDateRange);
  return (
    <div className='buscador'>
      <h2>
        Buscá lo necesario para tu aventura
      </h2>
      <form onSubmit={handleSubmit} className="formulario">
          <input type="text" placeholder='Buscá!' value={parametro} onChange={(e)=>{setParametro(e.target.value)}}/>
          <NewCalendar/>
          <Link  to={`/busqueda/${parametro}/${selectedDateRange}`}><button>Lo encontraremos</button></Link>
        </form>
    </div>
  )
}

export default Buscador