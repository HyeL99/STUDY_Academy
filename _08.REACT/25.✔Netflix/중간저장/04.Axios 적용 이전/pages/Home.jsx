//api를 불러오기 위한 세팅
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    let movieData = useSelector(state => state.movies)
  },[])
  return (
    <div>Home - 대문페이지입니다.</div>
  )
}

export default Home