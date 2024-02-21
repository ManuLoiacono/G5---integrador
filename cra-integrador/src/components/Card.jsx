import React from "react";


function Card({detalle}){
    return(
        <div className="card">
            <div className="contenedor-imagen">
                <img src={detalle.img} alt="imagen de producto" />
            </div>
        <h3>{detalle.nombre}</h3>
        <p>${detalle.precio}</p>

        </div>
    )
}

export default Card;