import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Footer from '../components/Footer';
import MovieInfo from '../components/MovieInfo';
import MovieSlide from '../components/MovieSlide';
import { movieAction } from '../redux/action/movieAction';

const MovieDetail = () => {
  const dispatch = useDispatch();

  const {movieDetails ,movieKeywords, loading, movieVideos, movieSimilar} = useSelector(state => state.movie);
  let movieId = useParams().id;

  useEffect(()=>{ //화면이 로드되자마자 바로 데이터를 불러와야함, 리덕스 미들웨어 이용
    dispatch(movieAction.getMovieDetails(movieId))
    window.scrollTo(0,0);
  },[movieId]);

  if(loading){
    return (
      <div className="loaderContainer">
        <PuffLoader color="white" loading={loading} size={200} className='spinner'/>
      </div>
    )
  }
  console.log(movieDetails,movieKeywords, movieVideos,movieSimilar);

  return (
    <div>
      <MovieInfo movieDetails={movieDetails} videos={movieVideos}/>
      <Container className='similarMoviesArea'>
        <h2>관련 영화</h2>
        <MovieSlide movies={movieSimilar} />
      </Container>
      <Footer />
    </div>
     
  )
}

export default MovieDetail