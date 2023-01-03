import React from 'react';
import banner01 from '../assets/eventBannerImage/event01.png';
import banner02 from '../assets/eventBannerImage/event02.png';
import banner03 from '../assets/eventBannerImage/event03.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Banner.scss'
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <div id='banner'>
      <Slider {...settings}>
        <img src={banner01} alt="이벤트 배너" />
        <img src={banner02} alt="이벤트 배너" />
        <img src={banner03} alt="이벤트 배너" />
      </Slider>
      <button>레시피 업로드</button>
    </div>
  )
}

export default Banner
