import React from 'react'
import style from "../Styles/app.css";
import lupa from "../img/lupa.png"

const Buscador = () => {
  const handleSubmit = (e) => {
    e.preventDefault()}
  return (
    <div className='buscador'>
      <h2>
        Buscá lo necesario para tu aventura
      </h2>
      <form onSubmit={handleSubmit}>
          <label>
            <img src={lupa} alt="" />
          </label>
          <input type="text" placeholder='Buscá!'/>
          <button>Lo encontraremos</button>
        </form>
    </div>
  )
}

export default Buscador