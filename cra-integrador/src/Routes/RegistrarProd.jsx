import React, { useEffect, useState } from 'react'
import Categorias from '../components/Categorias';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastError, toastSuccess } from '../components/utils/Notificaciones'
import image from '../img/TERRA_RENT_resol.png'
import { json } from 'react-router-dom';
import AWS from 'aws-sdk';
import { promisify } from "util"
//import crypto from 'crypto'
//import uploadFile from '../../../BACK END/src/main/S3/s3';

//const randomBytes = promisify(crypto.randomBytes);

const RegistrarProd = () => {
    const [productoAgregado, setProductoAgregado] = useState({});
    const [nombreProd, setNombreProd] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    //const [imageUrl, setImageUrl] = useState('');

    const resetForm = () => {
      setNombreProd('');
      setDescripcion('');
      setSelectedImages([]);
      setPrecio('');
      setCategoria('');
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


    const uploadFile = async () => {
      //const rawBytes = await randomBytes(16)
      //const imageName = rawBytes.toString('hex')
      
      // S3 Bucket Name
      const S3_BUCKET = "imagenesterrarent";
  
      // S3 Region
      const REGION = "us-east-2";
  
      // S3 Credentials
      AWS.config.update({
        accessKeyId: "AKIA25QRTCUVNATBS2U7",
        secretAccessKey: "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",
      });
      const s3 = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
      });
      
      // Files Parameters
      console.log(selectedImages.length)

      for(var i=0; i<selectedImages.length; i++){
        const params = {
          Bucket: S3_BUCKET,
          Key: selectedImages[i].name,
          Body: selectedImages[i]
        }
      //};
      // Uploading file to s3
  
      var upload = s3
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          // File uploading progress
          console.log(
            "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
          );
        })
        .promise();
  
      await upload.then((err, data) => {
        console.log(err);
        
        // Fille successfully uploaded
        alert("File uploaded successfully.");
      });
      };
    };


   


    const handleImageChange = async (e) => {
    
      // Uploaded file
      if (e.length + selectedImages.length <= 10) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        for (const file of e) {
          if (!allowedTypes.includes(file.type)) {
            toastError('Formato de archivo no válido. Por favor, seleccione imágenes (JPEG, PNG, o GIF).');
            return;
          }
        }
      }
      // Changing file state
      setSelectedImages([...selectedImages, ...e]);

      console.log(selectedImages)
      uploadFile(selectedImages);
    
    };










    /*const handleImageChange = async (files) => {
      try {
        if (files.length + selectedImages.length <= 10) {
          const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
          for (const file of files) {
            if (!allowedTypes.includes(file.type)) {
              toastError('Formato de archivo no válido. Por favor, seleccione imágenes (JPEG, PNG, o GIF).');
              return;
            }
          }
          setSelectedImages([...selectedImages, ...files]);
    
          const signedUrls = await getSignedUrls(files);
          setImageUrl(signedUrls);
        } else {
          toastError('Se permiten hasta 10 imágenes por registro.');
        }
      } catch (error) {
        console.error('Error al obtener las URLs firmadas:', error);
        toastError('Error al obtener las URLs firmadas. Inténtelo de nuevo.');
      }
    };*/


    /*const getSignedUrls = async (selectedImages) => {
      try {
        
        const file = selectedImages.files[0];

        // Obtener la URL segura desde nuestro servidor
        const { url } = await fetch("/s3Url").then((res) => res.json());
        console.log(url);
        
        // Enviar la imagen directamente al cubo de S3
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: file
        });

        const imageUrl = url.split('?')[0];
        setImageUrl(imageUrl);
        console.log(imageUrl);
        
        
        /*const urlArray = [];
        for (const file of files) {
          const response = await fetch('/s3Url');
          console.log('Response from S3:', response);
          const data = await response.text(); // Obtener el contenido como texto en lugar de intentar analizarlo como JSON
          //console.log('Data:', data);
          urlArray.push(data);
        }
        return urlArray;
      } catch (error) {
        console.error('Error al obtener las URLs firmadas:', error);
        return [];
      }
    };*/


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
      } else {

        // Obtener las URLs firmadas de S3 antes de enviar la solicitud POST
        //const signedUrls = await getSignedUrls(selectedImages);

        const nuevoProducto = {
          nombreProd: nombreProd,
          descripcionProd: descripcion,
          precioProd: precio,
          categoria: {
            idCategoria: categoria
          },
          imagenes: selectedImages
        };
    
        setProductoAgregado(nuevoProducto);
    
        window.scrollTo(0, 0);
        const url = `http://localhost:3001/Producto`;
        const settings = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevoProducto)
        };
    
        fetch(url, settings)
          .then((response) => response.json())
          .then((data) => {
            toastSuccess('Se cargó el producto ' + nombreProd + ' correctamente');
            resetForm();
          })
          .catch((error) => {
            console.error('Error al cargar detalles del producto' + nombreProd, error);
            toastError('Error al cargar detalles del producto: ' + nombreProd);
          })
          .finally(() => {
            setFormSubmitted(true);
          });
      }
    };
    
    
    useEffect(() => {
      if (formSubmitted) {
        setFormSubmitted(false);
        //console.log(JSON.stringify(productoAgregado));
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
              <input type="file" onChange={(e) => handleImageChange(e.target.files)} accept="image/*" style={{ display: 'none' }} />
            </label>
            <button>Agregar producto</button>
          </form>
          </div>
        </div>
        <div className='mensaje-resolucion'>
            <img src={image} alt="" />
            <h2>Acceder desde un dispositivo compatible.</h2>
        </div>
      </>
    );
  };

  export default RegistrarProd;
