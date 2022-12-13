import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import './ProjectCard.scss'

const ProjectCard = ({project}) => {
  const {id,name,working,contribution,tool,page,contents, git, demo, preview} = project;

  return (
    <li id={id} className='scrollContainer'>
      <Row>
        <Col xs={7} className='imgWrap'>
          <div className="links">
            {git? <a href={git}>VIEW CODE</a>:''}
            {demo? <a href={demo}>DEMO</a>:''}
            {preview? <a href={preview}>VIEW DOCUMENT</a>:''}
          </div>
          <div className='preview'></div>
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