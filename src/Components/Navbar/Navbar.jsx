import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from '../Assets/choco-white.png'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to="/">
            <img src={logoImage} alt="Choco Logo" className="navbar-brand" />
          </Link>        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="navbar-nav mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/Product">Product</Link>
            </div>
            <div className="navbar-nav">
              <Link className="nav-link btn outline-warning" to="/Signup">SignUp</Link>
            </div>
          </div>
        </div>
    </nav>
  );
};
