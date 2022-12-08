import React from 'react';
import './Intro.scss';

const Intro = ({loading,setLoading}) => {
  const openHome = () => {
    setLoading(false);
  }
  return (
    <div id='introPage' className={loading?'':'loadingComplete'}>
      <div className="background">
        <svg className="sky"></svg>
      </div>
      <div className='box' onClick={openHome}>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        <div className='title'>
          HyeL's<br/>&nbsp;Portfolio
          <span>Tab to start</span>
        </div>
        <div className="planet">
        </div>
      </div>
    </div>
  )
}

export default Intro