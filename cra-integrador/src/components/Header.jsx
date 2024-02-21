import React from "react"
import image from "../img/TERRA_RENT4.png"
import { Link } from "react-router-dom"

function Header(){
    return(
        <>
        <header>
            <Link to={'/'}><img className="logo" src={image} /></Link>
            <div id="button-container">
                <button>Crear Cuenta</button>
                <span>|</span>
                <button>Iniciar Sesión</button>
            </div>
        </header>
        </>
    )
}

export default Header