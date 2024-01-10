import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../ProductData';
import './NewCollection.css';

export const NewCollection = () => {
  return (
    <div className="container">
        <h2>New Collection</h2>
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
};

