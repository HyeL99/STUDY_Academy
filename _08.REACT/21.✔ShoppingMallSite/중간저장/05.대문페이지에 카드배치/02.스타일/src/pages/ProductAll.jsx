/*
  화면 레이아웃, 반응형을 위해 부트스트랩 설치
  $ npm install react-bootstrap bootstrap
*/
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const baseUrl = 'http://localhost:4000';

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
      <Container>
        <Row>
        {productsList?productsList.map(product=> <Col sm={6} md={4} lg={3}><ProductCard product={product}/></Col>):''}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll

//json-server https://www.npmjs.com/package/json-server
//$ npm install -g json-server
//$ json-server --watch db.json
//$ json-server --watch db.json --port 5000 //react 서버와 포트번호가 달라야함