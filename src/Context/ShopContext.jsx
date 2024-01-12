import React, { createContext, useState } from 'react'
import all_product from '../Components/all_product'

export const ShopContext = createContext(null);

    // create a empty cart
    const getDefaultCart = ()=>{
        let cart = {};
        for (let index=0; index < all_product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }

export const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());

    // addToCart function
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    // removeFromCart function
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // using context can access the cartItems in any components
    const contextValue = {all_product,cartItems,addToCart,removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

