import { useState, useEffect } from "react"
import image from "../img/TERRA_RENT4.png"
import { Link } from "react-router-dom"
import { useLogin } from "./utils/LoginContext"

function Header(){
    const [iniciales,setIniciales] = useState(null)
    const [estadoUser, setEstadoUser] = useState(null)

    const user = useLogin()
    

    useEffect(()=>{
    if(user.user!==null){
        let inicial = user.user.nombreUsuario[0] +" "+user.user.apellidoUsuario[0]
        setEstadoUser(user.user.userRol)
        setIniciales(inicial)
    }},[user.user]) 

    return(
        <>
        <header>
            <Link to={'/'}><img className="logo" src={image} alt="Terrarent logo" /></Link>
                <ul id="button-container">
                 {estadoUser==="ADMIN" && <Link to="/panel-de-control"><button className="header-item">Admin Dashboard</button></Link>}
                 {user.user!==null ? (
                  <div id="login-data"><p className="bienvenida header-item">Bienvenido {user.user.nombreUsuario}</p>  <section className="perfil"><div className="iniciales">{iniciales}</div><button onClick={user.logout}>Cerrar Sesión</button></section></div>
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