import { useParams , useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import imgCarpa from '../img/carpa-playera.jpg';
import img2 from '../img/bicicleta.jpg'
import img3 from '../img/baton_trakking.jpg'
import img4 from '../img/conservadora-02.jpg'
import img5 from '../img/mochila.jpg'
import imgFlecha from '../img/flecha_blanca.png'
import imgFlechaL from '../img/flecha-left.png'
import imgFlechaR from '../img/flecha-right.png'
import imgFlechaL2 from '../img/flecha-left2.png'
import imgFlechaR2 from '../img/flecha-right2.png'


function Galery(){
    const [product,setProduct] = useState([])
    const [index, setIndex] = useState(0)
    const params = useParams()
    const navigate = useNavigate();
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
         console.log(params.id);
         
     }, []);
     const productoMuestra = {
        id : 1,
        nombreProd : "Carpa asombrosa",
        img :[imgCarpa,img2,img3,img4,img5],
        descripcion: "Carpa para 4 personas de lona, con encajes de aluminio y gran variedad de colores sdada das d asd sa da sd asdoome andisani emadajnhtl pafmpaemm",
        precioProd: 5000
      }
      const cambiarImagen = (direccion) => {
        if (direccion === 'derecha') {
          setIndex((prevIndex) => (prevIndex + 1 >= productoMuestra.img.length ? 0 : prevIndex + 1));
        } else if (direccion === 'izquierda') {
          setIndex((prevIndex) => (prevIndex - 1 < 0 ? productoMuestra.img.length - 1 : prevIndex - 1));
        }
      };

    return(
      
        <div className="galeria" id="galeriaCompleta">
          <div  id="detail-header"><h2 id="detail-header-name" className="detail-header-item">{productoMuestra.nombreProd}</h2>   <img src={imgFlecha} className="back" onClick={() => (navigate(-1))}></img> </div>
          <div className="cont-items-carrousel">
            <section className="carrousel">
              <div className="tarjeta-carrousel"><img className="img-carrousel" src={productoMuestra.img[index]} alt="imagen de producto" /></div>
              <div className="flechas-carrousel">
                <img className="flecha-navegacion" src={imgFlechaL2} alt="flecha de navegacion" onClick={()=>(cambiarImagen('izquierda'))}></img><img className="flecha-navegacion" src={imgFlechaR2} alt="flecha de navegacion" onClick={()=>(cambiarImagen('derecha'))}></img>
              </div>
            
              {/*productoMuestra.img.map((img,i)=>(
                <img key={i} src={img} alt="imagen de producto"/>
             ))*/}
            </section>
          </div>
        </div>
    )

}
export default Galery;