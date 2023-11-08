import React from 'react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState(null);


const productos = [
  {
    title: 'ADIDAS YEEZY 350',
    id : 1,
    description: '',
    price: 300,
    color: "#fabfb7",
    img: "../../image/pd1.png",
    categoria: "zapatillas"
  },
  {
    title: 'ADIDAS RETRO 120',
    id : 2,
    description: '',
    price: 150,
    color:"#fdf9c4",
    img: "../../image/pd4.png",
    categoria:"remeras"

  },
  {
    title: 'ADIDAS YEEZY 350',
    id : 3,
    description: '',
    price: 300,
    color: "#fabfb7",
    img: "../../image/pd1.png",
    categoria: "remeras"
  },
  {
    title: 'ADIDAS RETRO 120',
    id : 4,
    description: '',
    price: 150,
    color:"#fdf9c4",
    img: "../../image/pd4.png",
    categoria:"zapatillas"

  },
  {
    title: 'ADIDAS YEEZY 350',
    id : 5,
    description: '',
    price: 300,
    color: "#fabfb7",
    img: "../../image/pd1.png",
    categoria: "remeras"
  },
  {
    title: 'ADIDAS RETRO 120',
    id : 6,
    description: '',
    price: 150,
    color:"#fdf9c4",
    img: "../../image/pd4.png",
    categoria:"zapatillas"

  },

 
];


const productosFiltrados = subcategoriaSeleccionada
? productos.filter(producto => producto.categoria === subcategoriaSeleccionada)
: productos;
  return (
    <div className='text-center' style={{marginTop:"30px"}}>
      <h2 className="neon-text"style={{color:"#ffffff",fontSize:"6rem", fontFamily:"averox", letterSpacing: "0.5em",marginTop:"7rem",marginBottom:"4rem"}}>productos</h2>
      <ul className='filtro'>
        <li onClick={() => setSubcategoriaSeleccionada('remeras')}>Remeras</li>
        <li onClick={() => setSubcategoriaSeleccionada('zapatillas')}>Zapatillas</li>
        <li onClick={() => setSubcategoriaSeleccionada(null)}>Mostrar Todos</li>
      </ul>
      <div className="service-list" style={{display:"flex",flexWrap:"wrap", justifyContent:"center", alignItems:"center", color:"#ffff"}}>
        {productosFiltrados.map((service, index) => (
          <ServiceCard  o key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
