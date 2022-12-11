import React from 'react';
import Stars from '../../components/Stars';
import './Intro.scss';
import { Link } from "react-router-dom";

const Intro = ({loading,setLoading}) => {
  const openHome = () => {
    setLoading(false);
  }
  return (
    <div id='introPage' className={loading?'':'loadingComplete'}>
      <Stars />
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        <div className='title'>
          HyeL's<br/>&nbsp;Portfolio
          <Link to='/'><span onClick={openHome}>Desktop</span></Link>
          <Link to='/mobile'><span onClick={openHome}>Mobile</span></Link>
        </div>
        <div className="planet">
        </div>
      </div>
    </div>
  )
}

export default Intro