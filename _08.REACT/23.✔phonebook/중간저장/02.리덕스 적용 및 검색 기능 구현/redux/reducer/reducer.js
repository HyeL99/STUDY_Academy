const initialState = {
  contactList: [],
  keyword:''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_CONTACT':
      return {...state,contactList:[...state.contactList,action.payload]}
    case 'SEARCH':
      return {...state, keyword:action.payload}
    default:
      return {...state}
  }
}

export default reducer;