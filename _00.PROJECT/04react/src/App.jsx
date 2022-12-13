import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Menu from './componentsD/Menu';
import Home from './pages/Desktop/Home';
import Intro from './pages/Intro/Intro';
import Stars from './componentsD/Stars';
import MobileHome from './pages/Mobile/MobileHome';

function App() {
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Stars />
      <Intro setLoading={setLoading} loading={loading} />
      <div className={loading?'wrap loading':'wrap'}>
        <Routes>
          <Route path='/' element={<Home loading={loading} openMenu={openMenu} setOpenMenu={setOpenMenu} />} />
          <Route path='/mobile' element={<MobileHome loading={loading}/>} />
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