import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to='/'>&nbsp;HOME&nbsp;</Link>&nbsp;&nbsp;
      <Link to='/videos'>&nbsp;VIDEOS&nbsp;</Link>
    </div>
  )
}

export default Navbar