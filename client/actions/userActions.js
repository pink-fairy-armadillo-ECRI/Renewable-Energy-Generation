import * as types from '../constants/userTypes';

export const fetchStateRequest = () => {
  return {
    type: types.FETCH_STATES_REQUEST
  }
}

export const fetchStatesSuccess = states => {
  return {
    type: types.FETCH_STATES_SUCCESS,
    payload: states
  }
}

export const fetchStateFailure = error => {
  return {
    type: types.FETCH_STATES_FAILURE,
    payload: error
  }
}