import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../components/Card";


function ProductosBuscados(){
    const [productosFiltrados, setProductosFiltrados] = useState([])
    const [error, setError] = useState(null);
    const params = useParams();
    useEffect(()=>{console.log(params);},[])



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
            let dataLenght = data.lenght
    
            const productos = [];
            function filtrar(){
               for(let i = 0; i>dataLenght;i++){
                if (data[i].nombreProd.includes(params.parametro)) {
                    productos.push(data[i])
                } else {continue}
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
        <div>
            <h2>Resultados para "{params.parametro}"</h2>
            <section>
            {/*productosFiltrados.map((producto)=>(
                <Card key={producto.idProducto} detalle={producto} />
                
            ))*/}
            </section>
        </div>
    )
}

export default ProductosBuscados