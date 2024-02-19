import Card from "./Card";
import { useState , useEffect } from "react";

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

    return(
        <div>
      <h2>Productos recomendados:</h2>
      <div>
        {productos.map((productos) => (
          <Card key={producto.id} detalle={producto} />
        ))}
      </div>
    </div>

    )
    
}