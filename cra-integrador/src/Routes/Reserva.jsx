import { useEffect } from "react"
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext"

function Reserva () {
    const user = useLogin()
    const productos = useProduct()

    useEffect(()=>{},[])
    return(
        <>
        </>
    )
}
export default Reserva