const initialState = {
  count: 0,
}

const reducer = ( state=initialState, action) => {  //2개의 매개변수가 필요
  switch(action.type){
    case 'INCREMENT':
      return {...state,count: state.count+1};
      // state 객체 내에 다른 속성값은 유지시키고 count 속성값만 수정되도록 함
    default:
      return state;
  }
}
/*
const reducer = ( state=initialState, action) => {  //2개의 매개변수가 필요
  
  
  if(action.type === 'INCREMENT){
    return {...state,count: state.count+1};
  }
  return {...state}
  //reducer의 return값, 반드시 필요
}
*/
export default reducer;