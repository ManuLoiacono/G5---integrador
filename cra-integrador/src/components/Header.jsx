
import image from "../img/TERRA RENT3.png"
import { Link } from "react-router-dom"
function Header(){
    return(
        <>
        <header><Link to={'/'}><img className="logo" src={image} /></Link>
         <div id="button-container"><button>Crear Cuenta</button><button>Iniciar Sesión</button></div></header>
        </>
    )
}

export default Header