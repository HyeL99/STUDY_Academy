import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { movieAction } from '../redux/action/movieAction';

const MovieDetail = () => {
  const dispatch = useDispatch();

  const {movieDetails ,movieKeywords, loading} = useSelector(state => state.movie);
  let movieId = useParams().id;

  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    dispatch(movieAction.getMovieDetails(movieId))
  },[movieId]);

  if(loading){
    return (
    <div className="loaderContainer">
      <PuffLoader color="white" loading={loading} size={200} className='spinner'/>
    </div>)
  }
  console.log(movieDetails,movieKeywords);
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail