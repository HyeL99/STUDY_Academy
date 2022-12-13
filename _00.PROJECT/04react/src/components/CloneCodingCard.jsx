import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './CloneCodingCard.scss'
import AOS from 'aos';

const CloneCodingCard = ({clone}) => {

  const {name,tool,page,image,git,demo}=clone;

  return (
    <li className='cloneCard'>
      <div className="imgPlace">
        <img src={image} alt="" />
      </div>
      <div className="contentsWrap">
        <h3>{name}</h3>
        <Row>
          <Col xs={3}>TOOL</Col>
          <Col xs={9}>{tool}</Col>
          <Col xs={3}>PAGE</Col>
          <Col xs={9}>{page}</Col>
        </Row>
        <div className="btnWrap">
          <button>View Code</button>
          <button>Demo</button>
        </div>
      </div>
    </li>
  )
}

export default CloneCodingCard