import React from 'react'
import { Link ,  useNavigate , useParams  , Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import imgCarpa from '../img/carpa-playera.jpg';
import img2 from '../img/bicicleta.jpg'
import img3 from '../img/baton_trakking.jpg'
import img4 from '../img/conservadora-02.jpg'
import img5 from '../img/mochila.jpg'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogin } from "../components/utils/LoginContext"
import Swal from 'sweetalert2';
import image from "../img/TERRA_RENT4.png"
import Loader from '../components/Loader.jsx'

const ListadoCategorias = () => {
  
  const [categoria, setCategoria] = useState([]);
  const [error, setError] = useState(null);
  const user = useLogin()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-terrarent.ddns.net:3001/Categoria`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        const longProductos = data.length;
        setCategoria(data);
      } catch (error) {
        console.error('Error al obtener detalles de categorias:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);
  console.log(categoria);
 
  const fetchEliminarCategoria = async (del) => {
    const url = `https://api-terrarent.ddns.net:3001/Categoria/:${del.idCategoria}`;

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

  const handleEliminarCategoria = (del) => { 
    
   Swal.fire({
      title: `¿Estás seguro de querer eliminar la categoría ${del.nombreCategoria}?`,
      text: "Este procedimiento es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        fetchEliminarCategoria(del);
        const refresh = categoria.filter(categoria => categoria.idCategoria !== del.idCategoria);
        setCategoria(refresh);
        Swal.fire({  
          title: "Eliminada",
          text: `La categoria ${del.nombreCategoria} fue eliminada del sistema`,
          icon: "success"
        });
      }
    });

    //toastSuccess("Se eliminó el producto correctamente")
  }
  console.log("categoria");
  console.log(categoria);
  if(error){
    return  <div className="error-listado">
      <img src={image} alt="" />
      <p>Error al cargar el istado de categorías. Por favor, inténtalo de nuevo más tarde.</p>
  </div>;
  }
  if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
  if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){
  return (
    <div className='listado-productos'>
      <div className='contenedor-titulo-tabla'>
        <h3>Listado de Productos</h3>
        <Link to={`/crearCategoria`}><h3>+</h3></Link>
      </div>
       <table>
       <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {categoria.map(categoria => (
                <tr key={categoria.idCategoria}>
                  <td>{categoria.idCategoria}</td>
                  <td><Link className="link-detail" to={`/productos-categoria/:${categoria.idCategoria}`}>{categoria.nombreCategoria}</Link></td>
                  <td><button onClick={() => handleEliminarCategoria(categoria)}>
                  <FontAwesomeIcon className='eliminar-producto' icon={faTrash} /></button></td>
                  
                </tr>
        ))}
        </tbody>
      </table>
    </div>
  )}else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>
        }

export default ListadoCategorias;