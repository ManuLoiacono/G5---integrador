import React, { useEffect, useState } from 'react'
import Categorias from '../components/Categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import image from '../img/TERRA_RENT_resol.png'
import { json } from 'react-router-dom';


const RegistrarProd = () => {
    const [productoAgregado, setProductoAgregado] = useState({});
    const [nombreProd, setNombreProd] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const resetForm = () => {
      setNombreProd('');
      setDescripcion('');
      setSelectedImages([]);
      setPrecio('');
      setCategoria([]);
      // Reset other form fields as needed
    };


    let categorias=[
      { id : 5,
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
      if (nombreProd.length === 0) {
        toastError('Ingrese un nombre')}
      else if (nombreProd.length < 3) {
        toastError('Nombre debe contener más de 3 caracteres')
    } else if (categorias === '0') {
      toastError('Seleccione una categoria')
    } else if (descripcion.length === 0) {
      toastError('Ingrese una descripción')
    } else if (descripcion.length < 10) {
      toastError('La descripción debe tener al menos 10 caracteres') 
     } else if(selectedImages.length === 0){
        toastError('Ingrese al menos una imágen')
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
        resetForm();
      })
      .catch((error) => {
        console.error('Error al cargar detalles del producto' + nombreProd, error);
        toastError('Error al cargar detalles del producto: ' + nombreProd);
        
      });
      setFormSubmitted(true);
    }}   
    


const argegarProducto = (nombre, descripcion, precio, categoria) => {
  if (nombre.length > 3 && descripcion.length > 10 && selectedImages.length > 0) {
    setProductoAgregado({
      nombreProd: nombre,
      descripciónProd: descripcion,
      //imagenesProd: selectedImages,
      precioProd: precio,
      categoria: {
        idCategoria: categoria
      }
    });
  }
};
    
    useEffect(() => {
      if (formSubmitted) {
        argegarProducto(nombreProd, descripcion, precio, categoria);
        setFormSubmitted(false);
        console.log(JSON.stringify(productoAgregado));
      }
    }, [formSubmitted, nombreProd, descripcion, precio, categoria]);
    return (
      <>
        <div className='registrar'>
            <h2>Registrá tus productos</h2>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label> Nombre: </label>
                <input className='input-nombre'
              type="text"
              value={nombreProd}
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
                   <option value='0'>Selecciona una categoria</option>
            {categorias.map((cat, index) => (
              <option key={index} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
            </select>
            </div>
            <div className='inputs'>
                <label>Precio:</label>
                <input className='input-precio'
              type="number"
              value={precio}
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
              value={descripcion}
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
