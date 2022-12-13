import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menu from './components/Menu';
import Home from './pages/Desktop/Home';
import Intro from './pages/Intro/Intro';
import Stars from './components/Stars';

function App() {
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Stars />
      <Intro setLoading={setLoading} loading={loading} />
      <div className={loading?'wrap loading':'wrap'}>
        <Menu loading={loading} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Routes>
          <Route path='/' element={<Home loading={loading} openMenu={openMenu} setOpenMenu={setOpenMenu} />} />
          <Route path='/mobile' element={<div>MOBILE</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

/*
설치한 것들
yarn add react-router-dom
yarn add sass
yarn add redux
yarn add react-redux
npm install react-bootstrap bootstrap
npm install jquery
yarn add aos
*/