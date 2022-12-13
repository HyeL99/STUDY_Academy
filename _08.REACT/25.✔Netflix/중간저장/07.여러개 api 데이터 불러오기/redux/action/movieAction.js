import api from '../api'
//미들웨어부분
// popular : https://developers.themoviedb.org/3/movies/get-popular-movies
const api_key = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> root에 .env파일 생성
//미들웨어는 함수가 함수를 리턴
function getMovies(){
  return async (dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${api_key}&language=ko-KR&page=1`);
    const topRatedMovieApi = await api.get(`/movie/top_rated?api_key=${api_key}&language=ko-KR&page=1`);
    const upcomingMovieApi = await api.get(`/movie/upcoming?api_key=${api_key}&language=ko-KR&page=1`);
    //3개의 데이터를 병렬로 동시에
    //let data = await Promise.all([ popularMovieApi,topRatedMovieApi,upcomingMovieApi])
    //console.log('data', data)

    //data를 따로 받아옴
    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([ popularMovieApi,topRatedMovieApi,upcomingMovieApi])
    console.log('popularMovies data', popularMovies);
    console.log('topRatedMovies data', topRatedMovies);
    console.log('upcomingMovies data',  upcomingMovies);
  }
}

export const movieAction = {getMovies};

/*
  외부 API 호출 방법 3가지
  1. Fetch
  2. Ajax
  3. Axios https://axios-http.com/kr/
*/