/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
function CartCount() {
  // Definir el estado del contador usando el hook useState
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  }

 

  return (
    <div>
        
        <h5 onClick={incrementar} style={{color:"#FFFF" , fontFamily:'Arial'}}>{contador} <FontAwesomeIcon  icon={faCartArrowDown} style={{color: "#ffffff",}} /></h5>
    </div>
  );
}

export default CartCount;
