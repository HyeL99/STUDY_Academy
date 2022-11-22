import React from 'react'

//props 대신 destructuring(구조분해)
const WeatherBox = ({weather}) => {
  console.log(weather);
  return (
    <div className='weatherBox'>
      <div className='text-dark h5'>{weather.name? weather.name:''}</div>
      <h2 className='text-light h1'>온도 : {weather.main? weather.main.temp:''}도 / 습도 : {weather.main? weather.main.humidity:''}%</h2>
      <h3 className='text-secondary h2'>{weather.weather? weather.weather[0].description:''}</h3>
    </div>
  )
}

export default WeatherBox