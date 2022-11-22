import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='buttonBox'>
      <Row>
        <Col sm={12} md={5}>
          <Button bg="light" variant="warning">Current Location</Button>
        </Col>
        <Col>
          <Button variant="outline-light">London</Button>
        </Col>
        <Col>
          <Button variant="outline-info">NewYork</Button>
        </Col>
        <Col>
          <Button variant="outline-warning">Seoul</Button>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherButton