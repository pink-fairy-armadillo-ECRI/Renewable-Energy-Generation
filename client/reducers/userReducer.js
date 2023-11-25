import * as types from '../constants/userTypes';

const initialState = {
  loading: false,
  states: [],
  inputLocation: '',
  error: ''
};

const userReducer = (state = initialState, action) => { 

  switch (action.type) {
    case types.FETCH_STATES_REQUEST:  
      return {
        ...state,
        loading: true
      }
    case FETCH_STATES_SUCCESS:
      return {
        loading: false,
        states: action.payload,
        error: ''
      }
    case FETCH_STATES_FAILURE:
      return {
        loading: false,
        states: [],
        error: action.payload
      }
    default: {
      return state;
    }
  }
}

export default userReducer;