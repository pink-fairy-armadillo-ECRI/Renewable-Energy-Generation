import * as types from '../constants/stateTypes';

const initialState = {
  loadingStates: false,
  loadingReNew: false,
  loadingBREAKDOWN: false,
  loadingTopPlants: false,
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
        loadingStates: true
      }
    case types.FETCH_STATES_SUCCESS:
      return {
        loadingStates: false,
        states: action.payload,
        error: ''
      }
    case types.FETCH_STATES_FAILURE:
      return {
        loadingStates: false,
        states: [],
        error: action.payload
      }

      /*************************GET RENEWABLE VS NON RENEWABLE*************************/
    case types.FETCH_REVSNRE_REQUEST: 
      return {
        ...state,
        loadingReNew: true
      }
    case types.FETCH_REVSNRE_SUCCESS:
      return {
        loadingReNew: false,
        reNew: action.payload,
        error: ''
      }
    case types.FETCH_REVSNRE_FAILURE:
      return {
        loadingReNew: false,
        reNew: [],
        error: action.payload
      }
      
      /*************************GET BREAKDOWN*************************/
    case types.FETCH_BREAKDOWN_REQUEST: 
      return {
        ...state,
        loadingBREAKDOWN: true
      }

    case types.FETCH_BREAKDOWN_SUCCESS: 
      return {
        loadingBREAKDOWN: false,
        breakDown: action.payload,
        error: ''
      }
    case types.FETCH_BREAKDOWN_FAILURE: 
      return {
        loadingBREAKDOWN: false,
        breakDown: [],
        error: action.payload
      }
      /*************************GET TOP PLANTS*************************/
    case types.FETCH_TOP_PLANTS_SUCCESS: 
      return {
        ...state,
        loadingTopPlants: true
      }

    case types.FETCH_TOP_PLANTS_REQUEST: 
      return {
        loadingTopPlants: false,
        topPlants: action.payload,
        error: ''
      }

    case types.FETCH_TOP_PLANTS_FAILURE: 
      return {
        loadingTopPlants: false,
        topPlants: [],
        error: action.payload
      }



    default: {
      return state;
    }
  }
}

export default userReducer;