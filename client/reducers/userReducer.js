import * as types from '../constants/actionTypes';

const initialState = {
  loading: false,
  states: [],
  inputLocation: '',
};

const userReducer = (state = initialState, action) => { 

  switch (action.type) {
    case types.GET_RENUABLE: 
    
    default: {
      return state;
    }
  }
}

export default userReducer;