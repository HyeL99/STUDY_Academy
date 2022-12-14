//api를 불러오기 위한 세팅
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/action/movieAction';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state => state.movie) //store에서 가져옴

  console.log('home',popularMovies,topRatedMovies,upcomingMovies );
  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>
      {popularMovies.results && <Banner movie={ popularMovies.results[0]} />}

      <h2>popularMovies</h2>
      <MovieSlide movies={popularMovies.results} />
      <h2>topRatedMovies</h2>
      <MovieSlide movies={topRatedMovies.results} />
      <h2>upcomingMovies</h2>
      <MovieSlide movies={upcomingMovies.results} />
    </div>
  )
}
//조건부 렌더링을 걸지 않으면 데이터를 받아 오기 전에 에러 발생
export default Home;

