import { useState, useEffect } from "react"
import image from "../img/TERRA_RENT4.png"
import imageAdmin from "../img/dashboard+.png"
import imageLogIn from "../img/logIn.png"
import imageNewUser from "../img/newUser.png"
import imageLogout from "../img/logout.png"
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
                 {esAdmin && <Link to="/panel-de-control"><img className="imageAdmin" src={imageAdmin} alt="Terrarent logo" /></Link>}
                 {estaLogueado ? (
                  <div id="login-data">
                    <div className="user-saludo">
                        <span>BIENVENIDO</span>
                        <p className="bienvenida header-item"> {userMuestra.nombre}</p>
                    </div>
                        <section className="perfil">
                            <div className="iniciales">{iniciales}</div>
                            <Link onClick={cierreDeSesion}><img className="imageLogout" src={imageLogout} alt="Cerrar Sesión" /></Link>
                        </section>
                    </div>
                ) : (
                    <>
                    <Link to={'registro-usuario'}><img className="imageNewUser" src={imageNewUser} alt="Nuevo Usuario" /></Link>
                    <Link to={'inicio-sesion'}><img className="imageLogIn" src={imageLogIn} alt="Iniciar Sesión" /></Link>
                    </>
                 )}
                </ul>
        </header>
        </>
    )
}

export default Header