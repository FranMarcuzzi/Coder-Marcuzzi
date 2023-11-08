import React from 'react';
import CartCount from './CartCount';
import { useParams } from 'react-router-dom';

const ServiceCard = ({ title,id,categoria, description, price, img }) => {

  return (
    <div categoria={categoria} id={id}className="cardNew" style={{margin:"3%"}}>
    <div className="images">
      <img src={img} style={{marginLeft:"10%"}} />
    </div>
    <div className="slideshow-buttons">
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div className="four"></div>
    </div>
    <p className="pick">choose size:</p>
    <div className="sizes">
      <div className="size" >red</div>
      <div className="size">blue</div>
      <div className="size">purple</div>
    </div>
    <div className="product">
        <p>{description}</p>
        <h2 style={{marginRight:"1%"}}>{title}</h2>
        <h3>U$D {price}</h3>
        <div className="buttons">
        <button className="add">Add to Cart</button>
      </div>
    </div>
  </div>
  );
};

export default ServiceCard;

