import React from 'react'
import "./ProductDisplay.css"

const ProductDisplay = () => {
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
      </div>
      <div className="productdisplay-right">

      </div>
    </div>
  )
}

export default ProductDisplay
