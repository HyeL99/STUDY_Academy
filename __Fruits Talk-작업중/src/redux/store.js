import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./reducer/userDataReducer";

const store = configureStore({
  reducer:{
    userData: userDataReducer,
  }
})

export default store;