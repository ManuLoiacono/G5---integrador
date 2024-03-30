import React, {useState, useEffect} from "react";
import image from "../img/TERRA_RENT4.png"
import imageAdmin from "../img/dashboard+.png"
import imageLogIn from "../img/logIn.png"
import imageNewUser from "../img/newUser.png"
import imageLogout from "../img/logout.png"
import { Link } from "react-router-dom"
import { useLogin } from "./utils/LoginContext"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const [iniciales,setIniciales] = useState(null)
    const [estadoUser, setEstadoUser] = useState(null)

    const user = useLogin()
    

    useEffect(()=>{
    if(user.user!==null){
        let inicial = user.user.nombreUsuario[0].toUpperCase() +" "+user.user.apellidoUsuario[0].toUpperCase()
        setEstadoUser(user.user.userRol)
        setIniciales(inicial)
    }},[user.user]) 
    return (
        
        <div className="navbar" onClick={toggleMenu}>
            <div className={`nav_items ${isOpen ? "open" : ""}`}>
            <ul id="button-container-navbar">
                {user.user !== null ? (
                        <div id="login-data">
                            <section className="perfil">
                            <div className="user-saludo">
                                <span>BIENVENIDO</span>
                                <p className="bienvenida header-item">{user.user.nombreUsuario.charAt(0).toUpperCase() + user.user.nombreUsuario.slice(1)}</p>
                            </div>
                                <div className="iniciales">{iniciales}</div>
                            </section>
                                <Link onClick={user.logout}><img className="imageLogout" src={imageLogout} alt="Cerrar Sesión" /><p>Cerrar Sesión</p></Link>
                                {(estadoUser === "ADMIN" || estadoUser === "SUPERADMIN") && (
                        <Link to="/panel-de-control"><img className="imageAdmin" src={imageAdmin} alt="Terrarent logo" />
                        <p>Panel de Control</p></Link>
                    )}
                        </div>
                    ) : (
                        <>
                            <Link to={'registro-usuario'}><img className="imageNewUser" src={imageNewUser} alt="Nuevo Usuario" /><p>Crear usuario</p></Link>
                            <Link to={'inicio-sesion'}><img className="imageLogIn" src={imageLogIn} alt="Iniciar Sesión" /><p>Iniciar sesión</p></Link>
                        </>
                    )}
            </ul>
            
            </div>
            <div className={`nav_toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </div>
    );
};

export default Navbar