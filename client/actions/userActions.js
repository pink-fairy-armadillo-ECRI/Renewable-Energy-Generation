import axios from 'axios';
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

export const fetchStates = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios.get('/api/states')
      .then(response => {
        const users = response.data;
        dispatch(fetch)
      })
      .catch(error => {
        const errorMsg = error.message
      })
  }
}