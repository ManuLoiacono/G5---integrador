import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import React from "react";
import Admin from "./components/Admin.jsx";

function App() {
  return ( 
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
