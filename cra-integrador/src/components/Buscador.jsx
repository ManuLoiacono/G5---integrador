import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/app.css";
import lupa from "../img/lupa.png"
import Calendar from "../components/Calendar";

const Buscador = () => {
  const [parametro,setParametro] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()}
  return (
    <div className='buscador'>
      <h2>
        Buscá lo necesario para tu aventura
      </h2>
      <form onSubmit={handleSubmit} className="formulario">
          <label>
            <img src={lupa} alt="" />
          </label>
          <input type="text" placeholder='Buscá!' value={parametro} onChange={(e)=>{setParametro(e.target.value)}}/>
          <Calendar/>
          <Link  to={`/busqueda/${parametro}`}><button>Lo encontraremos</button></Link>
        </form>
    </div>
  )
}

export default Buscador