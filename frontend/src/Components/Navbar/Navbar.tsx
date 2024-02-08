import React, { useContext, useRef } from 'react';
import './Navbar.css';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const logo: string = '../Assets/choco-white.png'

export const Navbar = () => {

  const {getTotalCartItems} = useContext(ShopContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <nav className="navbar navbar-expand-lg">
      {/* navbar-left-section */}
      <div className="nav-logo">
        <Link to="/"><img className="logo" src={logo} alt="" /></Link>
        <p>CHOCO</p>
      </div>
      {/* navbar-menu-center */}
      <ul className="nav-menu" ref={navRef}>
        <li><Link className="nav-link" onClick={showNavbar} to="/">Shop</Link></li>
        <li><Link className="nav-link" onClick={showNavbar} to="/assorted">Assorted</Link></li>
        <li><Link className="nav-link" onClick={showNavbar} to="/cakes">Cakes</Link></li>
        <li><Link className="nav-link" onClick={showNavbar} to="chocolates">Chocolates</Link></li>
        <li> {localStorage.getItem("auth-token")
        ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
        :<Link to="/login"><button onClick={showNavbar} >Login</button></Link>}</li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes/></button>
      </ul>
      {/* navbar-right-section */}
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")
        ?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
        :<Link to="/login"><button className="login-btn">Login</button></Link>}
        <Link to="/cart"><IoCartOutline className="cart-icon"/></Link>
        <div className="cart-count">{getTotalCartItems()}</div>
        <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
      </div>
    </nav>
  );
};
