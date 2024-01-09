import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Product } from './Components/Product/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
