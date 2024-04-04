import { useEffect , useState} from "react"
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext"
import { useParams , useNavigate} from "react-router-dom"
import CalendarioReserva from "../components/CalendarioReserva"
import imgFlecha from '../img/flecha_blanca.png';
import ExitoReserva from "../components/ExitoReserva"
import { toastError, toastSuccess } from "../components/utils/Notificaciones"

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
    const [newDateRange, setNewDateRange] = useState([null,null])
    const [emergenteClass, setEmergenteClass] = useState("emergente-oculto")

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
      function  handleDateChange(range){
        setNewDateRange(range);
      }
      function handleSubmit(){
        let Res = {
            producto:{idProducto:product.idProducto},
            usuario:{idUsuario:user.user.idUsuario},
            fechaInicio:`${fechaIni.getTime()}`,
            fechaFin:`${fechaFin.getTime()}`,
            precioTotal:`${total}`
        }
        console.log(JSON.stringify(Res));
        const url = "https://api-terrarent.ddns.net:3001/Reserva"
        const settings = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Res)
          };
          fetch(url, settings)
          .then((response) => {
            if (response.ok) {
                toastSuccess("Reserva confirmada con éxito.")
                setEmergenteClass("emergente-mostrar")
            } 
              else {
            toastError('Hubo un error al confirmar la reserva. Intentelo más tarde');
            }
          })
          .catch((error) => {
            /*console.error('Error al cargar el usuario' + newUser.nombreUsuario, error);
            toastError('El usuario con email ' + newUser.email + ' ya está registrado');*/
            toastError('Hubo un error al confirmar la reserva. Intentelo más tarde')
          })
      }
      //FUNCIONES--------------------------------------------------------------------------------------------
      useEffect(()=>{console.log(newDateRange)
                    if(newDateRange!=null){
                    setFechaIni(newDateRange[0])
                    setFechaFin(newDateRange[1])}},[newDateRange])
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
   /* useEffect(()=>{ if(newDateRange){
        setFechaFinFormat(formatearFecha(newDateRange[0]))
        setFechaFinFormat(formatearFecha(newDateRange[1]))
    }},[newDateRange])*/
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
                <div>
               {product ? <img src={product.imagenes[0].urlimg} alt="" /> : <p>img no encontrada</p>}
               </div>
               <div className="producto-reserva-texto">
               {product ? <h4>{product.nombreProd}</h4> : "?"}
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
                <p>Cambiar Fecha: <CalendarioReserva onDateChange={handleDateChange}/></p>
                <h4>A nombre de: {user.user.nombreUsuario} {user.user.apellidoUsuario}</h4>
                <p>Email: {user.user.email}</p>
                <p>Tel: {user.user.numTelefono}</p>
                <button className="rent-button" onClick={handleSubmit}>Confirmar</button>
       </section>
        </div>
        <div className={emergenteClass}>
        <section className="contenido-reserva">
            <h2>¡Hemos registrado tu reserva con éxito!</h2>
            <p>Producto: {product?product.nombreProd:"?"}</p>
            <p>Fecha: Del {fechaIniFormat} al {fechaFinFormat}</p>
            <p>En breves recibirás un email a la dirección "{user.user.email}" con los detales de tu reserva.</p>
            <p>¡Muchas gracias!</p>
            <button className="rent-button" onClick={()=>{window.location.replace(`${window.location.origin}`)}}>Volver</button>
        </section>
    </div>
        </div>
    )
}
export default Reserva