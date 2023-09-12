import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// Importamos estilos del Navbar
import '../Navbar/Navbar.css'
// Importamos link de ruta hacia el carrito
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar'>
            <h1 className='navbar-logo'>Morra</h1>
            <Link className='navbar-cart' to= {'/cart'}><FontAwesomeIcon icon={faShoppingCart}/></Link>
        </nav>
    </div>
  )
}

export default Navbar
