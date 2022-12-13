import React from 'react'
import Stars from './Stars'
import './OpenMenu.scss';
import $ from 'jquery';
import aboutMeImg from '../assets/ABOUT_ME.svg'
import projectImg from '../assets/PROJECT.svg'
import cloneCodingImg from '../assets/CLONE_CODING.svg';
import contactMeImg from '../assets/CONTACT_ME.svg';

const OpenMenu = ({openMenu, setOpenMenu, setScrollH, setCurrentPage}) => {
  const scrollProject = async (page) => {
    let setPage = Number(page);
    if(page >= 6){
      setScrollH(setPage * $(window).height() + $('#projectHeader').innerHeight());
    } else {
      setScrollH(setPage * $(window).height());
    }
    console.log(setPage);
    await setCurrentPage(++setPage);
    setOpenMenu(!openMenu)
  }

  return (
    <div id="menuNav" className={openMenu?'openMenu':''}>
      <Stars />
      <button onClick={async ()=> await scrollProject(0)}><img src={aboutMeImg} alt="About Me" /></button>
      <button onClick={async ()=> await scrollProject(6)}><img src={cloneCodingImg} alt="Clone Coding" /></button>
      <button onClick={async ()=> await scrollProject(1)}><img src={projectImg} alt="Project" /></button>
      <button onClick={async ()=> await scrollProject(7)}><img src={contactMeImg} alt="Contact Me" /></button>
    </div>
  )
}

export default OpenMenu