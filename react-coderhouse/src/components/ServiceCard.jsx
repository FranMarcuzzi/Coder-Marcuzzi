import React from 'react';
import CartCount from './CartCount';

const ServiceCard = ({ title, description, price ,color}) => {

  return (
    <div className="service-card m-3 text-center " style={{borderRadius:"10px", padding:"30px",flexShrink: "0", backgroundColor:color, color:"black"}}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <button style={{border:"none"}}>Comprar</button>
    </div>
  );
};

export default ServiceCard;
