import React, { useEffect, useState } from 'react'
import Categorias from '../components/Categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import MensajeResolucion from '../components/MensajeResolucion.jsx'

import { json } from 'react-router-dom';
import AWS from 'aws-sdk';
import { promisify } from "util"


const RegistrarProd = () => {
    const [productoAgregado, setProductoAgregado] = useState({});
    const [nombreProd, setNombreProd] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [Imagenes, setImagenes] = useState([]);
    //const [idP, setIdP] = useState([]);



    const resetForm = () => {
      setNombreProd('');
      setDescripcion('');
      setSelectedImages([]);
      setPrecio('');
      setCategoria('');
      // Reset other form fields as needed
    };


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
   

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const imagenes = new Array ();

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64String = reader.result.split(",")[1];
            imagenes.push(base64String);
            resolve(imagenes);
          };
          reader.onerror = (error) => reject(error);
        });
      })
    ).then(() => {
      console.log("Imagenes convertidas a base64:", imagenes);
      setImagenes(imagenes.length === 0 ? [] : imagenes);
      console.log("Estado de imagenes actualizado:", imagenes.length);

      setSelectedImages([...selectedImages, ...files]);

    });
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


    const handleSubmit = async (e) => {
      e.preventDefault();
      if (nombreProd.length === 0) {
        toastError('Ingrese un nombre');
      } else if (nombreProd.length < 3) {
        toastError('Nombre debe contener más de 3 caracteres');
      } else if (categoria === '0') {
        toastError('Seleccione una categoria');
      } else if (descripcion.length === 0) {
        toastError('Ingrese una descripción');
      } else if (descripcion.length < 10) {
        toastError('La descripción debe tener al menos 10 caracteres');
      } else if (selectedImages.length === 0) {
        toastError('Ingrese al menos una imágen');
      } 
      else {
        

        const fetchProductoNuevo = async (p) => {
          
          const url = `http://localhost:3001/Producto`;
          const settings = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(p)
          };
      
          try {
            const response = await fetch(url, settings);
        
            const data = await response.json();
            console.log(JSON.stringify(data));
            resetForm();
            return data;
          } catch (error) {
            console.error('Error al procesar la respuesta:', error);
            toastError('Ocurrió un error inesperado al procesar la respuesta del servidor.');
            return null;
          }
        };


        const fetchCargarImagen = async (imagen) => {
          console.log(JSON.stringify(imagen.producto));
          const url = `http://localhost:3001/imagen/uploadImageToS3`;
          const settings = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(imagen)
          };
          await fetch(url, settings)
            .then((response) => response.json())
            .then((data) => {
              console.log("Se cargo la imagen")
              
            })
            .catch((error) => {
              console.error('Error al cargar');
            })
        } 
        
        
        try {
          const nuevoProducto = {
            nombreProd: nombreProd,
            descripcionProd: descripcion,
            precioProd: precio,
            categoria: {
              idCategoria: categoria
            }
          };
      
          const responseProducto = await fetchProductoNuevo(nuevoProducto);
          console.log(responseProducto);
          if (responseProducto != null) {
            const idProducto = await responseProducto;
            const imagenCargar = {
              titulo: "Img",
              urlimg: "",
              imgPath: Imagenes,
              producto: {
                idProducto: idProducto.idProducto
              }
            };
    
            const responseImagen = await fetchCargarImagen(imagenCargar);
          
          } else {
            console.error("Error al cargar el producto");
            toastError('Error al cargar el producto: ' + nombreProd);
          }
        } catch (error) {
          console.error('Error general:', error);
          toastError('Ocurrió un error inesperado. Consulta la consola para obtener más detalles.');
        } finally {
          setFormSubmitted(true);
        }
    
      }
    };

    useEffect(() => {
      if (formSubmitted) {
        setFormSubmitted(false);
      }
    }, [formSubmitted, nombreProd, descripcion, precio, categoria]);
    return (
      <>
        <div className='registrar'>
            <h2>Registrá tus productos</h2>
          <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label> Nombre: </label>
                <input className='input-nombre'
              type="text"
              value={nombreProd}
              placeholder="Ingrese nombre"
              onChange={(e) => {
                setNombreProd(e.target.value);
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
                setDescripcion(e.target.value);
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
              <input type="file" onChange={handleImageChange} accept="image/*" style={{ display: 'none' }} />
            </label>
            <button>Agregar producto</button>
          </form>
          </div>
        </div>
       <MensajeResolucion/>
      </>
    );
  };

  export default RegistrarProd;
