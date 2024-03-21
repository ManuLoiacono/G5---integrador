import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import imgFlecha from '../img/flecha_blanca.png';
import noImage from '../img/no-image.jpg';
import CalendarReserva from "../components/CalendarReserva";

function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [imgSinPrimera, setImgSinPrimera] = useState([]);

  const fetchData = async () => {
    try {
      const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Producto/${params.id}`;
      const settings = {
        method: 'GET',
        mode: 'cors'
      };
      const response = await fetch(url, settings);
      const data = await response.json();
      setProduct(data);

      // Procesamos las imágene
      const imagenes = data.imagenes || [];
      const imgSinPrimera = imagenes.slice(1, 5);
      setImgSinPrimera(imgSinPrimera);
    } catch (error) {
      console.error('Error al obtener detalles del producto:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);
  console.log(product.imagenes);
    
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
          <img
            className="imgGrande"
            src={product.imagenes && product.imagenes.length > 0 ? product.imagenes[0].urlimg : noImage}
            alt="Imagen principal"
          />
          <div id="cuadrilla-img">
            {/* Renderizamos las imágenes procesadas */}
            {imgSinPrimera.map((img, index) => (
              <img
                key={index}
                className="imgChiqui"
                src={img.urlimg}
                alt={`Imagen ${index}`}
              />
            ))}
            {imgSinPrimera.length < 4 && (
              Array.from({ length: 4 - imgSinPrimera.length }).map((_, index) => (
                <img
                  key={imgSinPrimera.length + index} 
                  className="imgChiqui"
                  src={noImage}
                  alt={`Imagen no encontrada`}
                />
              ))
            )}
          </div>
          </div>
            <div id="galery-link">
              <Link to={`/productos/${params.id}/galeria`}><p>Ver más...</p></Link>
              <Outlet />
            </div>
            <div id="caracteristicas">
      <p className="titulo" onClick={toggleContenido}>Políticas y devoluciones</p>
      {mostrarContenido && (
        <div className="contenido">
          <ul>
          <p>Políticas generales:</p>
            <li>El cliente debe leer y aceptar todas las políticas y condiciones antes de realizar una reserva o alquiler en Terrarent.</li>
            <li>Las tarifas de alquiler están sujetas a cambios sin previo aviso.</li>
            <li>Los precios pueden variar según la temporada y la disponibilidad del producto.</li>
          </ul>
          <ul>
          <p>Políticas de Devolución del Producto:</p>
            <li>El cliente es responsable de devolver los productos de alquiler en la fecha y hora acordadas durante la reserva.</li>
            <li>Los productos deben ser devueltos en las mismas condiciones en las que fueron entregados. Se aplicarán cargos adicionales por daños o pérdida.</li>
            <li>Se proporcionará un período de gracia de 30 minutos para la devolución de los productos. Después de este tiempo, se aplicarán cargos adicionales.</li>
          </ul>
          <ul>
          <p>Políticas de Cancelación:</p>
            <li>Las cancelaciones deben realizarse con al menos 48 horas de anticipación para recibir un reembolso completo.</li>
            <li>Se aplicará un cargo por cancelación del 50% para cancelaciones realizadas dentro de las 48 horas previas a la fecha de inicio del alquiler.</li>
            <li>Las cancelaciones realizadas dentro de las 24 horas previas al inicio del alquiler no serán elegibles para reembolso.</li>
          </ul>
          <ul>
          <p>Políticas de Reserva:</p>
            <li>Las reservas deben realizarse con al menos 24 horas de anticipación para garantizar la disponibilidad del producto.</li>
            <li>Las reservas están sujetas a disponibilidad y pueden requerir un depósito anticipado para confirmar la reserva.</li>
            <li>Terrarent se reserva el derecho de cancelar o modificar una reserva en caso de circunstancias imprevistas o situaciones fuera de nuestro control.</li>
          </ul>
        </div>
      )}
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
          <CalendarReserva />
          <button className="rent-button">Alquilar</button>
        </div>
      </div>
    </section>
  );
}

export default Detail;