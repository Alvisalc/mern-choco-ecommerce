import React, { useContext } from 'react'
import './ProductDisplay.css'
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { ShopContext } from '../../Context/ShopContext';


export const ProductDisplay = (props) => {

    const {product} = props;

    const {addToCart} = useContext(ShopContext);

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.imageUrl} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-prices">${product.price}</div>
                <div className="productdisplay-right-description">{product.description}</div>
                <div className="productdisplay-right-number">
                    <h1>Select Number</h1>
                    <div className="productdisplay-right-number-container">
                    <FiMinus className="productdisplay-right-number-btn"/>
                    0
                    <IoIosAdd className="productdisplay-right-number-btn"/>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </div>
  )
}
