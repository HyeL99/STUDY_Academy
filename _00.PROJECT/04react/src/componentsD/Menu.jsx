import React from 'react'
import './Menu.scss'
import OpenMenu from './OpenMenu'

const Menu = ({loading, openMenu, setOpenMenu}) => {

  return (
    <>
      <div id='header' className={loading?'loading':openMenu?'openMenu':''} onClick={()=>setOpenMenu(!openMenu)}>
        Menu
      </div>
    </>
    
  )
}

export default Menu