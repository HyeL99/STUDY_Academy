/*
  화면 레이아웃, 반응형을 위해 부트스트랩 설치
  $ npm install react-bootstrap bootstrap

  검색기능 추가 http://localhost:3000/?q={$검색어}
  useSearchParams 사용
  주소 뒤에 /?q={$파라미터}
*/
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productsList,setProductsList] = useState([]);
  const [query, setQuery] = useSearchParams();  //주소의 파라미터값을 가져옴

  const getProducts = async () => {
    let keyword = query.get('q') || '';
    let url = `http://localhost:4000/products/?q=${keyword}`;
    let response = await fetch(url);  //브라우저가 네트워크에 요청을 보내고, 프로미스 객체가 반환됨
    let data = await response.json();
    setProductsList(data);
  }

  useEffect(()=>{
    getProducts();
  },[query]); //키워드 입력시마다 함수 실행
  
  
  return (
    <div>
      <Container>
        <Row>
        {productsList&&productsList.length>0?
          productsList.map(product=> (
          <Col sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product}/>
          </Col>
          )):(<Col className='noData'>검색 결과가 없습니다.</Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll

//json-server https://www.npmjs.com/package/json-server
//$ npm install -g json-server
//$ json-server --watch db.json
//$ json-server --watch db.json --port 4000 //react 서버와 포트번호가 달라야함