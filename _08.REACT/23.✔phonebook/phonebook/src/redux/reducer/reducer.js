const initialState = {
  state: '0'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'a':
      return {...state}
    default:
      return {...state}
  }
}

export default reducer;