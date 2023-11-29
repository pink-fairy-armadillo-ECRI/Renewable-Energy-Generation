import { combineReducers } from 'redux';
import statesReducer from './stateReducer';

const reducers = combineReducers({
  states: statesReducer,
});

export default reducers;
