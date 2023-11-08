import React from 'react'
import Carrussel from './Carrussel'

const Inicio = () => {
  return (
    <div className='indexContainer'>
      <Carrussel slide1={"../image/slide1.jpg"} slide2={"../image/slide2.jpeg"}></Carrussel>
    </div>
  )
}

export default Inicio