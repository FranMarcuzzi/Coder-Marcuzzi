import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Servicio 1',
    description: 'Descripción del servicio 1.',
    price: 100,
    color: "#fabfb7",
    
  },
  {
    title: 'Servicio 2',
    description: 'Descripción del servicio 1.',
    price: 150,
    color:"#fdf9c4"
  },
  {
    title: 'Servicio 3',
    description: 'Descripción del servicio 1.',
    price: 200,
    color:"#ffda9e"
  },
  {
    title: 'Servicio 4',
    description: 'Descripción del servicio 1.',
    price: 200,
    color:"#c5c6c8"
  },
  {
    title: 'Servicio 5',
    description: 'Descripción del servicio 1.',
    price: 200,
    color:"#b2e2f2"
  },
  {
    title: 'Servicio 6',
    description: 'Descripción del servicio 1.',
    price: 200,
    color:"#b0c2f2"
  },

  
];

const ItemListContainer = () => {
  return (
    <div className='text-center' style={{marginTop:"30px"}}>
      <h2 style={{color:"#ffffff",fontSize:"5rem", fontFamily: 'Fjalla One', textShadow: "-7px 3px 0 #d80032",letterSpacing: "0.07em",marginTop:"5rem"}}>Nuestros Servicios</h2>
      <div className="service-list" style={{display:"flex",flexWrap:"wrap", justifyContent:"center", alignItems:"center", color:"#ffff"}}>
        {services.map((service, index) => (
          <ServiceCard  o key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
