import { configureStore } from "@reduxjs/toolkit";
import dataListReducer from "./reducer/dataListReducer";

const store = configureStore({
  reducer:{
    dataList:dataListReducer
  }
})

export default store;