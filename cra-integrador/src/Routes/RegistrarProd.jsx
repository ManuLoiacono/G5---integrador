import React, { useState } from 'react'

const RegistrarProd = () => {
    const [nombreProd, setNombreProd] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [info, setInfo] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleImageChange = (files) => {
      if (files.length + selectedImages.length <= 10) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        for (const file of files) {
          if (!allowedTypes.includes(file.type)) {
            setErrorMessage('Formato de archivo no válido. Por favor, seleccione imágenes (JPEG, PNG, o GIF).');
            return;
          }
        }

        setErrorMessage('');
        setSelectedImages([...selectedImages, ...files]);
      }else {
        setErrorMessage('Se permiten hasta 10 imágenes por registro.');
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

    const handleSubmit = (e) => {
      e.preventDefault();
      if(selectedImages.length === 0){
        setShow(false);
        setError('Ingrese al menos una imágen');}
        else if (nombreProd.length > 3 && descripcion.length > 10) {
        setShow(true);
        setError('');
      } 
        else {
        setError('Por favor verifique su información nuevamente');
        setShow(false);
      }
    };



    console.log(error);
    return (
      <>
        <div className='registrar'>
            <h2>Registrá tus productos</h2>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <label> Nombre del producto: </label>
                <input className='input-nombre'
              type="text"
              placeholder="Ingrese nombre"
              onChange={(e) => {
                setNombreProd(e.target.value.trim());
                setShow(false);
                setError('');
              }}
            />
            </div>
            <div className='inputs'>
                <label> Descripción del producto: </label>
                <input className='input-descripcion'
              type="text"
              placeholder="Ingrese descripción"
              onChange={(e) => {
                setDescripcion(e.target.value.trim());
                setShow(false);
                setError('');
              }}
            />
            </div>
                <div className='inputs'>
                <label> Información relevante: </label>
                <input className='input-info'
              type="text"
              placeholder="Ingrese información relevante"
              onChange={(e) => {
                setInfo(e.target.value.trim());
                setShow(false);
                setError('');
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
                    <img key={index} src={URL.createObjectURL(image)} alt={`Imagen ${index + 1}`} />
                    ))}
              </div>
              </div>
              <input type="file" onChange={(e) => handleImageChange(e.target.files)} accept="image/*" style={{ display: 'none' }} />
            </label>

            <button>Agregar producto</button>
          </form>
        <div>
          {errorMessage !== '' && <h3 className="mensaje-error">{errorMessage}</h3>}
          {show && <h3 className='carga-exitosa'>El producto "{nombreProd}" se agregó correctamente.</h3>}
          {error !== '' && <h3 className="mensaje-error">{error}</h3>}
        </div>
        </div>
      </>
    );
  };

  export default RegistrarProd;
