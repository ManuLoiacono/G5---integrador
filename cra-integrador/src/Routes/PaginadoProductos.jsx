import React from 'react'
import { useEffect, useState } from "react";
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext";
import { useParams } from 'react-router-dom';
const PaginadoProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const user = useLogin()
    const products = useProduct()
    const params = useParams();

    const todosLosPorductos = products.productsData

    console.log(todosLosPorductos);
  return (
    <div>PaginadoProductos</div>
  )
}

export default PaginadoProductos