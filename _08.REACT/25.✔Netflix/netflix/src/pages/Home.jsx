//api를 불러오기 위한 세팅
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/action/movieAction';
import PuffLoader from "react-spinners/PuffLoader";
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies, loading} = useSelector(state => state.movie) //store에서 가져옴

  console.log('home',popularMovies,topRatedMovies,upcomingMovies );
  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    dispatch(movieAction.getMovies())
  },[]);

  if(loading){
    return (
    <div className="loaderContainer">
      <PuffLoader color="white" loading={loading} size={200} className='spinner'/>
    </div>)
  }
  return (
    <div id='mainHome'>
      {popularMovies.results && <Banner movie={ popularMovies.results[0]} />}
        <div className="slideContainer">
        <h2 id='popularArea'>오늘의 화제작</h2>
        <MovieSlide movies={popularMovies.results} />
        <h2 id='topRatedArea'>평점이 와르르</h2>
        <MovieSlide movies={topRatedMovies.results} />
        <h2 id='upcomingArea'>개봉예정작</h2>
        <MovieSlide movies={upcomingMovies.results} />
      </div>
    </div>
  )
}
//조건부 렌더링을 걸지 않으면 데이터를 받아 오기 전에 에러 발생
export default Home;

