const initialState = {
  state: '0'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADDCONTENTS':
      return {...state}
    default:
      return {...state}
  }
}

export default reducer;