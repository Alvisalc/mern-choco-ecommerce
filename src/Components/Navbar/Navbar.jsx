import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/choco-white.png'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <nav className="navbar navbar-expand-lg">
      {/* navbar-left-section */}
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
        <p>Choco</p>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      {/* navbar-menu-center */}
      <ul className="nav-menu">
        <li><Link className="nav-link" to="/">Shop</Link></li>
        <li><Link className="nav-link" to="/assorted">Assorted</Link></li>
        <li><Link className="nav-link" to="/cakes">Cakes</Link></li>
        <li><Link className="nav-link" to="chocolates">Chocolates</Link></li>
      </ul>
      {/* navbar-right-section */}
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><IoCartOutline className="cart-icon"/></Link>
        <div className="cart-count">{getTotalCartItems()}</div>
      </div>
    </nav>
  );
};
