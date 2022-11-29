import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      <img src={product.img} alt={product.title} />
      {product.choice?<div>MD추천</div>:''}
      {product.new?<div>신제품</div>:''}
      <div>{product.title}</div>
      <div>₩{product.price}</div>
    </div>
  )
}

export default ProductCard
