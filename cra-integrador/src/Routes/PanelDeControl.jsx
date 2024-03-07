import { Link } from "react-router-dom"
import MensajeResolucion from "../components/MensajeResolucion"

function PanelDeControl(){
    return(
        <div id="panel-container">
        <section className="panel-de-control">
            <h2>Panel de control</h2>
            <Link to={'/listado-productos'}><button className="boton-panel">Lista de productos</button></Link>
            <Link to={'/registrar'}><button className="boton-panel">Agregar productos</button></Link>
            <Link to={''}><button className="boton-panel">Asignar administrador</button></Link>
            <Link to={''}><button className="boton-panel">Agregar categorias</button></Link>
        </section>
        <MensajeResolucion/>
        </div>
    )
}
export default PanelDeControl