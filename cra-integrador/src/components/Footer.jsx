import React from 'react'
import image_whastapp from '../img/whatsapp.png'
import image_phone from '../img/phone.png'
import image_mail from '../img/mail.png'
import image_instagram from '../img/instagram.png'

const footer = () => {
  return (
    <div className='footer'>
        <h3> ©2024 TerraRent</h3>
        <div className='footer-Items'>
            <img src={image_whastapp} alt="" />
            <img src={image_mail} alt="" />
            <img src={image_instagram} alt="" />
            <img src={image_phone} alt="" />
        </div>
    </div>
  )
}

export default footer