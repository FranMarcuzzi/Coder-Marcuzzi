import React from 'react';
import { Link } from 'react-router-dom';

const Carrussel = ({slide1,slide2,slide3}) => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ width: '100%', height: '70vh', overflow:"hidden" }}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-item   active silder1 d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${slide1})`, width: '100%', height: '70vh'}}>
    <Link to="/productos"><button  style={{height:"20vh", width:"40vw", fontFamily:"averox"}}>Estamos mejorando para vos. <br></br>Visita nuestros productos </button></Link>
    </div>
  <div className="carousel-item  silder3 " style={{backgroundImage:`url(${slide1})`, width: '100%', height: '70vh'}}/>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export default Carrussel