import React from 'react'
import './Menu.scss'

const Menu = ({loading}) => {
  return (
    <div id='header' className={loading?'loading':''}>
      Menu
    </div>
  )
}

export default Menu