import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/choco-white.png'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* navbar-left-section */}
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
        <p>Choco</p>
      </div>
      {/* navbar-menu-center */}
      <ul className="nav-menu">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/assorted">Assorted</Link></li>
        <li><Link to="/cakes">Cakes</Link></li>
        <li><Link to="chocolates">Chocolates</Link></li>
      </ul>
      {/* navbar-right-section */}
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><IoCartOutline className="cart-icon"/></Link>
        <div className="cart-count">0</div>
      </div>
    </nav>
  );
};
