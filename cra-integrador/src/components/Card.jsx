import React from "react";
import { Link } from "react-router-dom";


function Card({detalle}){
    return(
        
        <Link to={`/producto/:${detalle.idProducto}`}>
        <div className="card">
            <div className="contenedor-imagen">
                <img src={detalle.img} alt="imagen de producto" />
            </div>
        <h3>{detalle.nombreProd}</h3>
        <p>${detalle.precioProd}</p>

        </div>
        </Link>
    )
}

export default Card;