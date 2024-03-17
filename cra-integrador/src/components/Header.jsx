import { useState, useEffect } from "react"
import image from "../img/TERRA_RENT4.png"
import { Link } from "react-router-dom"
import { useLogin } from "./utils/LoginContext"

function Header({estaLogueado, esAdmin, cierreDeSesion}){
    const [iniciales,setIniciales] = useState(null)
    const user = useLogin()

    let userMuestra={
        nombre:"Juan",
        apellido:"Perez"
    }
    useEffect(()=>{
    if(userMuestra!==null){
        let inicial = userMuestra.nombre[0] +" "+userMuestra.apellido[0]
        setIniciales(inicial)
    }},[userMuestra]) 

    return(
        <>
        <header>
            <Link to={'/'}><img className="logo" src={image} alt="Terrarent logo" /></Link>
                <ul id="button-container">
                 {esAdmin && <Link to="/panel-de-control"><button className="header-item">Admin Dashboard</button></Link>}
                 {estaLogueado ? (
                  <div id="login-data"><p className="bienvenida header-item">Bienvenido {userMuestra.nombre}</p>  <section className="perfil"><div className="iniciales">{iniciales}</div><button onClick={cierreDeSesion}>Cerrar Sesión</button></section></div>
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