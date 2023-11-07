/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
function CartCount(props) {
  // Definir el estado del contador usando el hook useState
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  }

  const [clima, setClima] = useState(null);
  const [ciudad, setCiudad] = useState('London'); // Puedes cambiar la ciudad según tus necesidades

  useEffect(() => {
    const obtenerClima = async () => {
      try {
        const respuesta = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=8d67b3b9382ef39ac07ff8cabb0e7225&units=metric`
        );
        const datos = await respuesta.json();
        setClima(datos.main.temp);
      } catch (error) {
        setClima("Error");
      }
    };

    obtenerClima();
  }, [ciudad]);


  return (
    <div>
        
        <h5 className='text-center bienvenida' style={{fontFamily:"averox"}}> {ciudad} <span style={{fontFamily:"Arial"}}>{clima} Cº</span>
        <h5 onClick={incrementar} style={{color:"#FFFF" , fontFamily:'Arial'}}>{contador} <FontAwesomeIcon  icon={faCartArrowDown} style={{color: "#ffffff",}} /></h5>
        </h5>                         
    </div>
  );
}

export default CartCount;
