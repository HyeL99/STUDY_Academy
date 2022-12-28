import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingData:{
    username:'',
    email:'',
    userId:'user#uid',
    profile:'',
    password: '',
  },
  AccountData: {
    
  }
}

const userDataSlice = createSlice({
  name:'userData',
  initialState,
  reducers:{
    setUserEmail:(state,action) => {
      state.settingData.email = action.payload.email;
      state.settingData.password = action.payload.password;
    },
    setUserUid:(state, action) => {
      state.settingData.userId = `userId#${action.payload.uid}`;
    },
    addUsername:(state, action) => {
      state.settingData.username = action.payload.username;
    },
    setAccountData:(state,action) => {
      state.AccountData = action.payload.accountData;
    },
    addProfile:(state,action) => {
      state.settingData.profile = action.payload.profile;
    }
  }
})

export const { setUserEmail, addUsername,setUserUid,setAccountData,addProfile } = userDataSlice.actions;

export default userDataSlice.reducer;