import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
);

serviceWorkerRegistration.register();
reportWebVitals();

/*
  설치한 것들

  == firebase ==
    https://firebase.google.com/docs/firestore/quickstart#web-version-9
    $ npm install firebase

  == 리액트 Sass ==
    $ yarn add sass

  == 리액트 라우터 ==
    https://reactrouter.com/en/main
    v6.3.0 : https://reactrouter.com/en/v6.3.0
    $ yarn add react-router-dom

  == 리덕스 툴킷 ==
    https://redux-toolkit.js.org/introduction/getting-started
    $ yarn add @reduxjs/toolkit
    
  == 리액트 리덕스 ==
    https://react-redux.js.org/
    $ yarn add react-redux

  == react-uuid ==
    https://www.npmjs.com/package/react-uuid
    $ npm i react-uuid

  == 리액트 아이콘 ==  
    https://react-icons.github.io/react-icons/
    $ npm install react-icons --save
*/