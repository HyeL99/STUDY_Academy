import React,{ useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import {Container} from 'react-bootstrap';
import {ClimbingBoxLoader} from "react-spinners";

/*
  1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
  2. 날씨 정보에는 도시, 섭씨 화씨 날씨상태
  3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
  4. 도시버튼을 클릭할때마다 도시별 날씨
  5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나옴
  6. 데이터를 가져오는 동안 로딩 스피너가 돈다


  ==== 현재 내 위치값을 구하기 위해서는 ====
  - 구글에서 get Current Location javascript로 검색
    ->  https://www.w3schools.com/html/html5_geolocation.asp
  - 날씨 API https://openweathermap.org/  > Current Weather Data > API doc >  API call 주소


  ==== 로딩 스피너 추가 ====
  - 구글에서 react spinner 검색
  https://www.npmjs.com/package/react-spinners
*/

const APIKEY = "3b5797a94ba8a11d6528a37ddb247d39";

function App() {
  const [weather,setWeather] = useState(null);  //날씨객체
  const [city,setCity] = useState("");  //버튼으로 선택한 도시
  const [loading, setLoading] = useState(false); //로딩 스피너 상태

  const cities = ["London","New York","Hong Kong"];

  //데이터가 있는지 없는지 알아와야 함
  let lat = 0;
  let lon = 0;

  useEffect(()=>{
    console.log("선택한 city?",city)
  },[city]);

  //현재 위치(위도와 경도)를 알아오는 함수 정의
  const getCurrentLocation = async () => {
    if(navigator.geolocation){
      await navigator.geolocation.getCurrentPosition((position)=>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log('현재 내 위치는?',lat,lon);
        getWeatherByCurrentLocation(lat,lon);
      });
    } else {
      return new Error('Geolocation is not supported by this browser.')
    }
  }

  //현재 위치의 위도/경도 값을 바탕으로 날씨를 가져오는 함수 정의
  const getWeatherByCurrentLocation = async () => {
    setLoading(true); //fetch 시작 전 로딩 작동
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    let response = await fetch(url);  //비동기적
    //url을 호출해서 데이터를 가져올 때까지 기다림
    let data = await response.json();
    //fetch함수로 불러왔을 때는 그대로 사용할 수 없음,json()
    console.log(data);
    setWeather(data);
    setLoading(false); //fetch 끝 로딩 끝
  }

  const getWeatherByCity = async () => {
    setLoading(true); //fetch 시작 전 로딩 작동
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
    let response = await fetch(url);  //비동기적
    //url을 호출해서 데이터를 가져올 때까지 기다림
    let data = await response.json();
    //fetch함수로 불러왔을 때는 그대로 사용할 수 없음,json()
    console.log(data);
    setWeather(data);
    setLoading(false); //fetch 끝 로딩 끝
  }

  //화면 로드시 단 한번 내 위치값을 알아오고, city값 바뀔 때마다 날씨 로드
  useEffect(() => {
    if(city === ''){
      setLoading(true);
      getCurrentLocation();
    }else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  //선택된 모양을 바꿔주기 위해 selectedCity={city} 추가
  return (
    <>
      <Container>
        {loading && <ClimbingBoxLoader color="#d64936" size={30}/>}
        {!loading && <WeatherBox weather={weather? weather : []}/>}
        {!loading && <WeatherButton setCity={setCity} cities={cities} selectedCity={city} />}
      </Container>
    </>
  );
}

export default App;
