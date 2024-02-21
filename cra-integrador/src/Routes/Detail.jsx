import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Detail(props){
    const [product,setProduct] = useState([])

    useEffect(() => {
        const productId = props.match.params.id;
        fetch( /*peticion a la api con el product id */)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error('Error al obtener detalles del producto:', error);
        });
    }, [props.match.params.id]);
  /* useEffect(() => {
    setProduct({
        id : 1,
        nombre : "carpa 1",})
   },[]) */
  

    return(
        <section className="detail">
            <header><h2>{product.nombre}</h2>   <button onClick={useNavigate(-1)}>{"<--"}</button> </header>
            <main>
                <img src={product.img[0]} alt="Imagen de producto" />
                <p>{product.descripcion}</p>
            </main>
        </section>
    )
}

export default Detail;