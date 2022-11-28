import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetails';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router = createBrowserRouter([  //각 페이지들 정의
  {
    path: "/",
    element: <Root />,  //컴포넌트 연결로 바꿔줌
    errorElement:<NotFound />,
    
    children:[  //자식경로를 만들어줌(Outlet)
      { //기본적으로 보여줄 페이지
        index:true,
        element: <Home />,
      },
      {//기본적으로 보여줄 페이지
        path:"videos",
        element: <Videos />,
      },
      {
        path:"videos/:videoId",
        element: <VideoDetail />,
        //주소장에 videos/dsaf 처럼 아무거나 입력하면 다 디테일 페이지로 넘어간다.
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
