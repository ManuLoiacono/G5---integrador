import React from "react";
import Buscador from "../components/Buscador";
import Categorias from "../components/Categorias";
import Header from "../components/Header";
import Recomendaciones from "../components/Recomendaciones";
import style from "../Styles/app.css";

function Home() {
    

    return(
        <>
            <div className="home">
                <Buscador/>
                <Categorias/>
                <Recomendaciones/>
            </div>
        </>
    )

    
}
export default Home;