import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Card from "../components/Card";
import imgFlecha from '../img/flecha_blanca.png';
import { useProduct } from "../components/utils/ProductContext";


function ProductosBuscados(props){
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [error, setError] = useState(null);
    const [reservas, setReservas] = useState([])
    const navigate = useNavigate();
    const params = useParams();
    const products = useProduct()
    let parametro = ""
    let parametroFecha = ""
    useEffect(()=>{parametro=params;},[])
      useEffect(() => {
        const fetchData = async () => {
          try {
            const url = `https://api-terrarent.ddns.net:3001/Reserva`;
            const settings = {
              method: 'GET',
              mode: 'cors'
            };
    
            const response = await fetch(url, settings);
            const data = await response.json();
    
    
            setReservas(data);
          } catch (error) {
            console.error('Error al obtener detalles del producto:', error);
            setError(error);
          }
        };
    
        fetchData();
        console.log(reservas);
      }, []);
    useEffect(() => {
        const filterData = async () => {
          const lengthProductos = products.productsData.length
          try {
            const productos = [];
            function filtrar() {
              const keywords = params.parametro.toLowerCase().split(" ");
          
              for (let i = 0; i < lengthProductos; i++) {
                  const nombreProdLowerCase = products.productsData[i].nombreProd.toLowerCase();
                  let encontrado = true;
                  for (let j = 0; j < keywords.length; j++) {
                      if (!nombreProdLowerCase.includes(keywords[j])) {
                          encontrado = false;
                          break;
                      }
                  }
                  if (encontrado) {
                      productos.push(products.productsData[i]);
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
    
        filterData();
        

      }, []);
    
      if (error) {
        return <div>Error al cargar los productos. Por favor, intente reiniciar la página.</div>;
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