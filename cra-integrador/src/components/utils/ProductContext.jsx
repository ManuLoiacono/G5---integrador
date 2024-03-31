import React, { createContext, useState, useEffect, useContext } from 'react';

// Crea el contexto
const ProductContext = createContext();

// Crea el proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API aquí
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-terrarent.ddns.net:3001/Producto');
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };
    fetchData();
  }, []); // El segundo argumento asegura que se realice solo en el montaje inicial

  return (
    <ProductContext.Provider value={{ productsData, setProductsData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext)
}
