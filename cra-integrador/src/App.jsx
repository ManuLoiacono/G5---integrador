import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import React, { useEffect, useState } from "react";
import RegistrarProd from "./Routes/RegistrarProd.jsx";
import Galery from './Routes/Galery.jsx';
import Footer from "./components/Footer.jsx";
import RegistrarUsuario from './Routes/RegistrarUsuario.jsx'
import InicioSesion from './Routes/InicioSesion.jsx'
import PanelDeControl from './Routes/PanelDeControl.jsx'
import { ToastContainer, toast } from 'react-toastify';
import ListadoDeProd from './Routes/ListadoDeProd.jsx';
import ListadoUsers from './Routes/ListadoUsers.jsx';
import {LoginProvider} from './components/utils/LoginContext.jsx'
import ProductosBuscados from "./Routes/ProductosBuscados.jsx";
import CrearCategoria from "./Routes/CrearCategoria.jsx";
import { ProductProvider } from "./components/utils/ProductContext.jsx";
import Reserva from "./Routes/Reserva.jsx";

function App() {
  return ( 
    <>
    <ProductProvider>
    <LoginProvider>
    <ToastContainer/>    
  <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='panel-de-control' element={<PanelDeControl/>}/>
    <Route path='registrar' element={<RegistrarProd/>}/>
    <Route path='productos/:id' element={<Detail />}/>
    <Route path='productos/:id/galeria' element={<Galery />} />
    <Route path='registro-usuario' element={<RegistrarUsuario/>}/>
    <Route path='inicio-sesion' element={<InicioSesion/>}/>
    <Route path='listado-productos' element={<ListadoDeProd/>}/>
    <Route path='listado-usuarios' element={<ListadoUsers/>}/>
    <Route path='panel-de-control' element={<PanelDeControl/>}/>
    <Route path='busqueda/:parametro/:fechas' element={<ProductosBuscados/>}/>
    <Route path='crearCategoria' element={<CrearCategoria/>}/>
    <Route path='reserva/:id' element={<Reserva/>}/>
  </Routes>
    <Footer/>
  </Router>
  </LoginProvider >
  </ProductProvider>
  </>
  );
}

export default App;
