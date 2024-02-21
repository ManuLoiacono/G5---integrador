import React from "react";
import { Link } from "react-router-dom";


function Card({detalle}){
    return(
        <Link to={`/productos/:${detalle.id}`}>
        <div className="card">
            <div className="contenedor-imagen">
                <img src={detalle.img} alt="imagen de producto" />
            </div>
        <h3>{detalle.nombre}</h3>
        <p>${detalle.precio}</p>

        </div>
        </Link>
    )
}

export default Card;