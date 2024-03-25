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



const ListadoDeProd = () => {
  
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const user = useLogin()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-terrarent.ddns.net:3001/Producto`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        const longProductos = data.length;
        setProductos(data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const fetchEliminarProducto = async (del) => {
    const url = `https://api-terrarent.ddns.net:3001/Producto/:${del.idProducto}`;

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


  const handleEliminarProducto = (del) => { 
    fetchEliminarProducto(del);

    const refresh = productos.filter(producto => producto.idProducto !== del.idProducto);

    setProductos(refresh);

    toastSuccess("Se eliminó el producto correctamente")
  }
  if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
  if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){
      
  return (
    <div className='listado-productos'>
      <h3>Listado de Productos</h3>
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Imágenes</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {productos.map(producto => (
                <tr key={producto.idProducto}>
                  <td>{producto.idProducto}</td>
                  <td><Link className="link-detail" to={`/productos/:${producto.idProducto}`}>{producto.nombreProd}</Link></td>
                  <td>{producto.categoria.nombreCategoria}</td>
                  <td>{producto.precioProd}</td>
                  <td>{producto.descripcionProd}</td>
                  <td>{producto.imagenes.length}</td>
                  <td>
                  <button onClick={() => handleEliminarProducto(producto)}>
                  <FontAwesomeIcon className='eliminar-producto' icon={faTrash} />
                    </button>
                  </td>
                  
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
        }else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>
    
}

export default ListadoDeProd