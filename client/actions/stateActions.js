import * as types from '../constants/stateTypes';
import axios from 'axios';

export const fetchStateRequest = () => {
  return {
    type: types.FETCH_STATES_REQUEST,
  };
};

export const fetchStatesSuccess = (data) => {
  return {
    type: types.FETCH_STATES_SUCCESS,
    payload: data,
  };
};

export const fetchStateFailure = (error) => {
  return {
    type: types.FETCH_STATES_FAILURE,
    payload: error,
  };
};

export const fetchStates = () => {
  return (dispatch) => {
    dispatch(fetchStateRequest());
    axios
      .get('/api/states')
      .then((response) => {
        const users = response.data;
        dispatch(fetchStatesSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchStateFailure(errorMsg));
      });
  };
};

export const fetchDataRequest = () => {
  return {
    type: types.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = (state) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .post(`/api/states/data?state=` + state)
      .then((response) => {
        const users = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};
