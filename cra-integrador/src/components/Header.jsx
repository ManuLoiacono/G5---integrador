import React from "react"
import image from "../img/TERRA_RENT4.png"
import { Link } from "react-router-dom"

function Header(){
    return(
        <>
        <header>
            <Link to={'/'}><img className="logo" src={image} alt="Terrarent logo" /></Link>
            <div id="button-container">
                <Link to={'registrar-usuario'}><button>Crear Cuenta</button></Link>
                <span>|</span>
                <Link to={'inicio-sesion'}><button>Iniciar Sesión</button></Link>
            </div>
        </header>
        </>
    )
}

export default Header