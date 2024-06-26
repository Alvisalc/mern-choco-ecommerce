import React, { ReactNode, createContext, useEffect, useState } from 'react'
import all_product from '../Components/all_product.ts'
import { ShopContextType, TProduct } from '../Types/type.ts';


interface ShopContextProviderProps {
    children: ReactNode;
  }
  
// change all the output of ShopContextType into empty value and pass through to other tsx to use
export const ShopContext = createContext<ShopContextType>({
    all_product: [],
    cartItems: {},
    addToCart: (itemId: number) => {},
    removeFromCart: (itemId: number) => {},
    getTotalCartAmount: () => 0,
    getTotalCartItems: () => 0,
  });

// Define the type for the cart
type Cart = Record<number, number>;

// Create an empty cart
const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let index = 0; index < 36 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};


// props: any - temporary type
export const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
    const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart());

     // Load cart data from local storage on initial load
    useEffect(() => {
        const savedCartItems = localStorage.getItem('cart-data'); // Added
        if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    // Save cart data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart-data', JSON.stringify(cartItems)); // Added
    }, [cartItems]);

    // Add items to the Cart function
    const addToCart = (itemId: number) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem("auth-token")){
            fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/addtocart`,{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

    // Remove Cart Item from the Cart function
    const removeFromCart = (itemId: number) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem("auth-token")){
            fetch(`${process.env.REACT_APP_SERVER_SIDE_URL}/removefromcart`,{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    }

   // Total Cart Amount function
    const getTotalCartAmount = (): number => {
        let totalAmount: number = 0;
        for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo: TProduct | undefined = all_product.find((product) => product.id === Number(item));
            // Check if itemInfo is not undefined before proceeding
            if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    
    return parseFloat(totalAmount.toFixed(2));
  };
  
    // Total Cart Item at the top right hand corner
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    // using context can access the cartItems in any components
    const contextValue: ShopContextType = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}