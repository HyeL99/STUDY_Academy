//상품을 눌렀을 때 그 상품에 해당하는 상품상세페이지로 넘어가도록 함

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.scss'

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`product/${product.id}`);
  }
  const getPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <div className='productCard'>
      <div className="imgContainer" onClick={showDetail}>
        <img src={product.img} alt={product.title} />
        <div className="itemPointBox">
          {product.choice?<div className='event'>Weekly Best Seller</div>:''}
          {product.new?<div className='new'>NEW</div>:''}
        </div>
      </div>
      <div className='title'>{product.title}</div>
      <div className='price'>₩{getPrice(product.price)}</div>
    </div>
  )
}

export default ProductCard
