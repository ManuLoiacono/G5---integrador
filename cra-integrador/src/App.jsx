import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import React from "react";

function App() {
  return ( 
    <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
