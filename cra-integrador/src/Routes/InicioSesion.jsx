import { useState } from "react"


function InicioSesion(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const userData = {
          email,
          password,
        };
      
        try {
          const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
      
        } catch (error) {
            console.log("Error al recuperar dato del servidor: " + error);
        }
      };

    return(
        <div className="input-user-card-container">
            <section className="imput-user-card">
                <h2>Iniciar sesión</h2>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Ingresar</button>
                <p>Necesitas una cuenta?</p> <p className="registrarse">Registrarse</p>

            </section>
        </div>


    )
}