import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className="item">
        <img src={props.image} className="item-image" alt="" />
        <p>{props.name}</p>
        <div className="item-prices">${props.price}</div>
    </div>
  )
}

export default Item;