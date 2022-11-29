import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
const baseUrl = 'http://localhost:5000';

const ProductAll = () => {
  const [productsList,setProductsList] = useState([]);
  const getProducts = async () => {
    let url = `${baseUrl}/products`;
    let response = await fetch(url);  //브라우저가 네트워크에 요청을 보내고, 프로미스 객체가 반환됨
    let data = await response.json();
    setProductsList(data);
  }
  useEffect(()=>{
    getProducts();
  },[]);
  
  
  return (
    <div>
      ProductAll
      <ProductCard/>
    </div>
  )
}

export default ProductAll

//json-server https://www.npmjs.com/package/json-server
//$ npm install -g json-server
//$ json-server --watch db.json
//$ json-server --watch db.json --port 5000 //react 서버와 포트번호가 달라야함