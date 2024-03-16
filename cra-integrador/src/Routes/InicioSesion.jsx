import { useState } from "react"
import { Link } from "react-router-dom";
import imageInicio from '../img/TERRA_RENT_resol.png'

function InicioSesion(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const userData = {
          email,
          password
        };
      
        try {
          const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const data = await response.json()
          console.log(userData);
          console.log(data)
          setToken(data)

      
        } catch (error) {
            console.log("Error al recuperar dato del servidor: " + error);
        }
      };

    return(
        <div className="input-user-card-container">
            <section className="input-user-card">
                <img src={imageInicio} alt="" />
                <h2>INICIAR SESIÓN</h2>
                <form action="POST" onSubmit={handleSubmit}>
                <input id="get-mail" className="login-input" type="text" value={email} placeholder="Tu Email o nombre de usuario" onChange={(e) => setEmail(e.target.value)}/>
                <input id ="get-password"className="login-input" type="password" value={password} placeholder="Tu Contraseña" onChange={(e) => setPassword(e.target.value)}/>
                <button className="login-button" type="submit">Ingresar</button>
                </form>
                <div className="login-text-container">
                <p className="login-text">¿Necesitas una cuenta?</p> <Link to={'/registro-usuario'}><p className="registrarse">Registrarse</p></Link>
                </div>

            </section>
        </div>


    )
}
export default InicioSesion;