import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";

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
      const url = `http://localhost:3001/Producto/${params}`
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

    return(
        <section className="detail">
            <div  id="detail-header"><h2 className="detail-header-item">{product.nombreProd}</h2>   <button className="detail-header-item" onClick={useNavigate(-1)}>{"<--"}</button> </div>
            <main>
                {/*<img src={product.img[0]} alt="Imagen de producto" />*/}
                {/*<p>{product.descripcion}</p>*/}
                <p>{product.precioProd}</p>
                
            </main>
        </section>
    )

    
}

export default Detail;