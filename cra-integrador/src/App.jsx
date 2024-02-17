import Header from "./components/Header.jsx";
import style from "./app.css";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from './Routes/Home';

function App() {
  return ( 
    <>
  <BrowserRouter>
  <Header/> {/*Todo contenido considerado main (debajo del header y arriba del footer) debe tener un margin-top de 95px para que no quede oculto detras del header)*/}
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
