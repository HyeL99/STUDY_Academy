const initialState = {
  count: 0,
}

const reducer = ( state=initialState, action) => {
  // 2개의 매개변수가 필요
  // state   - 어떤 상태인지 알려줘야함(초기값 설정 필수)
  // action  - 어떤 행동을 할지 행동지침
  // reducer - store를 바꿔주는 역할 (return값으로 바꿈)
  switch(action.type){
    case 'INCREMENT':
      return {...state,count: state.count+action.payload.num};
      // state 객체 내에 다른 속성값은 유지시키고 count 속성값만 수정되도록 함
    case 'DECREMENT':
      return {...state,count: state.count-action.payload.num};
    default:
      return {...state};
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