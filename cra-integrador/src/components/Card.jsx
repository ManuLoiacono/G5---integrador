
import { Link } from "react-router-dom";
import noImage from '../img/no-image.jpg'


function Card({detalle}){
    return(
        
        <Link to={`/productos/:${detalle.idProducto}`}>
        <div className="card">
            <div className="contenedor-imagen">
                <img src={detalle.imagenes[0].urlimg ? detalle.imagenes[0].urlimg : noImage} alt="imagen de producto" />
            </div>
        <h3>{detalle.nombreProd}</h3>
        <p>${detalle.precioProd}</p>

        </div>
        </Link>
    )
}

export default Card;