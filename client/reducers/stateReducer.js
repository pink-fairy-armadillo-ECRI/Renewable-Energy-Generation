import * as types from '../constants/stateTypes';

const initialState = {
  loadingStates: false,
  loadingData: false,
  states: [],
  data: {},
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_STATES_REQUEST:
      return {
        ...state,
        loadingStates: true,
      };
    case types.FETCH_STATES_SUCCESS:
      return {
        ...state,
        loadingStates: false,
        states: action.payload,
        error: '',
      };
    case types.FETCH_STATES_FAILURE:
      return {
        ...state,
        loadingStates: false,
        states: [],
        error: action.payload,
      };
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loadingData: true,
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingData: false,
        data: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default userReducer;
