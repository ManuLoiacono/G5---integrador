import React, { useState } from 'react';
import imgFlecha from '../img/flecha_blanca.png';

const PoliticasDevoluciones = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [claseContenido, setClaseContenido] = useState("");

  const toggleContenido = () => {
    setMostrarContenido(!mostrarContenido);
    
  };

  return (
    <div >
    <div className={`titulo`}>
      <p>Políticas y devoluciones</p>
      <img onClick={toggleContenido} src={imgFlecha} className={mostrarContenido ? "flecha-arriba" : "flecha-abajo"} alt="" />
    </div>
      {mostrarContenido && (
        <div className="contenido-politicas">
          <ul>
            <p>Políticas generales:</p>
            <li>El cliente debe leer y aceptar todas las políticas y condiciones antes de realizar una reserva o alquiler en Terrarent.</li>
            <li>Las tarifas de alquiler están sujetas a cambios sin previo aviso.</li>
            <li>Los precios pueden variar según la temporada y la disponibilidad del producto.</li>
          </ul>
          <ul>
            <p>Políticas de Devolución del Producto:</p>
            <li>El cliente es responsable de devolver los productos de alquiler en la fecha y hora acordadas durante la reserva.</li>
            <li>Los productos deben ser devueltos en las mismas condiciones en las que fueron entregados. Se aplicarán cargos adicionales por daños o pérdida.</li>
            <li>Se proporcionará un período de gracia de 30 minutos para la devolución de los productos. Después de este tiempo, se aplicarán cargos adicionales.</li>
          </ul>
          <ul>
            <p>Políticas de Cancelación:</p>
            <li>Las cancelaciones deben realizarse con al menos 48 horas de anticipación para recibir un reembolso completo.</li>
            <li>Se aplicará un cargo por cancelación del 50% para cancelaciones realizadas dentro de las 48 horas previas a la fecha de inicio del alquiler.</li>
            <li>Las cancelaciones realizadas dentro de las 24 horas previas al inicio del alquiler no serán elegibles para reembolso.</li>
          </ul>
          <ul>
            <p>Políticas de Reserva:</p>
            <li>Las reservas deben realizarse con al menos 24 horas de anticipación para garantizar la disponibilidad del producto.</li>
            <li>Las reservas están sujetas a disponibilidad y pueden requerir un depósito anticipado para confirmar la reserva.</li>
            <li>Terrarent se reserva el derecho de cancelar o modificar una reserva en caso de circunstancias imprevistas o situaciones fuera de nuestro control.</li>
          </ul>
        </div>
      )}
    </div>
    
  );
};

export default PoliticasDevoluciones;
