import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
function CartCount(props) {
  // Definir el estado del contador usando el hook useState
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  }



  return (
    <div>
        
        <h5 className='text-center bienvenida'>Hola {props.name}
        <h5 onClick={incrementar} style={{color:"#FFFF"}}>{contador} <FontAwesomeIcon  icon={faCartArrowDown} style={{color: "#ffffff",}} /></h5>
        </h5>                         
    </div>
  );
}

export default CartCount;
