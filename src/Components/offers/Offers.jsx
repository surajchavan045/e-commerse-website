import React from 'react'
import "./Offers.css"
import exclusive_image from "../../assets/exclusive_image.webp"

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For</h1>
          <h1>You</h1>
          <p>ONLY ON BEST SELLERS</p>
          <p>PRODUCTS</p>
          <button>Check Now</button>
      </div>
      <div className="offers-right">
          <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
