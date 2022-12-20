import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: true,
  userData:[],
  chatrooms:[],
  messages:[],
  userLoginData:[]
}

const userDataListSlice = createSlice({
  name:'userDataList',
  initialState,
  reducers:{
    getDataRequest:(state,action)=>{
      state.loading = true;
    },
    getDataSuccess:(state,action)=>{
      state.userData = action.payload.userData;
      state.chatrooms = action.payload.chatrooms;
      state.messages = action.payload.messages;
      state.userLoginData = action.payload.userLoginData;
    },
    getDataFail:(state,action)=>{
      state.loading = true;
    },
  }
})

export const { getDataRequest, getDataSuccess, getDataFail } = userDataListSlice.actions;

export default userDataListSlice.reducer;