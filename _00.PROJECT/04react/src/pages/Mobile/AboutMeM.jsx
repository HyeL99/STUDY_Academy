import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const AboutMeM = () => {
  const skillList = useSelector(state => state.skills);
  return (
    <div id='aboutMeM'>
      <h2>ABOUT ME</h2>
      <div className="profile">
        <div className="texts">
          천리길도 한걸음부터,<br />
          매일 한걸음씩 나아가기 위해 노력하는 <span>강혜리</span>입니다.<br />
        </div>
      </div>
      <div className="info">
        <div className="profile">
          <h3>PROFILE</h3>
          <Row>
            <Col xs={4}>Name</Col>
            <Col xs={8}>강혜리</Col>
            <Col xs={4}>Birth</Col>
            <Col xs={8}>1999.03.25</Col>
            <Col xs={4}>Address</Col>
            <Col xs={8}>경기도 고양시</Col>
          </Row>
        </div>
        <div className="education">
          <h3>EDUCATION</h3>
          <Row>
            <Col xs={3}>2023.01</Col>
            <Col xs={9}>프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정 수료 예정</Col>
            <Col xs={3}>2022.02</Col>
            <Col xs={9}>가천대학교 전자공학과 졸업</Col>
          </Row>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skillBars">
            {skillList.map((item,index)=>{
              return (
                <Row key={index}>
                  <Col xs={3}>{item.name}</Col>
                  <Col xs={7} className="skillBar"><span style={{width:item.percent}}></span></Col>
                  <Col xs={2} className="skillPercent">{item.percent}</Col>
                </Row>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeM