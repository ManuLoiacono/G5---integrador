import { useEffect, useState } from "react";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import imgFlecha from '../img/flecha_blanca.png';
import noImage from '../img/no-image.jpg';

function Detail() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [imgSinPrimera, setImgSinPrimera] = useState([]);

  const fetchData = async () => {
    try {
      const url = `http://localhost:3001/Producto/${params.id}`;
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

  return (
    <section className="detail">
      <div id="detail-header">
        <h2 id="detail-header-name" className="detail-header-item">
          {product.nombreProd}
        </h2>
        <img src={imgFlecha} className="back" onClick={() => navigate(-1)} alt="Back" />
      </div>
      <main>
        <div id="imagenes">
          <img
            className="imgGrande"
            src={product.imagenes && product.imagenes.length > 0 ? product.imagenes[0].urlimg : noImage}
            alt="Imagen principal"
          />
          <div id="cuadrilla-img">
            {/* Renderizamos las imágenes procesadas */}
            {imgSinPrimera.map((img, index) => (
              <img key={index} className="imgChiqui" src={img.urlimg} alt={`Imagen ${index}`} />
            ))}
          </div>
          <Link to={`/productos/${params.id}/galeria`}><p id="galery-link">Ver más...</p></Link>
          <Outlet />
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
        </div>
      </main>
    </section>
  );
}

export default Detail;