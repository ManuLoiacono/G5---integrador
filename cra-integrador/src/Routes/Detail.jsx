import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail(props){
  const [product,setProduct] = useState([])
  const [id,setId] = useState()
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const ultimoCaracter = currentUrl.slice(-1);
    setId(ultimoCaracter)
  },[]);

  useEffect(() => {
      const url = `http://localhost:3001/Producto/${id}`
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

 /*useEffect(() => {
  setProduct({
      id : 1,
      nombre : "carpa 1",
      img: imgCarpa});
 },[])*/
    

    return(
        <section className="detail">
            <header><h2>{product.nombreProd}</h2>   <button onClick={useNavigate(-1)}>{"<--"}</button> </header>
            <main>
                {/*<img src={product.img[0]} alt="Imagen de producto" />*/}
                {/*<p>{product.descripcion}</p>*/}
                <p>{product.precioProd}</p>
                
            </main>
        </section>
    )

    
}

export default Detail;