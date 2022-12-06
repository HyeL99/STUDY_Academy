import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Header';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Intro setLoading={setLoading} loading={loading} />
      <div className={loading?'wrap loading':'wrap'}>
        <Navbar loading={loading} />
        <Routes>
          <Route path='/' element={<Home loading={loading} />} />
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
*/