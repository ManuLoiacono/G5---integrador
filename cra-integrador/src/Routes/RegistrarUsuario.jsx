import { useState } from "react"
import { Link, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
function RegistrarUsuario(){
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    userName:'',
    nombre:'',
    apellido:'',
    telefono:'',
    mail:'',
    password:'',
  });
  const handleInputChange = (fieldName, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newUser.userName.length === 0 || newUser.nombre.length === 0 || newUser.apellido.length === 0 || newUser.telefono.length === 0 || newUser.mail.length === 0 || newUser.password.length === 0 ){
      toastError('Complete los campos vacíos ');
      return;
    } 
    else if(newUser.userName.length <=3){
      toastError('El username debe tener al menos 4 caracteres');
      return;
    } 
    else if(newUser.userName.length <=3){
      toastError('El username debe tener al menos 4 caracteres');
      return;
    } 
    toastSuccess('El usuario ' + newUser.userName + ' ha sido creado');
    console.log('Usuario creado:', newUser);
    const url = `http://localhost:3001/Usuario`;
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    };

    fetch(url, settings)
      .then((response) => response.json())
      .then((data) => {
        toastSuccess('Se cargó el usuario ' + newUser.nombre + ' correctamente');
      })
      .catch((error) => {
        console.error('Error al cargar el ususario' + newUser.nombre, error);
        toastError('Error al cargar  el ususario: ' + newUser.nombre);
        navigate('/');
      })
      .finally(() => {
      
      });
  }
  
  
    
  
  const [showPassword, setShowPassword] = useState(false);
  

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    }
      return (
        <>
          <div className="registrar-usuario">
            <form onSubmit={handleSubmit}>
              <h2>REGISTRAR USUARIO</h2>
              <div>
                <label> Nombre de Usuario: </label>
                <input
                    className='input-username-usuario'
                    type="text"
                    placeholder="Ingrese username"
                    value={newUser.userName.trim()}
                    onChange={(e) => {
                      handleInputChange('userName', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Nombre: </label>
                <input
                    className='input-nombre-usuario'
                    type="text"
                    placeholder="Ingrese nombre"
                    onChange={(e) => {
                      handleInputChange('nombre', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Apellido: </label>
                <input
                    className='input-apellido-usuario'
                    type="text"
                    placeholder="Ingrese telefono"
                    onChange={(e) => {
                      handleInputChange('apellido', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Teléfono: </label>
                <input
                    className='input-telefono-usuario'
                    type="number"
                    placeholder="Ingrese apellido"
                    onChange={(e) => {
                      handleInputChange('telefono', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> E-Mail: </label>
                <input
                    className='input-mail-usuario'
                    type="mail"
                    placeholder="Ingrese e-mail"
                    onChange={(e) => {
                      handleInputChange('mail', e.target.value)
                    }}
                />
              </div>
              <div className="password-input-wrapper">
                <label htmlFor="password">Contraseña</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={newUser.password}
                  onChange={(e) => {
                    handleInputChange('password', e.target.value)
                  }}
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
              <button type="submit">CREAR CUENTA</button>
            <h3>Ya tienes cuenta?  <Link to={'/inicio-sesion'}><p className="Ingresar">Ingresar</p></Link></h3>
            </form>
          </div>
        </>
      );
    };
export default RegistrarUsuario