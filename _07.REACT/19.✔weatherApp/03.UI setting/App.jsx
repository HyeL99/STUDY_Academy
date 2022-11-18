/*
  현재 내 위치기반 날씨 가져오기
*/
import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import {Container} from 'react-bootstrap';

const APIKEY = "3b5797a94ba8a11d6528a37ddb247d39";
function App() {
  let lat = 0;
  let lon = 0;
  const getCurrentLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        //console.log('현재 내 위치는?',lat,lon)
      });
    } else {
      return new Error('Geolocation is not supported by this browser.')
    }
  }

  const getWeather = async (lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
    let response = await fetch(url);  //비동기적
    //url을 호출해서 데이터를 가져올 때까지 기다림
    let data = await response.json();
    //fetch함수로 불러왔을 때는 그대로 사용할 수 없음,json()
    console.log(data)
  }

  useEffect(() => {
    getCurrentLocation();
    console.log(lat,lon)
    getWeather(lat,lon);
  }, [])  //화면 로드시 단 한번 내 위치값을 알아옴
  
  getCurrentLocation();

  return (
    <>
      <Container>
        <WeatherBox />
        <WeatherButton />
      </Container>
    </>
  );
}

export default App;
