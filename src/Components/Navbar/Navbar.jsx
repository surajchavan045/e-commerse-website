import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" height="50px" />
            <p>Shopify</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><Link to="/">Home</Link>{menu==="home" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to="/womens">Women</Link>{menu==="womens" ? <hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids" ? <hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/login"><button>Login</button></Link> 
           <Link to="/cart"><img src={cart_icon} alt="" height="40px" /></Link> 
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
