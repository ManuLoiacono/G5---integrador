import React, { useEffect } from 'react'
import { useProduct } from "../components/utils/ProductContext";
import { useParams } from 'react-router-dom';
import Card from "../components/Card";

const ProductosCategoria = () => {
  const products = useProduct()
  const params = useParams();
  const idParams = params.id.slice(1)
  console.log(idParams);
  console.log(products.productsData);
  
  const productosPorCategoria = [];


  products.productsData.forEach(producto => {
    if (producto.categoria.idCategoria == idParams) {
        productosPorCategoria.push(producto);
    }
  });
  useEffect(() => {
  }, [idParams, products.productsData]);
  console.log(productosPorCategoria);
  
  
  return (
    <div>
   <section className="listado-productos-buscados">
            {productosPorCategoria.map((producto)=>(
                <Card key={producto.idProducto} detalle={producto} />
                
            ))}
            </section>
    </div>
  )
}

export default ProductosCategoria