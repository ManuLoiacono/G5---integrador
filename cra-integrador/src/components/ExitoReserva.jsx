
function ExitoReserva({props}){
    return(
    <div className={"emergente-oculto"}>
        <section className="contenido-reserva">
            <h2>¡Hemos registrado tu reserva con éxito!</h2>
            <p>Producto: {props.nombreProd?props.nombreProd:"?"}</p>
            <p>Fecha: Del {props.fechaInicio} al {props.fechaFinal}</p>
            <p>En breves recibirás un email a la dirección "{props.mail}" con los detales de tu reserva.</p>
            <p>¡Muchas gracias!</p>
            <button onClick={()=>{window.location.replace(`${window.location.origin}`)}}>Volver</button>
        </section>
    </div>
    )
}

export default ExitoReserva