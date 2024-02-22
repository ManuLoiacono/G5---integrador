import { useEffect, useState } from "react";
import { Link ,  useNavigate , useParams } from "react-router-dom";
import imgCarpa from '../img/carpa-playera.jpg';
import img2 from '../img/bicicleta.jpg'
import img3 from '../img/baton_trakking.jpg'
import img4 from '../img/conservadora-02.jpg'
import img5 from '../img/mochila.jpg'

function Detail(){
  const [product,setProduct] = useState([])
 const params = useParams()
  useEffect(() => {
      window.scrollTo(0, 0);
      const url = `http://localhost:3001/Producto/${params.id}`
      const settings = {
          method:'GET'
      }
      fetch(url,settings)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(product.nombreProd);
        console.log(product.idProducto);
      })
      .catch((error) => {
        console.error('Error al obtener detalles del producto:', error);
      });
      
      
      
  }, []);
  const productoMuestra = {
    id : 1,
    nombreProd : "Carpa asombrosa",
    img :[imgCarpa,img2,img3,img4,img5,"asd"],
    descripcion: "Carpa para 4 personas de lona, con encajes de aluminio y gran variedad de colores sdada das d asd sa da sd asdoome andisani emadajnhtl pafmpaemm",
    precioProd: 5000
  }
  /*Funcion para hacer el grid de las imagenes secundarias:*/
  const imgSinPrimera = [];
  function filtrarImg(arr) {
    for (let i = 1; i < 5; i++) {
      if (i < arr.length) {
        imgSinPrimera.push(arr[i]);
      } else {
        break; 
      }
    }
  }
  
  filtrarImg(productoMuestra.img)
  console.log(imgSinPrimera);
    return(
        <section className="detail">
            <div  id="detail-header"><h2 id="detail-header-name" className="detail-header-item">{productoMuestra.nombreProd}</h2>   <button className="detail-header-item" onClick={useNavigate(-1)}>{"<--"}</button> </div>
            <main>
              <div id="imagenes">
                <img className="imgGrande" src={productoMuestra.img[0]} alt="Imagen principal" />
                <div id="cuadrilla-img">
                  {imgSinPrimera.map((img)=>(
                    <img className="imgChiqui" src={img} alt=""/>
                  ))}
                  </div>
                  <Link to={{ pathname: '/galery'}}><p id="galery-link">Ver más...</p></Link>
                  </div>
                  <div id="under-img">
                    <p className="detail-data">{productoMuestra.descripcion}</p>
                    <p className="detail-data">${productoMuestra.precioProd}</p>
                  </div>
            </main>
        </section>
    )

    
}

export default Detail;