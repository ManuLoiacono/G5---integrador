import React from 'react'
const Categorias = () => {
  let categorias=[
   { id : 1,
  nombre:"Carpas",
  img:"",
cantProductos:0},
{ id : 2,
  nombre:"Kits",
  img:"",
cantProductos:0},
{ id : 3,
  nombre:"Vehículos",
  img:"",
cantProductos:0},
{ id : 4,
  nombre:"asd",
  img:"",
cantProductos:0}
  ]
  return (
    <div className='categorias'>
        <h3>Categorías</h3>
        <section id="galeria-cat">
          {categorias.map((categoria) => (
            <article className='categoria-card' key={categoria.isd}>
              <figure><img src={categoria.img} alt="imagen de categoría" /></figure>
              <figcaption>
              <h4>{categoria.nombre}</h4>
              <p>{categoria.cantProductos } productos</p>
              </figcaption>
            </article>

          ))}


        </section>
    </div>
  )
}

export default Categorias