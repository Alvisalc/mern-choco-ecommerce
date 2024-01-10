import React from 'react';
import Product from './Product'; // Adjust the import path based on your project structure
import productData from '../ProductData'; // Import your product data

const ProductList = () => {
  return (
    <div>
      {productData.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
