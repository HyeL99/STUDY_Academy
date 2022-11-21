/*
  현재 내 위치기반 날씨 가져오기
*/
import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import {Container} from 'react-bootstrap';

const APIKEY = "3b5797a94ba8a11d6528a37ddb247d39";

function App() {
  const [weather,setWeather] = useState(null);
  //데이터가 있는지 없는지 알아와야 함
  let lat = 0;
  let lon = 0;

  const weatherData = [
    {
      name:"London",
      lat:51.5072,
      long:-0.1275
    },
    {
      name:"NewYork",
      lat:40.664167,
      long:-73.938611
    },
    {
      name:"Seoul",
      lat:37.56667,
      long:126.97806
    },
  ]

  //현재 위치(위도와 경도)를 알아오는 함수 정의
  const getCurrentLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log('현재 내 위치는?',lat,lon);
      });
    } else {
      return new Error('Geolocation is not supported by this browser.')
    }
  }

  //위도/경도 값을 바탕으로 날씨를 가져오는 함수 정의
  const getWeather = async () => {
    if(weather === null){
      await getCurrentLocation()
    } else {
      weather.map((item)=>{
        if(item.name===weather){
          lat = item.lat;
          lon = item.lon;
        }
      })
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
    let response = await fetch(url);  //비동기적
    //url을 호출해서 데이터를 가져올 때까지 기다림
    let data = await response.json();
    //fetch함수로 불러왔을 때는 그대로 사용할 수 없음,json()
    console.log(data);
    setWeather(data);
  }

  //화면 로드시 단 한번 내 위치값을 알아옴
  useEffect(() => {
    async function callAsyncFunction(){
      await getWeather(lat,lon);
    }
    callAsyncFunction();
  }, []);
  getCurrentLocation();

  return (
    <>
      <Container>
        <WeatherBox weather={weather?weather:[]}/>:
        <WeatherButton setWeather={setWeather}/>
      </Container>
    </>
  );
}

export default App;
