import React from 'react'
import {Button,Row,Col} from 'react-bootstrap';

const WeatherButton = ({setCity,cities,handleCityChange}) => {

  return (
    <div className='buttonBox'>
      <Row>
        <Col sm={12} md={5}>
          <Button bg="light" variant="warning" onClick={()=>{handleCityChange('current')}}>Current Location</Button>
        </Col>
        {cities.map((item) => {
          return (
            <Col>
              <Button variant="outline-light" onClick={()=>{handleCityChange(item)}}>{item}</Button>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default WeatherButton