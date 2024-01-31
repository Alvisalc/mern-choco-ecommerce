import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import { Success } from './Pages/Success';
 
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
