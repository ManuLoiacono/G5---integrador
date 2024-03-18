import Card from "./Card";
import { useState, useEffect } from "react";

function Galeria() {
  const [productosMostrar, setProductosMostrar] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://ec2-18-219-62-16.us-east-2.compute.amazonaws.com:3001/Producto`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        const longProductos = data.length;
        const productosAleatorios = [];

        function randomizar() {
          while (productosAleatorios.length < 6) {
            const numRandom = Math.floor(Math.random() * longProductos);
            const productoSeleccionado = data[numRandom];

            if (!productosAleatorios.some((p) => p.idProducto === productoSeleccionado.idProducto)) {
              productosAleatorios.push(data[numRandom]);
            } else {
              continue;
            }
          }
        }

        randomizar();
        setProductosMostrar(productosAleatorios);
        console.log(productosAleatorios);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        setError(error);
      }
    };

    fetchData();
  }, []); // La dependencia está vacía para que se ejecute solo en el montaje inicial

  if (error) {
    return <div>Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</div>;
  }

  return (
    <section className="galeria" id="recomendados">
      <h2>Productos recomendados:</h2>
      <div className="recomendados">
        {productosMostrar.map((producto) => (
          <Card key={producto.idProducto} detalle={producto} />
        ))}
      </div>
    </section>
  );
}

export default Galeria;
