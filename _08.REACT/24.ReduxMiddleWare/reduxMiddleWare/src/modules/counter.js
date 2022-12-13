/*#####################################################################
############################### reducer ###############################
#####################################################################*/
//##thunk 미들웨어 적용 - 특정  thunk함수가 dispatch되면 1초 후 작동##

//액션 생성 함수
export const increase = () => {
  return {type: 'INCREASE'}
}
export const decrease = () => {
  return {type: 'DECREASE'}
}

//thunk함수 생성
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000)
}
export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000)
}



//초기값(객체가 아니라 그냥 숫자여도 됨)
const initialState = 0;

export default function counter(state = initialState, action){
  switch(action.type){
    case 'INCREASE':
      return ++state;
    case 'DECREASE':
      return --state;
    default:
      return state;
  }
}