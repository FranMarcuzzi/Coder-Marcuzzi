import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CartCount from './CartCount';
import ItemListContainer from './ItemListContainer';
import ServiceCard from './ServiceCard';

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"transparent", position:"fixed",top: "0" , left: "0 ",  right: "0" }}>
                <div className="container-fluid " >
                    <a className="navbar-brand logo ms-4" href="#root"> FM <span style={{color:"#d80032" , fontSize:"30px",fontWeight:"bold"}}>.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse justify-content-center navegacion" id="navbarNavDropdown">
                <ul className="navbar-nav list-unstyled d-flex justify-content-center ">
                    <li className="nav-item me-3">
                        <Link className="nav-link active" aria-current="page" href="#root">inicio</Link>
                    </li>
                    <li className="nav-item me-3 productos">
                        <Link className="nav-link" to="/productos">productos</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link" to="/contacto">contacto</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="nav-link" href="contactanos">encontranos</Link>
                    </li>
                
                 </ul>
                 </div>
                 <CartCount name="Usuario"/>              
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<h1>Hola</h1>}></Route>
                <Route path='/productos' element={<ItemListContainer></ItemListContainer>}></Route>
                <Route path='/productos/:categoria/:id' element={<ServiceCard></ServiceCard>}></Route>
                <Route path='/contacto'element={<h1>Hola!</h1>}></Route>
               
            </Routes>
            
    </BrowserRouter>
    </>
  )
}

export default Routing