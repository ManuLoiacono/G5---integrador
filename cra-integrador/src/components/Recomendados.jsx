import Card from "./Card";
import { useState, useEffect } from "react";
import image from "../img/TERRA_RENT4.png";


function Galeria() {
  const [productosMostrar, setProductosMostrar] = useState([]);
  const [error, setError] = useState(null);
  const [mostrar, setMostrar] = useState("noMostrar")

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrar("");
    }, 1500);

    return () => clearTimeout(timer); // Aquí se agrega la función de limpieza para limpiar el temporizador cuando el componente se desmonte.
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-terrarent.ddns.net:3001/Producto`;
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
          while (productosAleatorios.length < 8) {
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
    return <div className="error">
            <img src={image} alt="" />
            <p>Error al cargar la sección Recomendados. Por favor, inténtalo de nuevo más tarde.</p>
          </div>;
  }
  
  return (
    <section className={`galeria ${mostrar}`} id="recomendados">
      <h2>Productos recomendados</h2>
      <div className="recomendados">
        {productosMostrar.map((producto) => (
          <Card key={producto.idProducto} detalle={producto} />
        ))}
      </div>
    </section>
  );
}

export default Galeria;
