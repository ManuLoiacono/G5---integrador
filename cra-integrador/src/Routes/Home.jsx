import React from "react";
import Buscador from "../components/Buscador";
import Categorias from "../components/Categorias";
import Header from "../components/Header";
import Recomendados from "../components/Recomendados";
import style from "../Styles/app.css";
//import 'react-calendar/dist/Calendar.css';
import Loader from '../components/Loader.jsx'


function Home() {
    

    return(
        <>
            <div className="home">
                {/* <Loader/> */}
                <Buscador/>
                <Categorias/>
                <Recomendados/>
            </div>
        </>
    )

    
}
export default Home;