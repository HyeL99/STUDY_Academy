// reducer - 3개 API를 넘겨받음
const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
  movieDetails:{},
  movieKeywords:{},
  movieVideos:[],
  movieSimilar:[],
  genreList:[],
  loading: true
};

const movieReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type){ //로딩 시작
    case 'GET_MOVIE_REQUEST':
      return {...state, loading:true};
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        popularMovies:payload.popularMovies,
        topRatedMovies:payload.topRatedMovies,
        upcomingMovies:payload.upcomingMovies,
        genreList:payload.genreList,
        loading: false
      };
    case 'GET_MOVIE_FAIL':
      return {...state, loading:false};
    case 'GET_MOVIE_D_SUCCESS':
      return {
        ...state,
        movieDetails: payload.movieDetails,
        movieKeywords: payload.movieKeywords,
        movieVideos: payload.movieVideos,
        movieSimilar: payload.movieSimilar,
        loading: false
      };
    default:
      return {...state};
  }
}

export default movieReducer;