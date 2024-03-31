import React, { useEffect, useState } from 'react'
import { useLogin } from "../components/utils/LoginContext"
import { toastError, toastSuccess } from '../components/utils/Notificaciones'



const CrearCategoria = () => {
    const [nombreCategoria, setNombreCategoria] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [Imagenes, setImagenes] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [caracteristicas, setCaracteristicas] = useState(['']);
    const user = useLogin();

    const resetForm = () => {
      setNombreCategoria('');
      setSelectedImages([]);
      // Reset other form fields as needed
    };

    const handleInputChange = (index, value) => {
      const newInputValues = [...caracteristicas];
      newInputValues[index] = value;
      setCaracteristicas(newInputValues);
    };

    const handleAddInput = () => {
      setCaracteristicas([...caracteristicas, '']);
    };

    const handleRemoveInput = (index) => {
      const newInputValues = [...caracteristicas];
      newInputValues.splice(index, 1);
      setCaracteristicas(newInputValues);
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
                console.log(imagenes);
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
        if (nombreCategoria.length === 0) {
          toastError('Ingrese un nombre');
        } else if (nombreCategoria.length < 3) {
          toastError('Nombre debe contener más de 3 caracteres');
        } else if (selectedImages.length === 0) {
          toastError('Ingrese al menos una imágen');
        } else if (selectedImages.length > 1) {
          toastError('La categoria puede tener solo una imagen');
        }
        else {
          const fetchCategoriaNueva = async (p) => {
            
            const url = `https://api-terrarent.ddns.net:3001/Categoria`;
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
              toastSuccess("Se cargó la categoria correctamente") 
              return data;
            } catch (error) {
              console.error('Error al procesar la respuesta:', error);
              toastError('Ocurrió un error inesperado al procesar la respuesta del servidor.');
              return null;
            }
          };

          console.log(Imagenes);

        const fetchCargarImagen = async (imagen) => {
          console.log(JSON.stringify(imagen.categoria));
          const url = `https://api-terrarent.ddns.net:3001/imagenCategoria/uploadCategoryToS3`;
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

        const fetchCargarCaracteristica = async (caracteristicas) => {



        }
        
        
        try {
          
          const nuevaCategoria = {
            nombreCategoria: nombreCategoria,
          };
      
          const responseCategoria = await fetchCategoriaNueva(nuevaCategoria);
          
          console.log(responseCategoria);
          
          if (responseCategoria != null) {
            
            const idCategoria = await responseCategoria;
            
            const imagenCargar = {
              titulo: "ImgCat",
              urlimg: "",
              imgPath: Imagenes,
              categoria: {
                idCategoria: idCategoria.idCategoria
              }
            };

            const caracteristicasCargar = {
              descripcionCaracteristica: caracteristicas
            };
            
            //console.log(JSON.stringify(imagenCargar));
    
            const responseImagen = await fetchCargarImagen(imagenCargar);

            const responseCaracteristica = await fetchCargarCaracteristica(caracteristicasCargar);
          
          } else {
            console.error("Error al cargar la categoria");
            toastError('Error al cargar la categoria: ' + nombreCategoria);
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
    }, [formSubmitted, nombreCategoria]);
    if(user.user===null){return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>}
    if(user.user.userRol=="ADMIN"||user.user.userRol=="SUPERADMIN"){
      
    return (
      <>
        <div className='registrar'>
            <h2>Crea una Categoria</h2>
          <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label> Nombre de la Categoria: </label>
                <input className='input-nombre'
              type="text"
              value={nombreCategoria}
              placeholder="Ingrese el nombre de la Categoria"
              onChange={(e) => {
                setNombreCategoria(e.target.value);
                }}
            />
           </div> 
           
           <div>
            <label> Agregue una caracteristica </label>
            {caracteristicas.map((caracteristica, index) => (
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
              Arrastre la imágen de la categoria
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
            <button>Agregar Categoria</button>
          </form>
          </div>
        </div>
      </>
    );
  } else return <h2>Buen intento... Pero no posees las credenciales necesarias para ver esta página</h2>



};

export default CrearCategoria;
