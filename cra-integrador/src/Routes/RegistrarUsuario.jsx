import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegistrarUsuario(){

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  



    return (
        <>
          <div className="registrar-usuario">
            <form>
              <h2>REGISTRAR USUARIO</h2>
              <div>
                <label> Nombre: </label>
                <input
                    className='input-nombre-usuario'
                    type="text"
                    placeholder="Ingrese nombre"
                />
              </div>
              <div>
                <label> Apellido: </label>
                <input
                    className='input-apellido-usuario'
                    type="text"
                    placeholder="Ingrese apellido"
                />
              </div>
              <div>
                <label> E-Mail: </label>
                <input
                    className='input-mail-usuario'
                    type="mail"
                    placeholder="Ingrese e-mail"
                />
              </div>
              <div className="password-input-wrapper">
                <label htmlFor="password">Contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                />
                <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="toggle-password-button"
                    >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              <button>CREAR CUENTA</button>
            </form>
          </div>
        </>
      );
    };
export default RegistrarUsuario