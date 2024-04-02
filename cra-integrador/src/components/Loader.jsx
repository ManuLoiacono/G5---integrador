import React, { useState, useEffect } from 'react';
import { hatch, tailChase } from 'ldrs'
import image from "../img/TERRA_RENT4.png"
tailChase.register()

const Loader = () => {
    const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
        <React.Fragment>
    {showLoader && (
        <div className='loader'>
            <l-tail-chase
            size="28"
            speed="3.5"
            color="white" 
            ></l-tail-chase>
            <p>Cargando</p>
            <img src={image} alt="" />
        </div>
        )}
        </React.Fragment>
  )
}

export default Loader