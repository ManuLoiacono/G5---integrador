import { useState, useEffect } from "react"
import image from "../img/TERRA_RENT4.png"
import imageAdmin from "../img/dashboard+.png"
import imageLogIn from "../img/logIn.png"
import imageNewUser from "../img/newUser.png"
import imageLogout from "../img/logout.png"
import { Link } from "react-router-dom"
import { useLogin } from "./utils/LoginContext"
import Navbar from "./Navbar"

function Header(){
    const [iniciales,setIniciales] = useState(null)
    const [estadoUser, setEstadoUser] = useState(null)

    const user = useLogin()
    

    useEffect(()=>{
    if(user.user!==null){
        let inicial = user.user.nombreUsuario[0].toUpperCase() +" "+user.user.apellidoUsuario[0].toUpperCase()
        setEstadoUser(user.user.userRol)
        setIniciales(inicial)
    }},[user.user]) 

    return(
        <header>
            <Link to={'/'}><img className="logo" src={image} alt="Terrarent logo" /></Link>
                <Navbar/>
                <ul id="button-container">
                {(estadoUser==="ADMIN"||estadoUser==="SUPERADMIN") && <Link to="/panel-de-control"><img className="imageAdmin" src={imageAdmin} alt="Terrarent logo" /></Link>}
                 {user.user!==null ? (
                    <div id="login-data">
                    <div className="user-saludo">
                    <span>BIENVENIDO</span>
                    <p className="bienvenida header-item">{user.user.nombreUsuario.charAt(0).toUpperCase() + user.user.nombreUsuario.slice(1)}</p>
                    </div>
                    <section className="perfil">
                        <div className="iniciales">{iniciales}</div>
                        <Link onClick={user.logout}><img className="imageLogout" src={imageLogout} alt="Cerrar Sesión" /></Link>
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
        
    )
}

export default Header