import React from 'react'
import { Link } from 'react-router-dom'
import './Intro.scss'

const Intro = () => {
  return (
    <Link to='/login'>
      <div id='introContainer'>
        <div className="logoWrap"></div>
        <h1>Red Talk</h1>
        <span>TAB TO START</span>
      </div>
    </Link>
    
  )
}

export default Intro
