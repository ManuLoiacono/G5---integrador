import React, { useEffect, useState } from 'react'
import { useProduct } from "../components/utils/ProductContext";
import { useParams } from 'react-router-dom';
import Card from "../components/Card";

const ProductosCategoria = () => {
  
  const products = useProduct()
  const params = useParams();
  const idParams = params.id.slice(1)
  const [categoria, setCategoria] = useState([]);
  const [error, setError] = useState(null);
  const [categoriaActual, setCategoriaActual] = useState([]);
  const productosPorCategoria = [];


  products.productsData.forEach(producto => {
    if (producto.categoria.idCategoria == idParams) {
        productosPorCategoria.push(producto);
    }
  });

  console.log(productosPorCategoria);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-terrarent.ddns.net:3001/Categoria`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        setCategoria(data);
        const categoriaFiltrada = data.filter(cat => cat.idCategoria == idParams);
        console.log("categoriaFiltrada");
        console.log(categoriaFiltrada);
        setCategoriaActual(categoriaFiltrada);
      } catch (error) {
        console.error('Error al obtener detalles de categorias:', error);
        setError(error);
      }
    };

    fetchData();
  }, [idParams]);
  
  console.log("categoria actuial");
  console.log(categoriaActual);
  
  return (
    <div>
      <div className='portada-categoria'>
      {categoriaActual.length > 0 && (
        <img src={categoriaActual[0].imagenCategoria[0].urlimg} alt="" />
      )}
      </div>
   <section className="listado-productos-buscados">
            {productosPorCategoria.map((producto)=>(
                <Card key={producto.idProducto} detalle={producto} />
              ))}
            </section>
    </div>
  )
}

export default ProductosCategoria