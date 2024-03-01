import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import React from "react";
import Admin from "./components/Admin.jsx";
import RegistrarProd from "./Routes/RegistrarProd.jsx";
import Galery from './Routes/Galery.jsx';
import RegistrarUsuario from './Routes/RegistrarUsuario.jsx'
import InicioSesion from './Routes/InicioSesion.jsx'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return ( 
    <>
    <ToastContainer/>    
  <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='admin' element={<Admin/>}/>
    <Route path='registrar' element={<RegistrarProd/>}/>
    <Route path='productos/:id' element={<Detail />}/>
    <Route path='productos/:id/galeria' element={<Galery />} />
    <Route path='registro-usuario' element={<RegistrarUsuario/>}/>
    <Route path='inicio-sesion' element={<InicioSesion/>}/>
  </Routes>
  </Router>
  </>
  );
}

export default App;
