import * as types from '../constants/stateTypes';

const initialState = {
  loadingStates: false,
  loadingData: false,
  states: [],
  data: {},
  error: '',
  compareStatesData: {}
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
        ...state,
        loadingStates: false,
        states: action.payload,
        error: ''
      }
    case types.FETCH_STATES_FAILURE:
      return {
        ...state,
        loadingStates: false,
        states: [],
        error: action.payload
      }

      /*************************GET STATE DATA*************************/
    case types.FETCH_DATA_REQUEST: 
      return {
        ...state,
        loadingData: true
      }
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loadingData: false,
        data: action.payload,
        error: ''
      }
    case types.FETCH_COMPARE_STATE_DATA:
      const index = action.payload.index;
      const newObj = {...state.compareStatesData}
      newObj[index] = action.payload

      return {
        ...state,
        loadingData: false,
        error: '',
        compareStatesData: newObj
      }
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loadingData: false,
        data: {},
        error: action.payload
      }

    default: {
      return state;
    }
  }
}

export default userReducer;


      
    //   /*************************GET BREAKDOWN*************************/
    //   case types.FETCH_BREAKDOWN_REQUEST: 
    //   return {
    //     ...state,
    //     loadingBREAKDOWN: true
    //   }

    // case types.FETCH_BREAKDOWN_SUCCESS: 
    //   return {
    //     loadingBREAKDOWN: false,
    //     breakDown: action.payload,
    //     error: ''
    //   }
    // case types.FETCH_BREAKDOWN_FAILURE: 
    //   return {
    //     loadingBREAKDOWN: false,
    //     breakDown: [],
    //     error: action.payload
    //   }
    //   /*************************GET TOP PLANTS*************************/
    // case types.FETCH_TOP_PLANTS_SUCCESS: 
    //   return {
    //     ...state,
    //     loadingTopPlants: true
    //   }

    // case types.FETCH_TOP_PLANTS_REQUEST: 
    //   return {
    //     loadingTopPlants: false,
    //     topPlants: action.payload,
    //     error: ''
    //   }

    // case types.FETCH_TOP_PLANTS_FAILURE: 
    //   return {
    //     loadingTopPlants: false,
    //     topPlants: [],
    //     error: action.payload
    //   }



    // const initialState = {
    //   loadingStates: false,
    //   loadingData: false,
    //   states: [],
    //   reNew: {},
    //   breakDown: {},
    //   topPlants: {},
    //   inputLocation: '',
    //   error: ''
    // };