import React from 'react'

const Forms = () => {
  return (
    <div className="col-lg-4 col-md-12 d-flex align-items-center justify-content-center " style={{margin:"auto", paddingTop:"10%"}} >
    <div className="container   cont "  id="contenedor-formulario">
        <div className="text-center mb-4" id="titulo-formulario">
            <p className=" formu" style={{fontFamily:"averox", fontSize:"3rem"}}>tu opinion nos importa</p>
        </div>
        <form  className="formulario" method="POST" data-netlify="true" action="#">     
                <div className= "mb-3">           
                <input  style={{fontFamily:"averox"}} type="email" className="form-control" id="email" name="email" placeholder="nombre-ejemplo.com"/>
                </div>

            
                <div className="mb-3">            
                    <input style={{fontFamily:"averox"}} type="input" className="form-control" id="name" name="name" placeholder="Nombre Apellido"/>
                </div>
        

                <div className="mb-3">
                    <input style={{fontFamily:"averox"}} type="tel" className="form-control" name="phone" id="phone" placeholder="Teléfono"/>
                </div>

                <div className="mb-3">       
                    <textarea  style={{fontFamily:"averox"}} className="form-control" name="message" id="message" placeholder="Su mensaje." rows="4"></textarea>
                </div>

                <div className="mb-3">
                    <button type="submit" className=" btn btn-outline-danger w-100 fs-5" style={{fontFamily:"averox"}}>enviar mensaje</button>
                </div>
            </form> 
    </div>
</div>
  )
}

export default Forms