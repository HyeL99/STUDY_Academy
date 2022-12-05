import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Intro setLoading={setLoading} loading={loading} />
      <Navbar loading={loading} />
      <Routes>
        <Route path='/' element={<Home loading={loading} />} />
      </Routes>
    </>
  );
}

export default App;

/*
설치한 것들
yarn add react-router-dom
yarn add sass
*/