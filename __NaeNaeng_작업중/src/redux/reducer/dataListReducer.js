import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  categorys:[
    {
      name : "베이킹",
      img : "/category/btn-baking.png"
    },
    {
        name : "집들이",
        img : "/category/btn-home.png"
    },
    {
        name : "야식",
        img : "/category/btn-night.png"
    },
    {
        name : "파티",
        img : "/category/btn-party.png"
    },
    {
        name : "이유식",
        img : "/category/btn-baby.png"
    },
    {
        name : "다이어트",
        img : "/category/btn-diet.png"
    },
    {
        name : "간식",
        img : "/category/btn-snack.png"
    },
    {
        name : "자취",
        img : "/category/btn-self.png"
    }
  ],
  recipes:[
    {
        title:"레시피1",
        writerEmail  : "철수",
        tag : ['사과','당근','비트','한끼대용'],
        time: 30
    },
    {
        title:"레시피2",
        writerEmail  : "영희",
        tag : ['사과','당근','비트','한끼대용'],
        time: 40
    },
    {
        title:"레시피3",
        writerEmail  : "민수",
        tag : ['사과','당근','비트','한끼대용'],
        time: 50
    },
    {
        title:"레시피4",
        writerEmail  : "바둑이",
        tag : ['사과','당근','비트','한끼대용'],
        time: 20
    }
  ],
  videos:[
    {
        title : "제목1",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+1"
    },
    {
        title : "제목2",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+2"
    },
    {
        title : "제목3",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+3"
    },
    {
        title : "제목4",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+4"
    },
    {
        title : "제목5",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+5"
    },
    {
        title : "제목6",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+6"
    },
    {
        title : "제목7",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+7"
    },
    {
        title : "제목8",
        link : "#",
        thumbnail : "https://via.placeholder.com/250x145/f4f4f4/666666/?text=Youtube+8"
    }
  ],
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