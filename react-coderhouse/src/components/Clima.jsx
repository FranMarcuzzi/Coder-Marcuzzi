import React from 'react';
import { useState, useEffect } from 'react';

const Clima = () => {
 
 const [clima, setClima] = useState(null);
  const [ciudad, setCiudad] = useState('Madrid'); // Puedes cambiar la ciudad según tus necesidades

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
    <h5 className='text-center bienvenida' style={{fontFamily:"averox"}}> {ciudad} <span style={{fontFamily:"Arial"}}>{clima} Cº</span></h5>

  )
}

export default Clima