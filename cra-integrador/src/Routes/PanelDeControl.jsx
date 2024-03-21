import { Link } from "react-router-dom"
import MensajeResolucion from "../components/MensajeResolucion"
import { useLogin } from "../components/utils/LoginContext"


function PanelDeControl(){
    const user = useLogin()
 if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){

    return(
        <div id="panel-container">
        <section className="panel-de-control">
            <h2>Panel de control</h2>
            <Link to={'/listado-productos'}><button className="boton-panel">Lista de productos</button></Link>
            <Link to={'/registrar'}><button className="boton-panel">Agregar productos</button></Link>
            <Link to={'/listado-usuarios'}><button className="boton-panel">Lista de Usuarios</button></Link>
            <Link to={''}><button className="boton-panel">Agregar categorias</button></Link>
        </section>
        <MensajeResolucion/>
        </div>
    )
} else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>
}
export default PanelDeControl