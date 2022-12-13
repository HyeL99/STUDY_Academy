import React from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SourceCard from '../../componentsD/SourceCard'
import './ContactMe.scss'

const ContactMe = () => {
  const [openSource, setOpenSource] = useState(false);
  return (
    <div id='contactPage' className='scrollContainer'>
      <h2>CONTACT ME</h2>
      <SourceCard openSource={openSource} setOpenSource={setOpenSource} />
      <span className="stars"></span>
      <span className="man"></span>
      <div className="contents">
        <Row>
          <Col xs={1}></Col>
          <Col xs={6}>
            안녕하세요. 프론트엔드 개발자 <span>강혜리</span>입니다.<br />
            <br />
            대학생활을 하면서 모듈 제어를 위한 C언어 프로그래밍을 주로 하였고,<br />
            졸업 이후 웹개발에 관심을 가지면서 <span>프론트엔드</span>를 주목하게 되었습니다.<br />
            <br />
            새로운 것을 배우는 것을 좋아합니다.<br />
            <br />
            최근에는 백엔드에도 관심이 생겨 공부하고있으며,<br />
            풀스텍 개발자가 되는 것을 목표로 한걸음씩 나아가고 있습니다.
          </Col>
          <Col xs={5}>
            Email : <a href="mailto:kanghr8149@gmail.com">kanghr8149@gmail.com</a> <br />
            PhoneNumber : <a href="tel:01075588149">010-7558-8149</a> <br />
            Kakaotalk ID : gpfl8149 
          </Col>
        </Row>
      </div>
      <p>
        COPYRIGHT ⓒ 2022 강혜리. ALL RIGHTS RESERVED.<br />
        본 사이트는 개인 포트폴리오 사이트로 제작되어 상업적 목적이 아닙니다.<br />
        사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝혀 드립니다. <button onClick={()=>setOpenSource(!openSource)}>출처확인</button><br />
      </p>
    </div>
  )
}

export default ContactMe