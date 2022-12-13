import api from '../api'
//미들웨어부분
// popular : https://developers.themoviedb.org/3/movies/get-popular-movies
const api_key = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> root에 .env파일 생성
//미들웨어는 함수가 함수를 리턴
function getMovies(){
  return async (dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular?api_key=${api_key}&language=ko-KR&page=1`);


    // let url01 = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    // let res01 = await fetch(url01);
    // let data01 = await res01.json();

    // let url02 = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
    // let res02 = await fetch(url02);
    // let data02 = await res02.json();

    // let url03 = `
    // https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
    // let res03 = await fetch(url03);
    // let data03 = await res03.json();
  }
}

export const movieAction = {getMovies};

/*
  외부 API 호출 방법 3가지
  1. Fetch
  2. Ajax
  3. Axios https://axios-http.com/kr/
*/