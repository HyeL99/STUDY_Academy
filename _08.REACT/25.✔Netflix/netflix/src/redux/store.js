import {legacy_createStore as createStore, applyMiddleware} from 'redux'
// createStoredml 가로줄은 redux toolkit을 쓰라는 의미에서 보여주는 것, 오류 아님
// 해결 - legacy_createStore as createStore
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;