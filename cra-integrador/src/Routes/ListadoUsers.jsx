import React from 'react'
import { Link ,  useNavigate , useParams  , Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import MensajeResolucion from '../components/MensajeResolucion.jsx'
import { useLogin } from "../components/utils/LoginContext"

const ListadoUsers = () => {
  
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const user = useLogin()

  
  const tipoUsuario = ['USER', 'ADMIN']
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Usuario`;
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
    const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Usuario`;
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
  
  const fetchEliminarUsuario = async (del) => {
    const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Usuario/${del.idUsuario}`;

    console.log(url);
    const settings = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(del)
    };
    const response = await fetch(url, settings);
    const data = await response.json();
  }


  
  const handleTipoUsuarioChange = async (e) => {
    
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

  const handleEliminarUsuario = (del) => { 
    fetchEliminarUsuario(del);

    const refresh = users.filter(user => user.idUsuario !== del.idUsuario)

    setUsers(refresh);

    toastSuccess("Se modificó el usuario correctamente")
  }
  if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
  if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){

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
                    <select value={user.userRol} onChange={() =>handleTipoUsuarioChange(user)}>
                      <option value={user.userRol}>{user.userRol}</option>
                        <option key={user.userRol} value={user.userRol}>
                          {user.userRol === "ADMIN"? tipoUsuario[0] : tipoUsuario[1]}
                        </option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleEliminarUsuario(user)}>
                      <FontAwesomeIcon className='eliminar-usuario' icon={faTrash}/>
                    </button>
                  </td>
                  
                </tr>
              ))}
        </tbody>
      </table>
    </div>
    <MensajeResolucion />
    </>
  )
        } else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>
}

export default ListadoUsers