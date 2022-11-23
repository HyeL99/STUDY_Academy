/*
  현재 내 위치값 가져오기
*/
import React,{useEffect} from 'react';
import './App.css';

const APIKEY = "3b5797a94ba8a11d6528a37ddb247d39";
function App() {
  let lat = 0;
  let lon = 0;
  const getCurrentLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        console.log('현재 내 위치는?',lat,lon)
      });
    } else {
      return new Error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])  //화면 로드시 단 한번 내 위치값을 알아옴
  
  getCurrentLocation();

  return (
    <>
      <h1>날씨 앱을 만드는 중입니다.</h1>
      <section></section>
    </>
  );
}

export default App;
