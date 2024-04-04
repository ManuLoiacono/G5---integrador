import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Card from "../components/Card";
import imgFlecha from '../img/flecha_blanca.png';
import { useProduct } from "../components/utils/ProductContext";
import Buscador from "../components/Buscador";
import Categorias from "../components/Categorias";
import Recomendados from "../components/Recomendados";



function ProductosBuscados() {
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [error, setError] = useState(null);
    const [reservas, setReservas] = useState([]);
    const [fechaIni,setFechaIni] = useState(null);
    const [fechaFin,setFechaFin] = useState(null);
    const [fechaIniFormat,setFechaIniFormat] = useState(null);
    const [fechaFinFormat,setFechaFinFormat] = useState(null);
    const [hayFechas, setHayFechas] = useState(false)
    const [reservasFiltradas, setReservasFiltradas]=useState([])
    const [productosFiltradosPorFecha,setProductosFiltradosPorFecha]=useState([])
    const navigate = useNavigate();
    const params = useParams();
    const products = useProduct();
    let fechas;

    const obtenerProductosSinReservas = () => {
        let productosSinReservas=[];
        let productosLength = productosFiltrados.length
        let reservasLength = reservasFiltradas.length
        console.log(productosLength);
        console.log(reservasLength);
        console.log(reservasFiltradas);
        for(let i = 0;i<productosLength;i++){
            let noEncontrado = true
            for(let j = 0;j<reservasLength;j++){
                if(reservasFiltradas[j].producto!==null){
                if(productosFiltrados[i].idProducto===reservasFiltradas[j].producto.idProducto){
                    noEncontrado=false;
                    break
                }}
            }
        if(noEncontrado){productosSinReservas.push(productosFiltrados[i])}
        }
        console.log(productosSinReservas);
        return productosSinReservas;}
    
    function formatearFecha(fecha) {if (fechaIni&&fechaFin){
        const dia = String(fecha.getDate()).padStart(2, '0');
        const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Sumamos 1 porque los meses empiezan desde 0
        const año = fecha.getFullYear();
      
        return `${dia}/${mes}/${año}`;} else{ return "no hay fechas"}
      }

    useEffect(() => {
        if (params.fechas!==","){setHayFechas(true);}
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
    }, []);
    useEffect(()=>{
        if(reservas&&hayFechas){
            console.log(reservas);
            const reservasCoincidentes = [];
            reservas.forEach(reserva => {
              if (
                (reserva.fechaInicio >= fechaIni && reserva.fechaInicio <= fechaFin) ||
                (reserva.fechaFin >= fechaIni && reserva.fechaFin <= fechaFin) ||
                (reserva.fechaInicio <= fechaIni && reserva.fechaFin >= fechaFin)
              ) {
                reservasCoincidentes.push(reserva);
              }
            });
            setReservasFiltradas(reservasCoincidentes)
        }
    },[reservas])
    useEffect(()=>{
        if (hayFechas){
            fechas =params.fechas.split(",")
            console.log(fechas);
            setFechaIni(new Date(fechas[0]))
            setFechaFin(new Date(fechas[1]))}},[hayFechas])
    useEffect(()=>{
        if (hayFechas){
            setFechaIniFormat(formatearFecha(fechaIni))
            setFechaFinFormat(formatearFecha(fechaFin))}
    },[fechaFin])
    useEffect(() => {
        const filterData = async () => {
            const lengthProductos = products.productsData.length;
            try {
                const productos = [];
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

                setProductosFiltrados(productos);
            } catch (error) {
                console.error('Error al filtrar los productos:', error);
                setError(error);
            }
        };

        filterData();
    }, [params.parametro, products.productsData]);

    useEffect(() => {
        // Guardar parámetro de búsqueda en localStorage
        localStorage.setItem('searchParam', params.parametro);
    }, [params.parametro]);

    useEffect(() => {
        // Obtener parámetro de búsqueda de localStorage al cargar el componente
        const storedParam = localStorage.getItem('searchParam');
        if (storedParam) {
            params.parametro = storedParam;
        }
    }, []);
    useEffect(()=>{ 
        if (reservasFiltradas&&productosFiltrados) {
            
        }
        setProductosFiltradosPorFecha(obtenerProductosSinReservas())

        },[reservasFiltradas])
        useEffect(()=>{console.log(productosFiltradosPorFecha);},[productosFiltradosPorFecha])

    if (error) {
        return <div>Error al cargar los productos. Por favor, intente reiniciar la página.</div>;
    }

    return (
        <div>
            <div className="contenedor-buscador-cat-rec">
                <Categorias />
                <Recomendados />
            </div>
            <div className="listado-productos">
                <div id="detail-header">
                    <h2 id="detail-header-name" className="detail-header-item">
                        Resultados para "{params.parametro}" {hayFechas?" desde el "+ fechaIniFormat+ " al "+ fechaFinFormat : ""}:
                    </h2>
                    <img src={imgFlecha} className="back" onClick={() => navigate(-1)} alt="Back" />
                </div>
                <section className="listado-productos-buscados">
                    {hayFechas?productosFiltradosPorFecha.map((producto) => (
                        <Card key={producto.idProducto} detalle={producto} />
                    )):productosFiltrados.map((producto)=>(<Card key={producto.idProducto} detalle={producto}/>))}
                </section>
            </div>
        </div>
    );
}

export default ProductosBuscados;
