import api from '../api'
//미들웨어부분
// popular : https://developers.themoviedb.org/3/movies/get-popular-movies

//로딩 스피너 부분 추가
//장르 추가
//디테일 추가

const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> root에 .env파일 생성
//미들웨어는 함수가 함수를 리턴
function getMovies(){

  return async (dispatch) => {
    try{
      dispatch({type:'GET_MOVIE_REQUEST'}) //로딩 전

      const popularMovieApi = await api.get(`/movie/popular?api_key=${APIkey}&language=ko-KR&page=1`);
      const topRatedMovieApi = await api.get(`/movie/top_rated?api_key=${APIkey}&language=ko-KR&page=1`);
      const upcomingMovieApi = await api.get(`/movie/upcoming?api_key=${APIkey}&language=ko-KR&page=1`);
      //장르도 같이 가져옴
      const genresApi = await api.get(`/genre/movie/list?api_key=${APIkey}&language=ko-KR`)
      //3개의 데이터를 병렬로 동시에 -> 4개의 데이터를 병렬로 동시에
      //let data = await Promise.all([ popularMovieApi,topRatedMovieApi,upcomingMovieApi])
      //console.log('data', data)

      //data를 따로 받아옴
      let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([ popularMovieApi,topRatedMovieApi,upcomingMovieApi,genresApi])
      // console.log('popularMovies data', popularMovies);
      // console.log('topRatedMovies data', topRatedMovies);
      // console.log('upcomingMovies data',  upcomingMovies);

      //데이터 도착 후
      dispatch({
        type:"GET_MOVIE_SUCCESS",
        payload:{
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres
        } //data필드만 보내줌. Axios는 받은 데이터를 data필드에 넣어서 줌
      })
    } catch (error) { //에러 핸들링
      dispatch({type:'GET_MOVIE_FAIL'}) //로딩 전
    }
  }
}

//디테일 데이터 가져오기
function getMovieDetails(id){

  return async (dispatch) => {
    try{
      dispatch({type:'GET_MOVIE_REQUEST'}) //로딩 전

      const genresApi = await api.get(`/genre/movie/list?api_key=${APIkey}&language=ko-KR`)
      const movieDetailApi = await api.get(`/movie/${id}?api_key=${APIkey}&language=ko-KR`);
      const movieKeywordsApi = await api.get(`/movie/${id}/keywords?api_key=${APIkey}&language=ko-KR`);
      const movieVideosApi = await api.get(`/movie/${id}/videos?api_key=${APIkey}&language=ko-KR`);
      const movieSimilarApi = await api.get(`/movie/${id}/similar?api_key=${APIkey}&language=ko-KR&page=1`);

      let [movieDetails, movieKeywords,movieVideos, movieSimilar, genreList] = await Promise.all([ movieDetailApi, movieKeywordsApi,movieVideosApi, movieSimilarApi,genresApi])

      console.log(movieSimilar)

      dispatch({
        type:"GET_MOVIE_D_SUCCESS",
        payload:{
          movieDetails: movieDetails.data,
          movieKeywords: movieKeywords.data,
          movieVideos:movieVideos.data.results,
          movieSimilar: movieSimilar.data.results,
          genreList: genreList.data.genres
        }
      })
    } catch (error) {
      dispatch({type:'GET_MOVIE_FAIL'}) //로딩 전
    }
  }
}
export const movieAction = {getMovies, getMovieDetails};

/*
  외부 API 호출 방법 3가지
  1. Fetch
  2. Ajax
  3. Axios https://axios-http.com/kr/
*/