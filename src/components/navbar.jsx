import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navContainer'>
     <div className='navbar'>
      <div className='logo'>Martins 
    <span> Shop</span>  
      </div>
    <div className='links'>
       <Link to="/"> Shop </Link>
       <Link to="/cart">
        <ShoppingCart color='red' size={40}/>
        </Link>
    </div>
    </div>
  </div>
  )
}
