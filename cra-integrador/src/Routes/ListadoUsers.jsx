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
  const [usuariosMuestra, setUsuariosMuestra] = useState([
    {
      id: 1,
      username: "User1",
      nombreUsuario: "Joan Sebastian",
      apellidoUsuario: "Mastropiero",
      email: "eljohan@mail.com",
      tipoUsuario: "ADMIN"
    },
    {
      id: 2,
      username: "User2",
      nombreUsuario: "Sebastian",
      apellidoUsuario: "Vidal",
      email: "elseba@mail.com",
      tipoUsuario: "USER"
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:3001/Users`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        const longUsers = data.length;
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener listado de Usuarios:', error);
        /*toastError("Error al obtener listado de Usuarios")*/
        setError(error);
      }
    };
   
    fetchData();
  }, []);
  const handleTipoUsuarioChange = (e, userId) => {
    const { value } = e.target;
    
    const updatedUsers = usuariosMuestra.map(user => {
      if (user.id === userId) {
        return { ...user, tipoUsuario: value };
      }
      return user;
    });
    setUsuariosMuestra(updatedUsers);
    toastSuccess("Se modificó el usuario correctamente")
  };

  const tipoUsuario = ['USER', 'ADMIN']

  console.log(usuariosMuestra[0].tipoUsuario);
  console.log(usuariosMuestra[1].tipoUsuario);
  
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
        {usuariosMuestra.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.nombreUsuario}</td>
                  <td>{user.apellidoUsuario}</td>
                  <td>{user.email}</td>
                  <td className='tipo-usuario'>
                    <select value={user.tipoUsuario} onChange={(e) => handleTipoUsuarioChange(e, user.id)}>
                      <option value={user.tipoUsuario}>{user.tipoUsuario}</option>
                      {tipoUsuario.map((tipo, index) => (
                        <option key={index} value={tipo}>
                          {tipo}
                        </option>
                      ))}
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