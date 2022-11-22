import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';

const WeatherButton = ({setCity,cities}) => {

  return (
    <div className='buttonBox'>
      <Row>
        <Col sm={12} md={5}>
          <Button bg="light" variant="warning" onClick={()=>{setCity("")}}>Current Location</Button>
        </Col>
        <Col>
          <Button variant="outline-light" onClick={()=>{setCity(cities[0])}}>London</Button>
        </Col>
        <Col>
          <Button variant="outline-info" onClick={()=>{setCity(cities[1])}}>NewYork</Button>
        </Col>
        <Col>
          <Button variant="outline-warning" onClick={()=>{setCity(cities[2])}}>Seoul</Button>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherButton