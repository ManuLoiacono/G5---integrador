import React, { useEffect, useState } from 'react'
import Categorias from '../components/Categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import MensajeResolucion from '../components/MensajeResolucion.jsx'
import { useLogin } from "../components/utils/LoginContext"
import { useProduct } from "../components/utils/ProductContext.jsx"


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
    const [categoriasDisponibles, setCategoriasDisponibles] = useState([])
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [Imagenes, setImagenes] = useState([]);
    const [error, setError] = useState(null);
    const [caracteristicasNuevas, setCaracteristicasNuevas] = useState(['']);
    const [caracteristicasDisponibles, setCaracteristicasDisponibles] = useState([]);
    const [caracteristicasElegidas, setCaracteristicasElegidas] = useState([]);


    const user = useLogin()
    const products = useProduct()
    const productos = products.productsData
   
    const resetForm = () => {
      setNombreProd('');
      setDescripcion('');
      setSelectedImages([]);
      setPrecio('');
      setCategoria('');
      setCaracteristicasNuevas(['']);
      setImagenes([]);
      // Reset other form fields as needed
    };
    const fetchObtenerCategorias = async () => {
        try {
          const url = `https://api-terrarent.ddns.net:3001/Categoria`;
          const settings = {
            method: 'GET',
            mode: 'cors'
          };
  
          const response = await fetch(url, settings);
          const data = await response.json();
  
          setCategoriasDisponibles(data);
        } catch (error) {
          console.error('Error al obtener las categorias disponibles:', error);
          setError(error);
        }
    };
    const fetchObtenerCaracteristicas = async () => {
        try {
          const url = `https://api-terrarent.ddns.net:3001/Caracteristica`;
          const settings = {
            method: 'GET',
            mode: 'cors'
          };

          const response = await fetch(url, settings);
          const data = await response.json();

          setCaracteristicasDisponibles(data);
        } catch (error) {
          console.error('Error al obtener las categorias disponibles:', error);
          setError(error);
        }
    }

    const handleInputChange = (index, value) => {
      const newInputValues = [...caracteristicasNuevas];
      newInputValues[index] = value;
      setCaracteristicasNuevas(newInputValues);
    };
    const handleAddInput = () => {
      setCaracteristicasNuevas([...caracteristicasNuevas, '']);
    };
    const handleRemoveInput = (index) => {
      const newInputValues = [...caracteristicasNuevas];
      newInputValues.splice(index, 1);
      setCaracteristicasNuevas(newInputValues);
    };

    const handleCaracteristicaChange = (caracteristica, isChecked) => {
      if (isChecked) {
        // Agregar la característica elegida al estado
        setCaracteristicasElegidas([...caracteristicasElegidas, caracteristica]);
      } else {
        // Remover la característica elegida del estado
        setCaracteristicasElegidas(caracteristicasElegidas.filter(item => item !== caracteristica));
      }
    };

    const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    const imagenes = [];

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const base64String = reader.result.split(",")[1];
            imagenes.push(base64String);
            //console.log(imagenes);
            resolve(imagenes);
          };
          reader.onerror = (error) => reject(error);
        });
      })
    ).then(() => {
      console.log("Imagenes convertidas a base64:", imagenes);
      if(imagenes.length !== 0){
        console.log("entro")
        setImagenes([...Imagenes, ...imagenes]);
      }
      console.log("Estado de imagenes actualizado:", imagenes.length);
      setSelectedImages([...selectedImages, ...files]);

    });
    };

    const handleDrop = (e) => {
      e.preventDefault();

      const files = e.dataTransfer.files;
      handleImageChange(files);
      console.log(e)
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
    
    function buscarProductoPorNombre(productos, nombre) {
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].nombreProd.toLowerCase() === nombre.toLowerCase()) {
              return true;
          }
      }
      return false;
  }

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
      } else if (buscarProductoPorNombre(productos, nombreProd)) {
        toastError('El nombre ya existe')}
      else {
        const fetchProductoNuevo = async (p) => {
          
          const url = `https://api-terrarent.ddns.net:3001/Producto`;
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
            toastSuccess("Se cargó el producto correctamente")
            return data;
          } catch (error) {
            console.error('Error al procesar la respuesta:', error);
            toastError('Ocurrió un error inesperado al procesar la respuesta del servidor.');
            return null;
          }
        };
        const fetchCargarCaracteristica = async (caracteristicasNuevas, prod) => {

          const url = `https://api-terrarent.ddns.net:3001/Caracteristica/crearCaracteristicaParaProducto/${prod.idProducto}`;
          console.log(url);
            const settings = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(caracteristicasNuevas)
            };
        
            try {
              const response = await fetch(url, settings);
          
              const data = await response.json();
              console.log(data);
              return data;
            } catch (error) {
              console.error('Error al procesar la respuesta:', error);
              toastError('Ocurrió un error inesperado al procesar la respuesta del servidor.');
              return null;
            }

        }
        const fetchCargarImagen = async (imagen) => {
          console.log(JSON.stringify(imagen.producto));
          const url = `https://api-terrarent.ddns.net:3001/imagen/uploadImageToS3`;
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
          
          // Estructura Producto nuevo
          const nuevoProducto = {
            nombreProd: nombreProd,
            descripcionProd: descripcion,
            precioProd: precio,
            categoria: {
              idCategoria: categoria
            },
          };
          
          // Caraga Producto nuevo
          const responseProducto = await fetchProductoNuevo(nuevoProducto);
                    
          
          if (responseProducto != null) {
            
            const idProducto = await responseProducto;
            
            // Estructura Imagenes nuevas
            const imagenCargar = {
              titulo: "Img",
              urlimg: "",
              imgPath: Imagenes,
              producto: {
                idProducto: idProducto.idProducto
              }
            };
            
            // Caraga Imagenes nuevas
            const responseImagen = await fetchCargarImagen(imagenCargar);

            console.log(JSON.stringify(caracteristicasNuevas));

            for(var i = 0; i < caracteristicasNuevas.length; i++) {
            
              // Estructura Caracteristicas nuevas
              const caracteristicasCargar = {
                descripCaracteristica: caracteristicasNuevas[i],
              };
              
              console.log(JSON.stringify(caracteristicasCargar));
              
              // Carga Caracteristicas nuevas 
              const responseCaracteristica = await fetchCargarCaracteristica(caracteristicasCargar, responseProducto);
            }

            
          
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
    
    };
  }

    useEffect(() => {
      fetchObtenerCategorias();
      fetchObtenerCaracteristicas();
      if (formSubmitted) {
        setFormSubmitted(false);
      }
    }, [formSubmitted, nombreProd, descripcion, precio, categoria]);
    if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
    if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){
    
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
                      {categoriasDisponibles.map((cat, index) => (
                    <option key={index} value={cat.idCategoria}>
                      {cat.nombreCategoria}
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

            <div className='inputs'>
              <label> Caracteristicas: </label>
              {caracteristicasDisponibles.length > 0 ? (
                <div className="caracteristicas-container">
                {caracteristicasDisponibles.map((caracteristica, index) => (
                  <label key={index} htmlFor={`caracteristica-${index}`} className="caracteristica-label">
                    <span>{caracteristica.descripCaracteristica}</span>
                    <input type="checkbox" className="checkbox-input"
                    onChange={(e) => handleCaracteristicaChange(caracteristica, e.target.checked)}/>
                  </label>
                ))}
              </div>
              ) : (
                <p>Aún no hay características disponibles.</p>
              )}

            </div>

            <div>
            <label> Agregue una caracteristica nueva </label>
            {caracteristicasNuevas.map((caracteristica, index) => (
              <div key={index}>
              <input
                value={caracteristica}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`Caracteristica ${index + 1}`}
              />
              <button type="button" className="delete-button" onClick={() => handleRemoveInput(index)} >X</button>
            </div>
            ))}
            
            <button type="button" onClick={handleAddInput}>Agregar otra caracteristica</button>
            
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
  } else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>
};

  export default RegistrarProd;
