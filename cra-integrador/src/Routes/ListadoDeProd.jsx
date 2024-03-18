import React from 'react'
import { Link ,  useNavigate , useParams  , Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import imgCarpa from '../img/carpa-playera.jpg';
import img2 from '../img/bicicleta.jpg'
import img3 from '../img/baton_trakking.jpg'
import img4 from '../img/conservadora-02.jpg'
import img5 from '../img/mochila.jpg'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ListadoDeProd = () => {
  
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Producto`;
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
    const productoMuestra = [
      {
      id : 1,
      nombreProd : "Carpa asombrosa",
      categoria:"Carpas",
      img :[imgCarpa,img2,img3,img4,img5,"asd"],
      descripcion: "Carpa para 4 personas de lona, con encajes de aluminio y gran variedad de colores sdada das d asd sa da sd asdoome andisani emadajnhtl pafmpaemm",
      precioProd: 5000
    },
      {
      id : 2,
      nombreProd : "Carpa asombrosa PRO",
      categoria:"Carpas",
      img :[imgCarpa,img2,img3,img4,img5,"asd"],
      descripcion: "Carpa para 8 personas de lona, con encajes de aluminio y gran variedad de colores sdada das d asd sa da sd asdoome andisani emadajnhtl pafmpaemm",
      precioProd: 7000
    },
  ]


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
                  <td>{producto.nombreProd}</td>
                  <td>{producto.categoria.nombreCategoria}</td>
                  <td>{producto.precioProd}</td>
                  <td>{producto.descripcionProd}</td>
                  <td>{5}</td>
                  {/*<td>{producto.img.length}</td>*/}
                  <td>
                    <FontAwesomeIcon className='eliminar-producto' icon={faTrash} />
                  </td>
                  
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListadoDeProd