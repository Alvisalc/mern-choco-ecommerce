import React from 'react'
import './RelatedProducts.css'
import data_product from '../data'
import Item from '../Item/Item'

export const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.imageUrl} price={item.price}/>
            })}
        </div>
    </div>
  )
}
