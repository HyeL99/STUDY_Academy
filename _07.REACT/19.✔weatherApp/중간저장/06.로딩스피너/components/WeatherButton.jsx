import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';

const WeatherButton = ({setCity,cities,selectedCity}) => {

  return (
    <div className='buttonBox'>
      <Row>
        <Col sm={12} md={5}>
          <Button bg="light" variant={`${selectedCity === ''? "danger":"outline-danger"}`} onClick={()=>{setCity("")}}>Current Location</Button>
        </Col>
        <Col>
          <Button variant={`${selectedCity === cities[0] ? "light": "outline-light"}`} onClick={()=>{setCity(cities[0])}}>{cities[0]}</Button>
        </Col>
        <Col>
          <Button variant={`${selectedCity === cities[1] ? "secondary": "outline-secondary"}`} onClick={()=>{setCity(cities[1])}}>{cities[1]}</Button>
        </Col>
        <Col>
          <Button variant={`${selectedCity === cities[2] ? "dark": "outline-dark"}`} onClick={()=>{setCity(cities[2])}}>{cities[2]}</Button>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherButton