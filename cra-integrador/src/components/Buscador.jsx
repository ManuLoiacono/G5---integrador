import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/app.css";
import lupa from "../img/lupa.png"
import CalendarioBuscador from "../components/CalendarioBuscador";


 


const Buscador = ({ parametroProp, onDateRangeChange, selectedDateRangeProp }) => {
  const [parametro, setParametro] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar parámetros en el localStorage
    localStorage.setItem('parametro', parametro);
    localStorage.setItem('selectedDateRange', selectedDateRange);
  };

  const handleDateRangeChange = (newRange) => {
    setSelectedDateRange(newRange);
    
  };
  useEffect(() => {
    console.log("selectedDateRange:", selectedDateRange);
  }, [selectedDateRange]);

  return (
    <div className= "buscador">
      <h2>
        Buscá lo necesario para tu aventura
      </h2>
      <form onSubmit={handleSubmit} className="formulario">
          <input type="text" placeholder='Buscá!' value={parametro} onChange={(e)=>{setParametro(e.target.value)}} />
          <CalendarioBuscador onDateRangeChange={handleDateRangeChange}/>
          <Link  to={`/busqueda/${parametro}/${selectedDateRange}`}>
            <button>Lo encontraremos</button>
          </Link>
        </form>
      
        
    </div>
  )
}

export default Buscador