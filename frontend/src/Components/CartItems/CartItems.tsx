import React, {useContext} from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext.tsx'
import { VscDiffRemoved } from "react-icons/vsc";
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

export const CartItems: React.FC = () => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)!;
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);

    // Check out with Stripe button logic
    const handleCheckout = async () => {
        // create line items based on the items in the cart
        const lineItems = Object.keys(cartItems).map((itemId)=>{
            const quantity = cartItems[Number(itemId)];
            if(quantity > 0){
                // find the product details based on the item id
                const item = all_product.find((product)=>product.id === Number(itemId));

                if(item && item.price && quantity > 0){
                      return {
                        // price data for the Stripe session
                        price_data: {
                            currency: "cad",
                            product_data: {
                                name: item?.name,
                            },
                            // convert to cents (Stripe epects amount in cents)
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: quantity
                    };
                }
              
            }
            return null; // exclude items with quantity 0 - success
        }).filter(Boolean); // remove null entries - success

        try{
            // send request to the backend to create a checkout session
            const {data} = await axios.post(`${process.env.REACT_APP_SERVER_SIDE_URL}/create-checkout-session`, {lineItems})
            // initialize the Stripe object
            const stripe = await stripePromise
            // redirect to the Stripe checkout page with the session id (which pass through from backend)
            if (stripe) {
                await stripe.redirectToCheckout({ sessionId: data.id });
                } else {
                console.error('Stripe object is null');
                }
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
            {all_product.map((e)=>{ // get all product from data file (e) - elements inside the file 
                // check if the quantity of the product in the cart is greater than 0
                if(cartItems[e.id]>0)
                {
                    return  (<div key={e.id}>
                                 {/* display each product in the cart */}
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
                return null; // exclude product with quantity 0 (not selected by user)
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
                            <p>Free</p>
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