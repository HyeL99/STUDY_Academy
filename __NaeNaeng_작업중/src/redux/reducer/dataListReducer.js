import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false
}

const dataListSlice = createSlice({
  name:'dataList',
  initialState,
  reducers:{
    dataListRequest:(state,action) => {
      state.loading = true;
    }
  }
})
export const { dataListRequest } = dataListSlice.actions;
export default dataListSlice.reducer;