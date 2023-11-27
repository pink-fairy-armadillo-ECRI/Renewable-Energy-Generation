import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@redux.js/toolkit' 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers/index';
// const store=con
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

// npm install @babel/preset-react