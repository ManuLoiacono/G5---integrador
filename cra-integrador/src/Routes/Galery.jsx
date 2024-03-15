import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import imgFlecha from '../img/flecha_blanca.png';
import imgFlechaL2 from '../img/flecha-left2.png';
import imgFlechaR2 from '../img/flecha-right2.png';

function Galery() {
  const [product, setProduct] = useState([]);
  const [index, setIndex] = useState(0);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Producto/${params.id}`;
    const settings = {
      method: 'GET',
      mode: 'cors'
    };

    fetch(url, settings)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del producto:', error);
      });
  }, [params.id]);

  const cambiarImagen = (direccion) => {
    if (product.imagenes && product.imagenes.length > 0) {
      if (direccion === 'derecha') {
        setIndex((prevIndex) => (prevIndex + 1 >= product.imagenes.length ? 0 : prevIndex + 1));
      } else if (direccion === 'izquierda') {
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? product.imagenes.length - 1 : prevIndex - 1));
      }
    }
  };

  return (
    <div className="galery" id="galeriaCompleta">
      <div id="detail-header">
        <h2 id="detail-header-name" className="detail-header-item">{product.nombreProd}</h2>
        <img src={imgFlecha} className="back" onClick={() => (navigate(-1))} alt="Back" />
      </div>
      <div className="cont-items-carrousel">
        <section className="carrousel">
          {product.imagenes && product.imagenes.length > 0 && (
            <>
              <div className="tarjeta-carrousel">
                <img className="img-carrousel" src={product.imagenes[index].urlimg} alt="imagen de producto" />
              </div>
              <div className="flechas-carrousel">
                <img className="flecha-navegacion" src={imgFlechaL2} alt="flecha de navegacion" onClick={() => (cambiarImagen('izquierda'))} />
                <img className="flecha-navegacion" src={imgFlechaR2} alt="flecha de navegacion" onClick={() => (cambiarImagen('derecha'))} />
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default Galery;
