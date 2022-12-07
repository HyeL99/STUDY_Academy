const initialState = {
  state: 0,
}

const reducer = ( state=initialState, action) => {  //2개의 매개변수가 필요
  switch(action.type){
    case 'INCREASE':
      return state +1;
    default:
      return state;
  }
}
export default reducer;