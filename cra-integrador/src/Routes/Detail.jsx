import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import imgFlecha from '../img/flecha_blanca.png';
import noImage from '../img/no-image.jpg';
import { FaPalette, FaUsers, FaTag, FaWeight, FaRuler, FaWindowMaximize, FaDoorOpen, FaShoppingBag } from 'react-icons/fa';
import CalendarioReserva from "../components/CalendarioReserva";
import Politicas from "../components/Politicas";
import { useLogin } from "../components/utils/LoginContext";
import { toastError } from "../components/utils/Notificaciones";


function sinFecha(){
  toastError("Ingrese un rango de fechas por favor.")
}

function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [imgSinPrimera, setImgSinPrimera] = useState([]);
  const [dateRange, setDateRange] = useState([null, null]); // Nuevo estado para el rango de fechas
  const user = useLogin()

  const handleDateChange = (range) => {
    setDateRange(range);
  };
  const fetchData = async () => {
    try {
      const url = `https://api-terrarent.ddns.net:3001/Producto/${params.id}`;
      const settings = {
        method: 'GET',
        mode: 'cors'
      };
      const response = await fetch(url, settings);
      const data = await response.json();
      setProduct(data);

      console.log(JSON.stringify(data));

      // Procesamos las imágene
      const imagenes = data.imagenes || [];
      const imgSinPrimera = imagenes.slice(1, 5);
      setImgSinPrimera(imgSinPrimera);
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
    }
  };

 

  const caracteristicas = [
    { titulo: 'Color:', icono: FaPalette },
    { titulo: 'Capacidad:', icono: FaUsers },
    { titulo: 'Material:', icono: FaTag },
    { titulo: 'Peso:', icono: FaWeight },
    { titulo: 'Dimensiones:', icono: FaRuler },
    { titulo: 'Ventanas:', icono: FaWindowMaximize },
    { titulo: 'Puertas:', icono: FaDoorOpen },
    { titulo: 'Incluye:', icono: FaShoppingBag }
  ];

  const productoCaracterísticas = [
    { titulo: 'Color:', detalle: "Azul" },
    { titulo: 'Capacidad:', detalle: "4 personas" },
    { titulo: 'Material:', detalle: "Nylon"},
    { titulo: 'Peso:', detalle:"4 Kgs." },
    { titulo: 'Dimensiones:', detalle: " 2m x 2m" },
    { titulo: 'Ventanas:', detalle: "2 laterales" },
    { titulo: 'Puertas:', detalle: "1 frontal" },
    { titulo: 'Incluye:', detalle: "Bolsa de transporte"}
  ];

   useEffect(() => {
    fetchData();
    }, [params.id]);
  
 
    
  const [mostrarContenido, setMostrarContenido] = useState(false);
  
  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
  };
  return (
    <section className="detail">
      <div id="detail-header">
        <h2 id="detail-header-name" className="detail-header-item">
          {product.nombreProd}
        </h2>
        <img src={imgFlecha} className="back" onClick={() => navigate(-1)} alt="Back" />
      </div>
      <div className="detail-container">
        <div className="contenedor-imgs">
          <div id="imagenes">
            <div className="imgGrande">
              <img
                src={product.imagenes && product.imagenes.length > 0 ? product.imagenes[0].urlimg : noImage}
                alt="Imagen principal"/>
            </div>
            <div id="cuadrilla-img">
              {/* Renderizamos las imágenes procesadas */}
              {imgSinPrimera.map((img, index) => (
                <div className="imgChiqui">
                  <img
                    key={index}
                    src={img.urlimg}
                    alt={`Imagen ${index}`}
                  />
                </div>
              ))}
              {imgSinPrimera.length < 4 && (
                Array.from({ length: 4 - imgSinPrimera.length }).map((_, index) => (
                  <div className="imgChiqui">
                    <img
                      key={imgSinPrimera.length + index} 
                      src={noImage}
                      alt={`Imagen no encontrada`}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <div id="galery-link">
            <Link to={`/productos/${params.id}/galeria`}>
              <p>Ver más...</p>
            </Link>
            <Outlet />
          </div>
          <div id="caracteristicas">
            <div>
              <p className="titulo">CARACTERÍSTICAS</p>
              <ul className="caracteristicas-producto">
              {/* {caracteristicas.map(({ titulo, icono: Icono }, index) => ( */}
              {product.caracteristicas && product.caracteristicas.map((caracteristica, index) => (
                <li key={index}>
                  <span>{caracteristica.descripCaracteristica}</span>
                </li>
              ))}
              </ul>
            </div>
          <Politicas/>
          </div>  
        </div>
        <div id="under-img">
          <div className="descripcion-container">
            <h4>Descripción:</h4>
            <p className="detail-data">{product.descripcionProd}</p>
          </div>
          <div className="precio-container">
            <h4>Alquiler por día:</h4>
            <p className="precio">${product.precioProd}</p>
          </div>
          <p>Fecha Inicio - Fecha Fin</p>
          <CalendarioReserva onDateChange={handleDateChange} />
          {user.user ? (dateRange[1] ? (<Link to={`/reserva/${params.id}/${dateRange}`}><button className="rent-button">Alquilar</button></Link>):<button className="rent-button" onClick={sinFecha}>Alquilar</button>) : (<Link to={'/inicio-sesion'}><button className="rent-button">Alquilar</button></Link>)}
          <Politicas/>
        </div>
      </div>
    </section>
  );
}

export default Detail;