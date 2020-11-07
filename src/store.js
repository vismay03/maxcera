import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { isLogin } from './pages/utils/in';
const initialState = {}
const reducer = combineReducers ({
   isLogin: isLogin
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
