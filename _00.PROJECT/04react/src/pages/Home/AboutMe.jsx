import React from 'react'
import './AboutMe.scss'
import {Row, Col} from 'react-bootstrap'
import {useSelector} from 'react-redux'

const AboutMe = () => {
  const skillList = useSelector(state => state.skills);
  return (
    <div id='aboutMe' className='scrollContainer'>
      <div className="top">
        <Row>
          <Col xs={5} className="profileWrap">
            <h2>About Me</h2>
          </Col>
          <Col xs className="contents">
            <div className="info">
              <div className="profile">
                <h3>Profile</h3>
                <Row>
                  <Col xs={3}>Name</Col>
                  <Col xs={9}>강혜리</Col>
                  <Col xs={3}>Birth</Col>
                  <Col xs={9}>1999.03.25</Col>
                  <Col xs={3}>Phone</Col>
                  <Col xs={9}>010-7558-8149</Col>
                  <Col xs={3}>Mail</Col>
                  <Col xs={9}>kanghr8149@gmail.com</Col>
                </Row>
              </div>
              <div className="education">
                <h3>Education</h3>
                <Row>
                  <Col xs={3}>2023.01</Col>
                  <Col xs={9}>프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 양성과정 수료 예정</Col>
                  <Col xs={3}>2022.02</Col>
                  <Col xs={9}>가천대학교 전자공학과 졸업</Col>
                </Row>
              </div>
            </div>
            <div className="texts">
            블라블라 항상 노력하는 <span>강혜리</span>입니다.<br />
            아래 멘트 열심히 생각해 봅시다.
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom">
        <Row>
          <Col xs={7} className="skills">
            {skillList.map((item,index)=>{
              return (
                <Row key={index}>
                  <Col xs={3}>{item.name}</Col>
                  <Col xs={7} className="skillBar"><span style={{width:item.percent}}></span></Col>
                  <Col xs={2} className="skillPercent">{item.percent}</Col>
                </Row>
              )
            })}
          </Col>
          <Col xs={5}>
            <h2>Skills</h2>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutMe