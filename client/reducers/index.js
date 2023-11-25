import { combineReducers } from 'redux';
import marketsReducer from './marketsReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  data: dataReducer,
});

export default reducers;