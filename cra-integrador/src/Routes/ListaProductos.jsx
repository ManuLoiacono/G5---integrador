    import { useState , useEffect} from "react";


function ListaProductos(){
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
  
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
  
          const longProductos = data.length;
          setProductos(data);
        } catch (error) {
          console.error('Error al obtener detalles del producto:', error);
          setError(error);
        }
      };
  
     // fetchData();
    }, []);
    if (error) {
        return <div>Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.</div>;
      }
      let productoss = [
        {
          id:3,
          nombreProd:"reasd  sadlaslms cass"
        },
        {
          id:55,
          nombreProd:"rehhhjkkasd  sasdasdsas cass"
        },
        {
          id:98,
          nombreProd:"reasd  sadlasjrtjmfh  lms cass"
        },
        {
          id:1,
          nombreProd:"reascass"
        },
        {
          id:66,
          nombreProd:"reasd  sadlaslfsafams cass"
        },
      ]
      
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th> <th>Nombre</th> <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productoss.map((producto)=>(
                    <tr>
                        <td>{producto.id}</td>
                        <td>{producto.nombreProd}</td>
                        <td>eliminar</td>
                    </tr>
                    
                ))}

            </tbody>
        </table>
    )
}
export default ListaProductos