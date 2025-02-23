import React from 'react'
import "../components/css/Footer.css"
export const Footer = () => {
  return (
    <footer className="bg-black text-white text-center" id="contacto">
 



<div className="container d-flex align-items-center justify-content-center flex-wrap ">
  <div className=" col-md-4 d-flex justify-content-center">
    <a href="https://github.com/Ivanfuenla18" target="_blank" rel="noopener noreferrer">
      <img src="github-50.png" className="img-fluid img-container" alt="GitHub" />
    </a>
  </div>
  <div className="col-md-4 d-flex justify-content-center">
    <a href="mailto:ivanfuenla18@gmail.com">
      <img src="gmail-nuevo-50.png" className="img-fluid img-container" alt="Gmail" />
    </a>
  </div>
  <div className=" col-md-4 d-flex justify-content-center">
    <a href="https://www.linkedin.com/in/iván-paniagua-194314205/" target="_blank" rel="noopener noreferrer">
      <img src="linkedin-50.png" className="img-fluid img-container" alt="LinkedIn" />
    </a>
  </div>
</div>


<div className="container">
      <p className="mb-1">&copy; {new Date().getFullYear()} Iván PS</p>
     
        <a href="/privacidad" className="text-white">Política de Privacidad </a> 
        <a href="/terminos" className="text-white ms-2">Términos y Condiciones</a>
      
    </div>
    
  </footer>
  )
}
