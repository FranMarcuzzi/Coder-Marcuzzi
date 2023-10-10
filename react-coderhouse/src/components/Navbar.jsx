import React, { useState } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import CartCount from './CartCount';


const Navbar = () => {
  return (
    <div id='navbar'>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#222222", position:"fixed",top: "0" , left: "0 ",  right: "0" }}>
                <div className="container-fluid " >
                    <a className="navbar-brand logo ms-4" href="#root"> FM <span style={{color:"#d80032" , fontSize:"30px",fontWeight:"bold"}}>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse justify-content-center navegacion" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item me-3">
                        <a className="nav-link active" aria-current="page" href="#root">Inicio</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="productos">Productos</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="faq">Consultas</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="contactanos">Contacto</a>
                    </li>
                    <li className="nav-item me-3">
                        <a className="nav-link" href="encontranos">Encontranos</a>
                    </li>
                 </ul>
                 </div>
                 <CartCount name="Usuario"/>              
                </div>
            </nav>
    </div>
  )
}

export default Navbar