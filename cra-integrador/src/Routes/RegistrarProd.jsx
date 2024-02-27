import React, { useEffect, useState } from 'react'
import Categorias from '../components/Categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import image from '../img/TERRA_RENT_resol.png'


const RegistrarProd = () => {
    const [productoAgregado, setProductoAgregado] = useState({});
    const [nombreProd, setNombreProd] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState([]);
    
    let categorias=[
      { id : 1,
     nombre:"Carpas"
    },
      { id : 2,
     nombre:"Kits"
    },
    { id : 3,
     nombre:"Vehículos",
    },
    { id : 4,
     nombre:"Senderismo",
    }]
   
    const handleImageChange = (files) => {
      if (files.length + selectedImages.length <= 10) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        for (const file of files) {
          if (!allowedTypes.includes(file.type)) {
            toastError('Formato de archivo no válido. Por favor, seleccione imágenes (JPEG, PNG, o GIF).');
            return;
          }
        }
      setSelectedImages([...selectedImages, ...files]);
      }else {
        toastError('Se permiten hasta 10 imágenes por registro.');
        }
    };

    const handleDrop = (e) => {
      e.preventDefault();

      const files = e.dataTransfer.files;
      handleImageChange(files);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
    };
   
    const handleImageRemove = (indexToRemove) => {
      const updatedImages = selectedImages.filter((image, index) => index !== indexToRemove);
      setSelectedImages(updatedImages);
      
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(selectedImages.length === 0){
        toastError('Ingrese al menos una imágen')
    } else if (nombreProd.length < 3) {
      toastError('Nombre debe contener más de 3 caracteres') 
     } else if (descripcion.length < 10) {
        toastError('La descripción debe tener al menos 10 caracteres') 
    } else{
      window.scrollTo(0, 0);
      const url = `http://localhost:3001/Producto`
      const settings = {
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productoAgregado)
      }
      fetch(url,settings)
      .then((response) => response.json())
      .then((data) => {
        toastSuccess('Se cargó el producto ' + nombreProd +' correctamente')
      })
      .catch((error) => {
        console.error('Error al cargar detalles del producto' + nombreProd, error);
        toastError('Error al cargar detalles del producto: ' + nombreProd)
      });
    }}   
    
console.log(error);

     function argegarProducto(){

      if (nombreProd.length > 3 && descripcion.length > 10 && selectedImages.length > 0) {
      setProductoAgregado({
        nombre: nombreProd,
        descripción: descripcion,
        imagenesProd: selectedImages,
        precio: precio,
        categoria: categoria
      })}
      
    }
    console.log(productoAgregado);
    

    
    return (
      <>
        <div className='registrar'>
            <h2>Registrá tus productos</h2>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label> Nombre: </label>
                <input className='input-nombre'
              type="text"
              placeholder="Ingrese nombre"
              onChange={(e) => {
                setNombreProd(e.target.value.trim());
                }}
            />
            </div>
                <div className='inputs'>
                <label> Categoría: </label>
                <select
                className='input-cat'
                value={categoria}
                onChange={(e) => {
                  setCategoria(e.target.value);
                  }}>
                   <option value=''>Selecciona una categoria</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria.nombre}>
                {categoria.nombre}
              </option>
            ))}
            </select>
            </div>
            <div className='inputs'>
                <label>Precio:</label>
                <input className='input-precio'
              type="number"
              placeholder="Ingrese un precio"
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
            />
            </div>
            <div className='inputs'>
                <label> Descripción: </label>
                <input className='input-descripcion'
              type="text"
              placeholder="Ingrese descripción"
              onChange={(e) => {
                setDescripcion(e.target.value.trim());
                }}
            />
            </div>
            <label className='label-drop'>
              Arrastre hasta 10 imágenes para el producto
              <div className='drop'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                Arrastre y suelte imágenes aquí o haga clic para seleccionar.
                <div className='contentedor-img-cargada'>
                  {selectedImages.map((image, index) => (
                    <div key={index} className="image-container" onClick={() => handleImageRemove(index)}>
                      <img src={URL.createObjectURL(image)} alt={`Imagen ${index + 1}`} />
                      <span className="remove-icon" onClick={() => handleImageRemove(index)}>X</span>
                    </div>
                  ))}
                </div>  
              </div>
              <input type="file" onChange={(e) => handleImageChange(e.target.files)} accept="image/*" style={{ display: 'none' }} />
            </label>

            <button onClick={argegarProducto}>Agregar producto</button>
          </form>
        </div>
        <div className='mensaje-resolucion'>
            <img src={image} alt="" />
            <h2>Acceder desde un dispositivo compatible.</h2>
        </div>
      </>
    );
  };

  export default RegistrarProd;
