import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import React, { useEffect, useState } from "react";
import Admin from "./components/Admin.jsx";
import RegistrarProd from "./Routes/RegistrarProd.jsx";
import Galery from './Routes/Galery.jsx';
import Footer from "./components/Footer.jsx";
import RegistrarUsuario from './Routes/RegistrarUsuario.jsx'
import InicioSesion from './Routes/InicioSesion.jsx'
import ListaProductos from "./Routes/ListaProductos.jsx";
import { ToastContainer, toast } from 'react-toastify';
import ListadoDeProd from './Routes/ListadoDeProd.jsx';

function App() {
  const [estaLogueado,setEstaLogueado] = useState(false)
  const [esAdmin,setEsAdmin] = useState(false)
function x(){
  setEstaLogueado(true)
}
useEffect(()=>{x()},[])
function cerrarSesion(){

  setEstaLogueado(false)
  setEsAdmin(false)
}


  return ( 
    <>
    <ToastContainer/>    
  <Router>
  <Header estaLogueado={estaLogueado} esAdmin={esAdmin} cierreDeSesion = {cerrarSesion}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='admin' element={<Admin/>}/>
    <Route path='registrar' element={<RegistrarProd/>}/>
    <Route path='productos/:id' element={<Detail />}/>
    <Route path='productos/:id/galeria' element={<Galery />} />
    <Route path='registro-usuario' element={<RegistrarUsuario/>}/>
    <Route path='inicio-sesion' element={<InicioSesion/>}/>
    <Route path='listado-productos' element={<ListadoDeProd/>}/>
  </Routes>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
