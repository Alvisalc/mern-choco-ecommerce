import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Choco</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Signup">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
