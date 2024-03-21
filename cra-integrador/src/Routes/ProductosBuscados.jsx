import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card";


function ProductosBuscados(){
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [error, setError] = useState(null);
    const params = useParams();
    let parametro = ""
    useEffect(()=>{console.log(productosFiltrados);},[productosFiltrados])
    useEffect(()=>{parametro=params},[])



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
            let dataLength = data.length
    
            const productos = [];
            function filtrar() {
              const keywords = params.parametro.toLowerCase().split(" ");
          
              for (let i = 0; i < dataLength; i++) {
                  const nombreProdLowerCase = data[i].nombreProd.toLowerCase();
                  let encontrado = true;
                  for (let j = 0; j < keywords.length; j++) {
                      if (!nombreProdLowerCase.includes(keywords[j])) {
                          encontrado = false;
                          break;
                      }
                  }
                  if (encontrado) {
                      productos.push(data[i]);
                  }
              }
          }
            filtrar();

            setProductosFiltrados(productos)
          } catch (error) {
            console.error('Error al obtener detalles del producto:', error);
            setError(error);
          }
        };
    
        fetchData();
        

      }, []);
    
      if (error) {
        return <div>Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</div>;
      }
    

    return(
        <div className="listado-productos">
            <h2>Resultados para "{params.parametro}"</h2>
            <section>
            {productosFiltrados.map((producto)=>(
                <Card key={producto.idProducto} detalle={producto} />
                
            ))}
            </section>
        </div>
    )
}

export default ProductosBuscados