import { Link } from 'react-router-dom';
import React from 'react';
import './estilos.css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import logo from './imagenes/logo caballero pizaa definigivo.jpg'


function MenuNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

 const handleMenuToggle = () => {
   setMenuOpen(!isMenuOpen);
 };

 return (
   <nav style={{margin:'0',padding:'0'}} className="navbar navbar-expand-lg navbar-light bg-light">
     <div style={{background:'black'}} className="container-fluid">
       <button
         className="navbar-toggler"
         type="button"
         onClick={handleMenuToggle}
       >
         <span style={{border:'1px solid white',borderRadius:'5px'}} className="navbar-toggler-icon"></span>
       </button>
       <div
         className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
       >
         <ul style={{backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'cover',marginTop:'10px'}} className='Encabezado-child-1'>
         </ul>
         <ul className="navbar-nav">
           <li className="nav-item">
             <Link to="/inicio" className="nav-link" style={{ color: 'white' }}>
               Inicio
             </Link>
           </li>
           <li className="nav-item">
             <Link to="/registro" className="nav-link" style={{ color: 'white' }}>
               Registro
             </Link>
           </li>
           <li className="nav-item">
             <Link to="/quienessomos" className="nav-link" style={{ color: 'white' }}>
               Quienes somos
             </Link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
 );
}

export default MenuNav;