import React, { useEffect , useState} from 'react'
import image from "../img/TERRA_RENT4.png"



const Categorias = () => {    

  const [categoriaMostrar, setCategoriasMostrar] = useState([]);
  const [error, setError] = useState(null);

  /*let categorias=[
   { id : 1,
  nombre:"Carpas",
  img:imgCarpa,
cantProductos:productos.length},
{ id : 2,
  nombre:"Kits",
  img:imgCons,
cantProductos:0},
{ id : 3,
  nombre:"Vehículos",
  img:imgBici,
cantProductos:0},
{ id : 4,
  nombre:"Senderismo",
  img:imgBaton,
cantProductos:0}
  ]*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api-terrarent.ddns.net:3001/Categoria`;
        const settings = {
          method: 'GET',
          mode: 'cors'
        };

        const response = await fetch(url, settings);
        const data = await response.json();

        console.log(data);

        setCategoriasMostrar(data);

        
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
        setError(error);
      }
    };


    fetchData();
  }, []); // La dependencia está vacía para que se ejecute solo en el montaje inicial

  if (error) {
    return  <div className="error">
              <img src={image} alt="" />
              <p>Error al cargar la sección Categorías. Por favor, inténtalo de nuevo más tarde.</p>
            </div>;
  }


  return (
    <div className='galeria'>
        <h2 id='h2-cat'>Categorías</h2>
        <section id="galeria-cat">
          {categoriaMostrar.map((categoria) => (
            <article className='categoria-card' key={categoria.idCategoria}>
              <figure>
                <img src={categoria.idCategoria !== 1 ? categoria.imagenCategoria[0].urlimg : null} alt="imagen de categoría" />
              </figure>
              <figcaption>
              <h4 className='categoria-text'>{categoria.idCategoria !== 1 ? categoria.nombreCategoria : null}</h4>
              {/*<p className='categoria-text'>{categoria.cantProductos} productos</p>*/}
              </figcaption>
            </article>
          ))}
        </section>
    </div>
  )
}

export default Categorias