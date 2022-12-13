/*#####################################################################
############################### reducer ###############################
#####################################################################*/

//액션 생성 함수
export const increase = () => {
  return {type: 'INCREASE'}
}
export const decrease = () => {
  return {type: 'DECREASE'}
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