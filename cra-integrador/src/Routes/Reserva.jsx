import { useEffect , useState} from "react"
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext"
import { useParams } from "react-router-dom"

function Reserva () {
    const user = useLogin()
    const productos = useProduct()
    let param = useParams()
    const [product,setProduct] = useState(null)

    useEffect(()=>{
        console.log(productos.productsData);
        param = param.id.substring(1)
        for(let i = 0; i < productos.productsData.length; i++){
            console.log(param);
            if(param.id === productos.productsData[i].id){
                setProduct(productos.productsData[i])
            }
        }
    },[])
    useEffect(()=>{console.log(product)
        console.log(productos.productsData);},[product])
    return(
        <div>
            <h2>Detalle de Reserva para producto n°{param.id}</h2>


        </div>
    )
}
export default Reserva