import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Card from "../components/Card";
import imgFlecha from '../img/flecha_blanca.png';


function ProductosBuscados(){
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    let parametro = ""
    useEffect(()=>{console.log(productosFiltrados);},[productosFiltrados])
    useEffect(()=>{parametro=params},[])



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
           <div id="detail-header">
        <h2 id="detail-header-name" className="detail-header-item">
        Resultados para "{params.parametro}":
        </h2>
        <img src={imgFlecha} className="back" onClick={() => navigate(-1)} alt="Back" />
      </div>
            <section className="listado-productos-buscados">
            {productosFiltrados.map((producto)=>(
                <Card key={producto.idProducto} detalle={producto} />
                
            ))}
            </section>
        </div>
    )
}

export default ProductosBuscados