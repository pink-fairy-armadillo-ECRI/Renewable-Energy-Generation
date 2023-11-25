import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: dataReducer,
});

export default reducers;