import { useEffect , useState} from "react"
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext"
import { useParams } from "react-router-dom"
import CalendarioReserva from "../components/CalendarioReserva"

function Reserva () {
    const user = useLogin()
    const productos = useProduct()
    let param = useParams()
    const [product,setProduct] = useState(null)
    const [dateRange, setDateRange] = useState(null)
    const [cantDias,setCantDias] =useState(null)
    const [fechaIni, setFechaIni] =useState(null)
    const [fechaFin, setFechaFin] = useState(null)
    const [fechaIniFormat, setFechaIniFormat] = useState(null)
    const [fechaFinFormat, setFechaFinFormat] = useState(null)

    let fechas;

    //FUNCIONES-----------------------------------------------------------------------------------------------
    function formatearFecha(fecha) {
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Sumamos 1 porque los meses empiezan desde 0
        const año = fecha.getFullYear();
      
        return `${dia}/${mes}/${año}`;
      }
    function diferenciaEnDias(fechaInicio, fechaFin) {
        // Convertir las fechas a milisegundos
        const fechaInicioMs = fechaInicio.getTime();
        const fechaFinMs = fechaFin.getTime();
      
        // Calcular la diferencia en milisegundos
        const diferenciaMs = fechaFinMs - fechaInicioMs;
      
        // Convertir la diferencia de milisegundos a días
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
      
        return dias;
      }
      //FUNCIONES--------------------------------------------------------------------------------------------
    useEffect(()=>{
        setDateRange(param.fechas)
        param = param.id.substring(1)
        for(let i = 0; i < productos.productsData.length; i++){
            if(param.id === productos.productsData[i].id){
                setProduct(productos.productsData[i])
            }
        }
    },[])
    
    useEffect(()=>{console.log(product)
        console.log(productos.productsData);},[product])
    useEffect(()=>{console.log(dateRange); fechas =dateRange.split(",")
        console.log(fechas);
        fechaIni = new Date(fechas[0])
        fechaFin = new Date(fechas[1])},[dateRange])
    return(
        <div>
       <h2>Confirmación de Reserva: </h2>
       <h4>carpa x</h4>
       <h4>Desde el {fechaIniFormat} al {fechaFinFormat} </h4>
       <p>Cambiar Fecha: <CalendarioReserva/></p>
       <h4>A nombre de:</h4>
       <p></p>


        </div>
    )
}
export default Reserva