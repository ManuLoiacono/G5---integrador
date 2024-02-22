import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto
const ProductContext = createContext();

// Crea el proveedor del contexto
const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Realiza la llamada a la API aquí
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };
    // Llama a la función para obtener datos al cargar el componente
    fetchData();
  }, []); // El segundo argumento asegura que se realice solo en el montaje inicial

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };