import React from 'react'
import './Navbar.scss'

const Navbar = ({loading}) => {
  return (
    <div className={loading?'navbar loading':'navbar'}>Navbar</div>
  )
}

export default Navbar