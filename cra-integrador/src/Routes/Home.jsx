import React from "react";
import Buscador from "../components/Buscador";
import Categorias from "../components/Categorias";
import Header from "../components/Header";
import Recomendados from "../components/Recomendados";
import style from "../Styles/app.css";

function Home() {
    

    return(
        <>
            <div className="home">
                <Buscador/>
                <Categorias/>
                <Recomendados/>
            </div>
        </>
    )

    
}
export default Home;