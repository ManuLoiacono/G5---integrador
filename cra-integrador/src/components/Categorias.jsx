import React, { useEffect , useState} from 'react'
import imgCarpa from '../img/carpa-playera.jpg'
import imgBici from '../img/bicicleta.jpg'
import imgBaton from '../img/baton_trakking.jpg'
import imgCons from '../img/conservadora-02.jpg'
import { useProduct } from './utils/ProductContext'
const Categorias = () => {
  let products = useProduct()
  const [productos, setProductos] = useState([])
  useEffect(()=>{console.log(setProductos(products.productsData));},[products.productsData])
  let categorias=[
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
  ]
  return (
    <div className='galeria'>
        <h2 id='h2-cat'>Categorías</h2>
        <section id="galeria-cat">
          {categorias.map((categoria) => (
            <article className='categoria-card' key={categoria.id}>
              <figure>
                <img src={categoria.img} alt="imagen de categoría" />
              </figure>
              <figcaption>
              <h4 className='categoria-text'>{categoria.nombre}</h4>
              <p className='categoria-text'>{categoria.cantProductos } productos</p>
              </figcaption>
            </article>

          ))}


        </section>
    </div>
  )
}

export default Categorias