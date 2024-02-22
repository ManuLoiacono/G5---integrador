import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
import imgCarpa from '../img/carpa-playera.jpg'

function Detail(props){
  const [product,setProduct] = useState([])
 /* const [id,setId] = useState()
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const ultimoCaracter = currentUrl.slice(-1);
    setId(ultimoCaracter)
  },[]);
*/
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
    descripcion: "Carpa para 4 personas de lona, con encajes de aluminio y gran variedad de colores sdada das d asd sa da sd asdoome andisani emadajnhtl pafmpaemm",
    precioProd: 5000
  }

    return(
        <section className="detail">
            <div  id="detail-header"><h2 className="detail-header-item">{productoMuestra.nombreProd}</h2>   <button className="detail-header-item" onClick={useNavigate(-1)}>{"<--"}</button> </div>
            <main>
                <img src={imgCarpa} alt="Imagen de producto" />
                <p className="detail-data">{productoMuestra.descripcion}</p>
                <p className="detail-data">${productoMuestra.precioProd}</p>
                
            </main>
        </section>
    )

    
}

export default Detail;