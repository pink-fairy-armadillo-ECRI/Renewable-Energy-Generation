import { combineReducers } from 'redux';
import dataReducer from './userReducer';
import chartReducer from './chartReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: dataReducer,
  chart: chartReducer,
});

export default reducers;