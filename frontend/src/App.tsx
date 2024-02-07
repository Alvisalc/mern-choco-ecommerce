import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar.tsx';
import { Shop } from './Pages/Shop.tsx';
import { ShopCategory } from './Pages/ShopCategory.tsx';
import { Product } from './Pages/Product.tsx';
import { Cart } from './Pages/Cart.tsx';
import { LoginSignup } from './Pages/LoginSignup.tsx';
import { Footer } from './Components/Footer/Footer.tsx';
import { Success } from './Pages/Success.tsx';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/assorted' element={<ShopCategory name="Assorted" category="assorted"/>}/>
        <Route path='/cakes' element={<ShopCategory name="Cakes" category="cakes"/>}/>
        <Route path='/chocolates' element={<ShopCategory name="Chocolates" category="chocolates"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/success' element={<Success/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
