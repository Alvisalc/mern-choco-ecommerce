import React from 'react';
import './Footer.css';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="footer-color text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a className="footer-links" href="/">Home</a></li>
              <li><a className="footer-links" href="/products">Products</a></li>
              <li><a className="footer-links" href="/services">Services</a></li>
              <li><a className="footer-links" href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a className="footer-links" href="/">Company</a></li>
              <li><a className="footer-links" href="/products">Customers</a></li>
              <li><a className="footer-links" href="/services">Offices</a></li>
              <li><a className="footer-links" href="/contact">Careers</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <p>
              <FaFacebookSquare className="social-icons"/>
              <FaSquareXTwitter className="social-icons"/>
              <FaInstagramSquare className="social-icons"/>
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center">&copy; 2024 Choco. All Rights Reserved.</p>
      </div>
    </footer>
  );
};