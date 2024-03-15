import { useState } from "react"
import { Link, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
function RegistrarUsuario(){
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    username:'',
    nombreUsuario:'',
    apellidoUsuario:'',
    numTelefono:'',
    email:'',
    password:'',
    userRol: "USER",
  });
  const u = {
      username:'',
      nombreUsuario:'',
      apellidoUsuario:'',
      numTelefono:'',
      email:'',
      password:'',
      userRol: "USER",
    }
  const resetForm = () => {
    setNewUser(u);
  };

  const handleInputChange = (fieldName, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newUser.username.length === 0 || newUser.nombreUsuario.length === 0 || newUser.apellidoUsuario.length === 0 || newUser.numTelefono.length === 0 || newUser.email.length === 0 || newUser.password.length === 0 ){
      toastError('Complete los campos vacíos ');
      return;
    } 
    else if(newUser.username.length <=3){
      toastError('El username debe tener al menos 4 caracteres');
      return;
    } 
    else if(newUser.username.length <=3){
      toastError('El username debe tener al menos 4 caracteres');
      return;
    } 
    toastSuccess('El usuario ' + newUser.username + ' ha sido creado');
    console.log('Usuario creado:', newUser);
    const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Usuario`;
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
        toastSuccess('Se cargó el usuario ' + newUser.nombreUsuario + ' correctamente');
        resetForm();
      })
      .catch((error) => {
        console.error('Error al cargar el ususario' + newUser.nombreUsuario, error);
        toastError('Error al cargar  el ususario: ' + newUser.nombreUsuario);
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
                    value={newUser.username.trim()}
                    onChange={(e) => {
                      handleInputChange('username', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Nombre: </label>
                <input
                    className='input-nombre-usuario'
                    type="text"
                    placeholder="Ingrese nombre"
                    value={newUser.nombreUsuario}
                    onChange={(e) => {
                      handleInputChange('nombreUsuario', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Apellido: </label>
                <input
                    className='input-apellido-usuario'
                    type="text"
                    placeholder="Ingrese telefono"
                    value={newUser.apellidoUsuario}
                    onChange={(e) => {
                      handleInputChange('apellidoUsuario', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> Teléfono: </label>
                <input
                    className='input-telefono-usuario'
                    type="number"
                    placeholder="Ingrese apellido"
                    value={newUser.numTelefono}
                    onChange={(e) => {
                      handleInputChange('numTelefono', e.target.value)
                    }}
                />
              </div>
              <div>
                <label> E-Mail: </label>
                <input
                    className='input-mail-usuario'
                    type="mail"
                    placeholder="Ingrese e-mail"
                    value={newUser.email}
                    onChange={(e) => {
                      handleInputChange('email', e.target.value)
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