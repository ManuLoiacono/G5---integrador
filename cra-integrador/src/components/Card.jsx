

function Card({detalle}){
    return(
        <div className="card">
        <img src={detalle.img} alt="imagen de producto" />
        <h3>{detalle.nombre}</h3>
        <p>${detalle.precio}</p>

        </div>
    )
}

export default Card;