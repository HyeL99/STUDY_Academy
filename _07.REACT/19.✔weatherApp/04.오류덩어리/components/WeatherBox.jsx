import React from 'react'

//props 대신 destructuring(구조분해)
const WeatherBox = ({weather}) => {
  return (
    <div className='weatherBox'>
      <div className='text-light h4'>{weather.name}</div>
      <h2 className='text-warning h1'>온도 : {weather.main.temp}도 / 습도 : {weather.main.humidity}화씨</h2>
      <h3 className='text-info h2'>{weather.weather.description}</h3>
    </div>
  )
}

export default WeatherBox