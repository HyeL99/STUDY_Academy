import React from 'react';
import banner01 from '../assets/eventBannerImage/event01.png';
import banner02 from '../assets/eventBannerImage/event02.png';
import banner03 from '../assets/eventBannerImage/event03.png';

const Banner = () => {
  return (
    <div id='banner'>
      <img src={banner01} alt="이벤트 배너" />
      <img src={banner02} alt="이벤트 배너" />
      <img src={banner03} alt="이벤트 배너" />
    </div>
  )
}

export default Banner
