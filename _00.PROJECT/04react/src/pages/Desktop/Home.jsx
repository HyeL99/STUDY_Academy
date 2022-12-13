import React, { useState } from 'react'
import AboutMe from './AboutMe'
import CloneCoding from './CloneCoding'
import ContactMe from './ContactMe'
import './Home.scss'
import Project from './Project'
import $ from 'jquery';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import OpenMenu from '../../components/OpenMenu'

const Home = ({loading, openMenu, setOpenMenu}) => {
  const [currentPage,setCurrentPage] = useState(1);
  let [scrollH,setScrollH] = useState(0)
  const dispatch = useDispatch();

  const scrollPage = () => {
    setCurrentPage(1);
    const $home = $('.home');
    const winH = $home.innerHeight();
    console.log(winH);

    $home.animate({scrollTop:0},10);
    doScroll();
    
  }
  const doScroll = () => {
    const $home = $('.home');
    const lastPage = $('.scrollContainer').length;
    const clone = $(`#cloneCoding ul`).scrollLeft();

    $home.off();
    $home.on('mousewheel',function(e){
      console.log('clone',clone);
      if($home.is(':animated')) return;

      let wheel = e.originalEvent.deltaY;

      if(wheel > 0){ console.log('down',currentPage);
        let page = currentPage;
        if(page === lastPage) return;
        setScrollH((page) * $(window).height());
        if(page > lastPage-3){
          setScrollH((page) * $(window).height() + $('#projectHeader').innerHeight());
        }
        setCurrentPage(++page);

      } else {console.log('up',currentPage);
        let page = currentPage;
        if(page === 1) return;
        setScrollH((page-2) * $(window).height());
        if(page > lastPage-1){
          setScrollH((page-2) * $(window).height() + $('#projectHeader').innerHeight());
        }
        setCurrentPage(--page);
      }
    })
  }

  useEffect(()=>{
    dispatch({type:'SCROLL',payload:{scrollH}});
    doScroll();
  },[currentPage])

  window.onload =  scrollPage;
  window.onresize =  scrollPage;
  
  return (
    <div className={loading? 'home loading scroll':'home scroll'}>
      <OpenMenu openMenu={openMenu} setOpenMenu={setOpenMenu} setCurrentPage={setCurrentPage} setScrollH={setScrollH} />
      <AboutMe />
      <Project setCurrentPage={setCurrentPage} setScrollH={setScrollH} />
      <CloneCoding />
      <ContactMe />
    </div>
  )
}

export default Home