import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CounterContainers from './containers/CounterContainers';

function App() {
  return (
    <CounterContainers />
  );
}

export default App;

/*
  == 리덕스 ==
    https://redux.js.org/
    https://react-redux.js.org/
    $ yarn add redux

  == 리액트 리덕스 ==
    https://react-redux.js.org/
    $ yarn add react-redux
    
  == 리덕스 미들웨어 (redux-thunk) ==
    https://redux.js.org/understanding/history-and-design/middleware
    https://github.com/reduxjs/redux-thunk
    $ yarn add redux-thunk

  == 리덕스 데브툴스 ==
    https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
    https://github.com/zalmoxisus/redux-devtools-extension
    $ npm install --save redux-devtools-extension
*/