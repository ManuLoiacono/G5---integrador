import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imgCarpa from '../img/carpa-playera.jpg'

function Detail(props){
    const [product,setProduct] = useState({})
    const [id,setId] = useState()
    useEffect(() => {
      const currentUrl = window.location.pathname;
      const ultimoCaracter = currentUrl.slice(-1);
      setId(ultimoCaracter)
    },[]);

    useEffect(() => {
        const url = `/Productos/${id}`
        const settings = {
            method:"GET"
        }
        fetch(url,settings)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
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
            <div id="detail-header"><h2 className="detail-header-item">{product.nombre}</h2>   <button className="detail-header-item" onClick={useNavigate(-1)}>{"<--"}</button> </div>
            <main>
                <img src={product.img} alt="Imagen de producto" />
                <p>{product.descripcion}</p>
            </main>
        </section>
    )
}

export default Detail;