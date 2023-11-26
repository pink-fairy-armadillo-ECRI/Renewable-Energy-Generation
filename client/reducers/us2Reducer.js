import * as types from '../constants/userTypes';

const initialState = {
  loading: false,
  states: [],
  reNew: {},
  breakDown: {},
  topPlants: {},
  inputLocation: '',
  error: ''
};

const userReducer = (state = initialState, action) => { 

  switch (action.type) {
/*************************GET 50 STATES*************************/
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

      /*************************GET RENEWABLE VS NON RENEWABLE*************************/
    case types.FETCH_REVSNRE_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case types.FETCH_REVSNRE_SUCCESS:
      return {
        loading: false,
        reNew: action.payload,
        error: ''
      }
    case types.FETCH_REVSNRE_FAILURE:
      return {
        loading: false,
        reNew: [],
        error: action.payload
      }
      
      /*************************GET 50 BREAKDOWN*************************/
    case types.FETCH_BREAKDOWN_REQUEST: 
      return {
        ...state,
        loading: true
      }

    case types.FETCH_BREAKDOWN_SUCCESS: 
      return {
        loading: false,
        breakDown: action.payload,
        error: ''
      }
    case types.FETCH_BREAKDOWN_FAILURE: 
      return {
        loading: false,
        breakDown: [],
        error: action.payload
      }
      /*************************GET TOP PLANTS*************************/
    case types.FETCH_TOP_PLANTS_SUCCESS: 
      return {
        ...state,
        loading: true
      }

    case types.FETCH_TOP_PLANTS_REQUEST: 
      return {
        loading: false,
        topPlants: action.payload,
        error: ''
      }

    case types.FETCH_TOP_PLANTS_FAILURE: 
      return {
        loading: false,
        topPlants: [],
        error: action.payload
      }



    default: {
      return state;
    }
  }
}

export default userReducer;