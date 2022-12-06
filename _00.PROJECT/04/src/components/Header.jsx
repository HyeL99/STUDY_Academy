import React from 'react'
import './Header.scss'

const Header = ({loading}) => {
  return (
    <div id='header' className={loading?'loading':''}>
      <h1>HyeL's Portfolio</h1>
    </div>
  )
}

export default Header