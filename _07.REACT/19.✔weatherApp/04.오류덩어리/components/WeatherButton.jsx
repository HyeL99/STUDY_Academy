import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';

const WeatherButton = ({setWeather}) => {

  return (
    <div className='buttonBox'>
      <Row>
        <Col sm={12} md={5}>
          <Button bg="light" variant="warning" onClick={()=>{setWeather(null)}}>Current Location</Button>
        </Col>
        <Col>
          <Button variant="outline-light" onClick={()=>{setWeather('London')}}>London</Button>
        </Col>
        <Col>
          <Button variant="outline-info" onClick={()=>{setWeather('NewYork')}}>NewYork</Button>
        </Col>
        <Col>
          <Button variant="outline-warning" onClick={()=>{setWeather('Seoul')}}>Seoul</Button>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherButton