import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUpGetInfo from './pages/SignUpGetInfo';
import SignUpGetInterest from './pages/SignUpGetInterest';
import Search from './pages/Search';
import Category from './pages/Category';
import MyPage from './pages/MyPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup/info' element={<SignUpGetInfo />} />
        <Route path='/signup/interest' element={<SignUpGetInterest />} />
        <Route path='/search' element={<Search />} />
        <Route path='/category' element={<Category />} />
        <Route path='/mypage/:id' element={<MyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
