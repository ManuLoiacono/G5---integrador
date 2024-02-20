import Card from "./Card";
import { useState , useEffect } from "react";
import imgCarpa from '../img/carpa-playera.jpg'

function Galeria() {
   const [productos,setProductos]=useState([])
   useEffect(() => {
    const obtenerProductos = async () => {
        try {
          const response = await fetch(/*ACA VA LA LLAMADA A LA API */);
          
          if (!response.ok) {
            throw new Error('Error al obtener datos de la API');
          }
  
          const data = await response.json();
          setProductos(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    obtenerProductos();
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
          {id:8, img:imgCarpa, nombre:"carpa pegajosa", precio:"6000"},
          {id:9, img:imgCarpa, nombre:"carpa coso", precio:"12000"},
          {id:10, img:imgCarpa, nombre:"carpa 61564", precio:"8"}
          ]
           

    return(
        <section id="section-recomendados">
      <h2>Productos recomendados:</h2>
      <div className="recomendados">
        {/* CAMBIAR ARRAY CUANDO YA ESTÉ LA API*/}
        {productosEjemplo.map((producto) => (
          <Card key={producto.id} detalle={producto} />
        ))}
      </div>
    </section>

    )
    
}
export default Galeria