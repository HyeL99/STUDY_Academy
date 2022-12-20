import { configureStore } from "@reduxjs/toolkit";
import userDataListReducer from "./reducer/userDataListReducer";
import userDataReducer from "./reducer/userDataReducer";

const store = configureStore({
  reducer:{
    userDataList: userDataListReducer,
    userData: userDataReducer
  }
})

export default store;