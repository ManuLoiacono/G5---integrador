import Card from "./Card";
import { useState , useEffect } from "react";
import imgCarpa from '../img/carpa-playera.jpg'

function Galeria() {
   const [productos,setProductos]=useState([])
   useEffect(() => {
    const url = `http://localhost:3001/Productos`
    const settings = {
        method:'GET'
    }
    fetch(url,settings)
    .then((response) => response.json())
    .then((data) => {
      setProductos(data);
      console.log(productos.nombreProd);
      console.log(productos.idProducto);
    })
    .catch((error) => {
      console.error('Error al obtener detalles del producto:', error);
    });
    }, [])
          /*ARRAY DE PRODUCTOS DE EJEMPLO: */
          const productosEjemplo= 
          [{id:1, img:imgCarpa, nombre:"carpa 1", precio:"3525"},
          {id:2, img:imgCarpa, nombre:"carpa buenisima", precio:"5"},
          {id:3, img:imgCarpa, nombre:"carpa 2", precio:"68686"},
          {id:4, img:imgCarpa, nombre:"carpa invernal", precio:"1222"},
          {id:5, img:imgCarpa, nombre:"carpa hogareña", precio:"1110"},
          {id:6, img:imgCarpa, nombre:"carpa AX8000", precio:"2000"},
          {id:7, img:imgCarpa, nombre:"carpa 66", precio:"3500"},
          {id:8, img:imgCarpa, nombre:"carpa pegajosa", precio:"6000"}
          ]
          const longProductos = productosEjemplo.length


          useEffect(()=>{
            const productosAleatorios = []
          function randomizar(){

            while(productosAleatorios.length<6){
               const numRandom = Math.floor(Math.random()*longProductos);
               const productoSeleccionado = productosEjemplo[numRandom];
               if(!productosAleatorios.some((p) => p.id === productoSeleccionado.id)){
               productosAleatorios.push(productosEjemplo[numRandom])} else {continue};
            }
           }
           randomizar();
           setProductos(productosAleatorios)
           console.log(productosAleatorios);
          },[])
          
    return(
        <section className="galeria" id="recomendados">
      <h2>Productos recomendados:</h2>
      <div className="recomendados">
        {/* CAMBIAR ARRAY CUANDO YA ESTÉ LA API*/}
        {productos.map((producto) => (
          <Card key={producto.id} detalle={producto} />
        ))}
      </div>
    </section>

    )
    
}
export default Galeria