import React, { useState } from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
//import ProductDetail from './pages/ProductDetail'
import PrivateRoute from './route/PrivateRoute';
import Navbar from './components/Navbar';
/*
  1. 전체상품페이지(대문페이지),로그인, 상품 상세페이지
    1-1. 네비게이션바
  2. 전체상품페이지 - 전체상품을 쭉 나열 (미리보기 형식)
    2-1. 대문 상품이미지를 클릭하면 디테일 페이지가 나오게
  3. 상품 검색기능
  4. 로그인 버튼 - 클릭하면 로그인 페이지가 나옴
    4-1. 로그인, 로그아웃은 토글 버튼
  5. 상품디테일 클릭 - 로그인 여부 확인
    5-1. 로그인 되어있으면 상품 디테일 페이지 연결
    5-2. 로그인이 안되어있으면 로그인 페이지 연결
  6. 로그아웃기능 - 로그아웃 상태에서는 상품디테일 확인 불가, 다시 로그인 페이지로 연결
  7. 반응형, 사이드바
*/
function App() {
  const [authenticate , setAuthenticate ] = useState(false);  //로그인 상태 구분

  return (
    <div style={{margin:"0 30px"}}>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}/>
        {/* <Route path='/product/:id' element={<ProductDetail authenticate={authenticate} />} /> */}
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
/*
Routes는 Route를 감싸주고, 스위치 해주는 역할
*/