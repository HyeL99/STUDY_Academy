// reducer - 3개 API를 넘겨받음
const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {}
};

const movieReducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type){
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        popularMovies:payload.popularMovies,
        topRatedMovies:payload.topRatedMovies,
        upcomingMovies:payload.upcomingMovies,
      };
    default:
      return {...state};
  }
}

export default movieReducer;