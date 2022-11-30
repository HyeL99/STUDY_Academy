import React from 'react'
import './ProductCard.scss'

const ProductCard = ({product}) => {
  return (
    <div className='productCard'>
      <div className="imgContainer">
        <img src={product.img} alt={product.title} />
        <div className="itemPointBox">
          {product.choice?<div className='event'>Weekly Best Seller</div>:''}
          {product.new?<div className='new'>NEW</div>:''}
        </div>
      </div>
      <div className='title'>{product.title}</div>
      <div className='price'>₩{product.price}</div>
    </div>
  )
}

export default ProductCard
