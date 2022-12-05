import React from 'react';
import './Intro.scss';

const Intro = ({loading,setLoading}) => {
  const openHome = () => {
    setLoading(false);
  }
  return (
    <div id='introPage' className={loading?'':'loadingComplete'}>
      <div className='box' onClick={openHome}>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        <div className='title'>
          HyeL's<br/>&nbsp;Portfolio
          <span>Tab to start</span>
        </div>
      </div>
    </div>
  )
}

export default Intro