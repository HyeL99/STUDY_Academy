import { createSlice } from "@reduxjs/toolkit"; 

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

//리듀서를 만들어줌, 객체를 매개변수로, 3개필요
const movieSlice = createSlice({
  name:'movie',
  initialState,
  reducers:{  //기존에 if-elseif 또는 switch 구문이 했던 역할을 수행 (함수 형태, 매개변수 2개)
    getMovieRequest: (state,action) => {
      state.loading = true;
    },
    getMovieSuccess: (state,action) => {
      state.popularMovies = action.payload.popularMovies;
      state.topRatedMovies = action.payload.topRatedMovies;
      state.upcomingMovies = action.payload.upcomingMovies;
      state.genreList = action.payload.genreList;
      state.loading =  false
    },
    getMovieFail: (state,action) => {
      state.loading = true;
    },
    getMovieDetailSuccess: (state,action) => {
      state.movieDetails = action.payload.movieDetails;
      state.movieKeywords = action.payload.movieKeywords;
      state.movieVideos = action.payload.movieVideos;
      state.movieSimilar = action.payload.movieSimilar;
      state.loading = false;
    }
  }
})

export const { getMovieRequest, getMovieSuccess, getMovieFail, getMovieDetailSuccess } = movieSlice.actions
//export const movieAction = movieSlice.actions;
export default movieSlice.reducer;



/*
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
*/