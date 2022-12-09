import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './ProjectCard.scss'

const ProjectCard = ({project}) => {
  const {id,name,working,contribution,tool,page,contents} = project;

  return (
    <li id={id}>
      <Row>
        <Col xs={7} className='imgWrap'>
          <div style={{backgroundColor:'white',width:'100%',height:'100%'}}></div>
        </Col>
        <Col xs={5}>
          <h3>{name}</h3>
          <hr />
          <Row>
            <Col xs={3}>작업기간</Col>
            <Col xs={9}>{working}</Col>
            <Col xs={3}>기여도</Col>
            <Col xs={9}>{contribution}</Col>
            <Col xs={3}>TOOL</Col>
            <Col xs={9}>{tool}</Col>
            <Col xs={3}>PAGE</Col>
            <Col xs={9}>{page}</Col>
          </Row>
          <hr />
          <p dangerouslySetInnerHTML={{__html: contents}}>
          </p>
        </Col>
      </Row>
    </li>
  )
}

export default ProjectCard
/*
id:'project01',
name:'OUTBACK Redesign',
working:'2022.10.03 - 2022.10.20 (3주)',
contribution:'개인작업 (100%)',
tool:'HTML,CSS,jQuery',
page:'main + sub*9',
contents:`
  기존의 메뉴 소개가 중심이 되는 아웃백 사이트와는 다르게 ‘아웃백 스테이크 하우스’이라는 회사 소개에 좀 더 집중하여 홈화면을 리디자인하였으며, 반응형도 적용하였습니다.
  <br /><br />
  홈화면의 메인배너는 slick  플러그인을 이용하여 슬라이드로 볼 수 있도록 하였고,
  뉴스와 공지를 한 부분으로 합쳐서 최신순으로 홈화면에서 볼 수 있도록 제작했으며, 뉴스와 공지에 따른 필터링 기능도 추가하였습니다.
  <br /><br />
  서브페이지에서는 드롭다운 메뉴를 통해 페이지를 전환할 수 있습니다.
`
*/