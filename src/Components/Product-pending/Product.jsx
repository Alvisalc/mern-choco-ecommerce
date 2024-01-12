import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../ProductData';
import './Product.css';

export const Product = ({ product }) => (
  <div className="container">
  <img
      src="../Assets/hero.jpg"
      alt="Banner"
      className="banner-img"
    />
    <h3>Product</h3>
    <hr />
        <div className="product-list">
            {productData.map(product => (
                <Link className="product-link" key={product.id} to={`/product/${product.id}`}> 
                    <div className="product">
                        <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                </Link>
            ))}
        </div>
  </div>
);
