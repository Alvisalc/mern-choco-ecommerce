import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { VscDiffRemoved } from "react-icons/vsc";
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

export const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    const stripePromise = loadStripe('pk_test_51Oe2omJv1ndIt9tZIHqNDCBWAptlKEgsLFnt73tEXEL1xh9INhKJivohE73Jt97eOAMrjoAAid9ZF5sTlK24z6pv00ZkSRZkuG');



    const handleCheckout = async () => {

        const lineItems = Object.keys(cartItems).map((itemId)=>{
            const quantity = cartItems[itemId];
            if(quantity > 0){
                const item = all_product.find((product)=>product.id === Number(itemId));
                return {
                    price_data: {
                        currency: "cad",
                        product_data: {
                            name: item.name,
                        },
                        unit_amount: Math.round(item.price * 100),
                    },
                    quantity: quantity
                };
            }
            return null; // exclude items with quantity 0 - works well
        }).filter(Boolean); // remove null entries - works well

        try{
            const {data} = await axios.post('http://localhost:4000/create-checkout-session', {lineItems})
            const stripe = await stripePromise
            await stripe.redirectToCheckout({ sessionId: data.id });
        } catch (error) {
            console.error('error during checkout:', error);
        }
    }

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return  (<div key={e.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.imageUrl} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>${e.price}</p>
                                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                    <p>${e.price*cartItems[e.id]}</p>
                                    <VscDiffRemoved className="cartitems-remove-icon" onClick={()=>{removeFromCart(e.id)}}/>
                                </div>
                                <hr />
                            </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free </p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>CHECKOUT WITH STRIPE</button>
                    
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}