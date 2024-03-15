import React from 'react'
import { Link ,  useNavigate , useParams  , Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import MensajeResolucion from '../components/MensajeResolucion.jsx'
const ListadoUsers = () => {
  
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  
  const tipoUsuario = ['USER', 'ADMIN']
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/Usuario`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        setUsers(data);
      } catch (error) {
        console.error('Error al obtener listado de Usuarios:', error);
        setError(error);
      }
    };
   
    fetchData();
  }, []);
  
  

  const fetchModificarUsuario = async (mod) => {
    const url = `http://localhost:3001/Usuario`;
    const settings = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mod)
    };

    const response = await fetch(url, settings);
    const data = await response.json();

  }
  
  
  const handleTipoUsuarioChange = async (e) => {
    
    const modifiedUser = {...e}


    if(e.userRol === "ADMIN"){
      e.userRol = tipoUsuario[0];
    }else{
      e.userRol = tipoUsuario[1];
    }

    const modified = {
        idUsuario: e.idUsuario,
        username: e.username,
        nombreUsuario: e.nombreUsuario,
        apellidoUsuario: e.apellidoUsuario,
        numTelefono: e.numTelefono,
        email: e.email,
        password: e.password,
        userRol: e.userRol
    }


    fetchModificarUsuario(modified);

    setUsers(users.map(user => (user.idUsuario === modified.idUsuario ? modified : user)));

    toastSuccess("Se modificó el usuario correctamente")
  };

  
  
  return (
    <>
    <div className='listado-usuarios'>
      <h3>Listado de Usuarios</h3>
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Mail</th>
            <th>Tipo de usuario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
                <tr key={user.idUsuario}>
                  <td>{user.idUsuario}</td>
                  <td>{user.username}</td>
                  <td>{user.nombreUsuario}</td>
                  <td>{user.apellidoUsuario}</td>
                  <td>{user.email}</td>
                  <td className='tipo-usuario'>
                    <select value={user.userRol} onChange={(e) => handleTipoUsuarioChange(user)}>
                      <option value={user.userRol}>{user.userRol}</option>
                        <option key={user.userRol} value={user.userRol}>
                          {user.userRol === "ADMIN"? tipoUsuario[0] : tipoUsuario[1]}
                        </option>
                      
                    </select>
                  </td>
                  <td>
                    <FontAwesomeIcon className='eliminar-usuario' icon={faTrash} />
                  </td>
                  
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    <MensajeResolucion />
    </>
  )
}

export default ListadoUsers