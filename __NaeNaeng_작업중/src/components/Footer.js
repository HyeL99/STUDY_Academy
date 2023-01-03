import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="inner">
        <nav>
          <Link to='#'>개인정보처리방침</Link>
          <Link to='#'>이용약관</Link>
          <Link to='#'>이메일 무단수집 거부</Link>
          <Link to='#'>고객센터</Link>
        </nav>
        <p>
          COPYRIGHT 2023 NAENAENG. ALL RIGHTS RESERVED.
          <span>
            본 사이트는 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다. <br />
            사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝혀 드립니다.
          </span>
          
        </p>
      </div>
    </div>
  )
}

export default Footer