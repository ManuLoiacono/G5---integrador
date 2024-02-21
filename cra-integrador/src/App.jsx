import Header from "./components/Header.jsx";
import style from "./Styles/app.css";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import React from "react";
import Admin from "./components/Admin.jsx";

function App() {
  return ( 
    <>
  <Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/productos/:id' element={<Detail/>}/>
  </Routes>
  </Router>
  </>
  );
}

export default App;
