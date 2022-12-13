//api를 불러오기 위한 세팅
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/movieAction';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>Home - 대문페이지입니다.</div>
  )
}

export default Home