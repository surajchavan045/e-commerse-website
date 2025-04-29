
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

function App() {

  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/>
      <Route path='/product' element={<Product/>} />
      <Route path=':productId' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
   </div>
  )
}

export default App
