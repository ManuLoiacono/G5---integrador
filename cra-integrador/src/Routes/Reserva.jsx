import { useEffect , useState} from "react"
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext"
import { useParams , useNavigate} from "react-router-dom"
import CalendarioReserva from "../components/CalendarioReserva"
import imgFlecha from '../img/flecha_blanca.png';

function Reserva () {
    const navigate = useNavigate();
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
    const [total, setTotal] = useState(null)

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
        const diferenciaMs =  fechaInicioMs - fechaFinMs;
      
        // Convertir la diferencia de milisegundos a días
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
      
        return dias;
      }
      //FUNCIONES--------------------------------------------------------------------------------------------
    useEffect(()=>{
        setDateRange(param.fechas)
        param = param.id.substring(1)
        console.log(param);
        for(let i = 0; i < productos.productsData.length; i++){
            if(param == productos.productsData[i].idProducto){
                setProduct(productos.productsData[i])
                console.log("se encontro producto : " + productos.productsData[i].idproducto);
            }
        }
    },[])

    useEffect(()=>{console.log(product)
        console.log(productos.productsData);},[product])
    useEffect(()=>{
        if (dateRange){
            console.log(dateRange); fechas =dateRange.split(",")
            console.log(fechas);
            setFechaIni(new Date(fechas[0]))
            setFechaFin(new Date(fechas[1]))}},[dateRange])

            useEffect(()=>{
                if (fechaIni && fechaFin){
                    console.log(fechaIni + fechaFin);
                    setFechaIniFormat(formatearFecha(fechaIni))
                    setFechaFinFormat(formatearFecha(fechaFin))}
            },[fechaFin])
            useEffect(()=>{if(fechaFin){setCantDias(diferenciaEnDias(fechaFin,fechaIni))}},[fechaFinFormat])
            useEffect(()=>{if(product&&cantDias){setTotal(cantDias*product.precioProd)}},[cantDias])
        return(
    <div className="reserva">
        <div id="detail-header">
            <h2 id="detail-header-name" className="detail-header-item">
                {product?product.nombreProd:"?"}
            </h2>
            <img src={imgFlecha} className="back" onClick={() => navigate(-1)} alt="Back" />
        </div>
        <div className="main-reserva">
            <section className="producto-reserva">
               {product ? <img src={product.imagenes[0].urlimg} alt="" /> : <p>img no encontrada</p>}
               <div className="producto-reserva-texto">
                <hr />
                <h4>Detalles del precio</h4>
                <p>${product ? product.precioProd : "?"} por {cantDias} {cantDias===1 ? "día" : "días"} </p> 
                <hr />
                <h4>Total: ${total}</h4>
               </div>

            </section>
            <section className="detalle-reserva">
                <h2>Confirmá y pagá </h2>
                <h4>{product?product.nombreProd:"?"}</h4>
                 <h4>Desde el {fechaIniFormat} al {fechaFinFormat}</h4>
                <p>Cambiar Fecha: <CalendarioReserva/></p>
                <h4>A nombre de: {user.user.nombreUsuario} {user.user.apellidoUsuario}</h4>
                <p>Email: {user.user.email}</p>
                <p>Tel: {user.user.numTelefono}</p>
       </section>
        </div>
        </div>
    )
}
export default Reserva