import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import assort_banner from './Components/Assets/assort-banner.jpg';
import cake_banner from './Components/Assets/cake-banner.jpg';
import choco_banner from './Components/Assets/choco-banner.jpg';
import { Footer } from './Components/Footer/Footer';
 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/assorted' element={<ShopCategory banner={assort_banner} category="assorted"/>}/>
        <Route path='/cakes' element={<ShopCategory banner={cake_banner} category="cakes"/>}/>
        <Route path='/chocolates' element={<ShopCategory banner={choco_banner} category="chocolates"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
