import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import imgCarpa from '../img/carpa-playera.jpg';
import img2 from '../img/bicicleta.jpg'
import img3 from '../img/baton_trakking.jpg'
import img4 from '../img/conservadora-02.jpg'
import img5 from '../img/mochila.jpg'


function Galery(props){
    const [product,setProduct] = useState([])
    const params = useParams()
     useEffect(() => {
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

    return(
        <div className="galeria" id="galeriaCompleta">
            {productoMuestra.img.map((img,i)=>(
                <img key={i} src={img} alt="imagen de producto"/>
            ))}
        </div>
    )

}
export default Galery;