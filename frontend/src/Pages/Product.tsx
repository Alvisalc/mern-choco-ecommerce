import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrum/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  
  // adding the const to resolve the type of { all_product } as below
  const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) {
      throw new Error('useShopContext must be used within a ShopContextProvider');
    }
    return context;
  };

  const { all_product } = useShopContext(); // TS2339: Property 'all_product' does not exist on type 'ShopContextType | null'.
  const {productId} = useParams();
  const product = all_product?.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product ? String(product) : ''} category={''} name={''}/>
      {product && <ProductDisplay product={product}/>}
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
