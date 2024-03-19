import React from 'react'
import style from "../Styles/app.css";
import lupa from "../img/lupa.png"
import Calendar from "../components/Calendar";

const Buscador = () => {
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
          <input type="text" placeholder='Buscá!'/>
          <Calendar/>
          <button>Lo encontraremos</button>
        </form>
    </div>
  )
}

export default Buscador