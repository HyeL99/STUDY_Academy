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
    updateUserData:(state,action)=>{
      state.userData = action.payload.userData;
    },
    updateChatrooms:(state,action)=>{
      state.chatrooms = action.payload.chatrooms;
    },
    updateMessages:(state,action)=>{
      state.messages = action.payload.messages;
    },
    updateUserLoginData:(state,action)=>{
      state.userLoginData = action.payload.userLoginData;
    },
  }
})

export const { getDataRequest, getDataSuccess, getDataFail, updateUserData, updateChatrooms, updateMessages, updateUserLoginData } = userDataListSlice.actions;

export default userDataListSlice.reducer;