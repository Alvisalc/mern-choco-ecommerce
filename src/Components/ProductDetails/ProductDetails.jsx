import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../ProductData';

export const ProductDetails = () => {
  // Get the productId from the URL parameter
  const { productId } = useParams();

  const product = productData.find((item) => item.id === parseInt(productId));

  if (!product){
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
