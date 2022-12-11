import React, { useState } from 'react'
import AboutMe from './AboutMe'
import CloneCoding from './CloneCoding'
import ContactMe from './ContactMe'
import './Home.scss'
import Project from './Project'
import $ from 'jquery';

const Home = ({loading}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /*
  const scrollPage = () => {

    const $home = $('.home');
    let lastPage = $('.scrollContainer').length;
    let beforeScroll=0;

    console.log('lastPage',lastPage);
    
    //첫 화면 로드시 스크롤값 최상단 고정
    $home.scrollTop(0);

    //스크롤 이벤트 부여
    $home.on('scroll touchmove mousewheel',function(e){
      console.log(currentPage);
      if($home.is(":animated")) return;

      let afterScroll = $home.scrollTop();

      if(beforeScroll > afterScroll){ //스크롤 내림 이벤트
        console.log('down');
        if(currentPage === lastPage) return;
        setCurrentPage(currentPage+1);
      } else if(beforeScroll < afterScroll){ //스크롤 올림 이벤트
        console.log('up');
        if(currentPage === 1) return;
        setCurrentPage(currentPage-1);
      } else {
        return;
      }

      let winH = window.innerHeight;
      let setPage = (currentPage-1)*winH;

      $home.animate({scrollTop: setPage})
      beforeScroll = afterScroll;
      console.log(currentPage);
    })
  }
  */

  const setScroll = (top) => {
    let scrollH = (top-1) * $(window).height();
    $('.home').animate({scrollTop:scrollH})
  }
  const scrollPage = () => {
    let currentPage = 1;

    const $home = $('.home');
    const winH = $home.innerHeight();
    const lastPage = $('.scrollContainer').length;
    console.log(winH);

    $home.animate({scrollTop:0},10);

    $home.on('mousewheel',function(e){
      if($home.is(':animated')) return;

      let wheel = e.originalEvent.deltaY;
      if(wheel > 0){
        if(currentPage === lastPage) return;
        console.log('down');
        //setCurrentPage(currentPage+1);
        currentPage++;
      } else {
        if(currentPage === 1) return;
        console.log('up');
        //setCurrentPage(currentPage-1);
        currentPage--;
      }
      setScroll(currentPage);

    })
  }

  window.onload =  scrollPage;
  window.onresize =  scrollPage;
  
  return (
    <div className={loading? 'home loading scroll':'home scroll'}>
      <AboutMe />
      <Project />
      <CloneCoding />
      <ContactMe />
    </div>
  )
}

export default Home