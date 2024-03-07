import React from "react"
import image from "../img/TERRA_RENT4.png"
import { Link } from "react-router-dom"

function Header({estaLogueado, esAdmin, cierreDeSesion}){
    return(
        <>
        <header>
            <Link to={'/'}><img className="logo" src={image} alt="Terrarent logo" /></Link>
                <ul id="button-container">
                 {esAdmin && <Link to="/panel-de-control"><button className="panel-button">Admin Dashboard</button></Link>}
                 {estaLogueado ? (
                   <button onClick={cierreDeSesion}>Cerrar Sesión</button>
                ) : (
                    <>
                    <Link to={'registro-usuario'}><button>Crear Cuenta</button></Link>
                    <span>|</span>
                    <Link to={'inicio-sesion'}><button>Iniciar Sesión</button></Link>
                    </>
                 )}
                </ul>
        </header>
        </>
    )
}

export default Header