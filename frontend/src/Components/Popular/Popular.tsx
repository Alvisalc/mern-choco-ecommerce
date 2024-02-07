import React from 'react'
import './Popular.css'
import data_product from '../data'
import Item from '../Item/Item'

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-container">
          <h1>POPULAR ITEMS</h1>
          <hr />
          <div className="popular-item">
              {data_product.map((item, i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.imageUrl} price={item.price} description={item.description}/>
              })}
          </div>
      </div>
    </div>
  )
}
