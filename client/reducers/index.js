import { combineReducers } from 'redux';
import statesReducer from './stateReducer';
// import chartReducer from './chartReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  states: statesReducer,
});

export default reducers;