//useParams - React Hook. 현재 경로의 파라밑들이 저장되어있음
import React, { useState,useEffect }from 'react';
import { Col, Container, Row, Dropdown,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import { RiShoppingCartLine } from 'react-icons/ri';
import './ProductDetail.scss';

const ProductDetail = ({authenticate}) => {

  const [product,setProduct] = useState(null);
  const [like, setLike] = useState(false);

  let params = useParams();
  let id  = params.id;

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);  //브라우저가 네트워크에 요청을 보내고, 프로미스 객체가 반환됨
    let data = await response.json();
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[]);

  const changeHeart = () => {
    setLike(!like);
  }

  const getPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  if(authenticate === false) {
    return (<p>로그인이 필요합니다.</p>)
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <img className='detailImage' src={product?product.img:''} alt="리브니트 가디건" />
        </Col>
        <Col xs={12} md={{ span: 4, offset: 1 }}>
          <div className="detailTitleWrap">
            {product?<div className="detailTitle">리브니트 가디건</div>:''}
            {like?<span className="like" onClick={changeHeart}><BsSuitHeartFill className='heartFill'/></span>:<span className="like" onClick={changeHeart}><BsSuitHeart /></span>}
          </div>
          {product?<div className="detailPrice">₩{getPrice(product.price)}</div>:''}
          
          {product&&product.choice?<div className='detailEvent'>Weekly Best Seller</div>:''}
          {product&&product.new?<div className='detailNew'>NEW</div>:''}
          
          <div className="dropdownWrap">
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product&&product.size.length>0?(
                  product.size.map(item => <Dropdown.Item>{item}</Dropdown.Item>)
                ):''}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Button variant="dark"><RiShoppingCartLine /> 추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail