import * as types from '../constants/stateTypes';

/*************************FETCH STATUS TO GET 52 STATES*************************/

/********************REQUEST STATUS********************/
export const fetchStateRequest = () => {
  return {
    type: types.FETCH_STATES_REQUEST
  }
}

/********************SUCCESS STATUS********************/
export const fetchStatesSuccess = data => {
  return {
    type: types.FETCH_STATES_SUCCESS,
    payload: data
  }
}

/********************FAILURE STATUS********************/
export const fetchStateFailure = error => {
  return {
    type: types.FETCH_STATES_FAILURE,
    payload: error
  }
}

/********************REQUEST STATUS********************/
export const fetchDataRequest = () => {
  return {
    type: types.FETCH_DATA_REQUEST
  }
}

/********************SUCCESS STATUS********************/
export const fetchDataSuccess = data => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload: data
  }
}

/********************FAILURE STATUS********************/
export const fetchDataFailure = error => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload: error
  }
}

/********************COMPARE STATE FUNCTIONALITY********************/
export const fetchCompareStateData = data => {
  return {
    type: types.FETCH_COMPARE_STATE_DATA,
    payload: data
  }
}

/*************************FETCH TO GET BREAKDOWN*************************/

// /********************REQUEST STATUS********************/
// export const fetchBreakDownRequest = () => {
//   return {
//     type: types.FETCH_BREAKDOWN_REQUEST
//   }
// }

// /********************SUCCESS STATUS********************/
// export const fetchBreakDownSuccess = data => {
//   return {
//     type: types.FETCH_BREAKDOWN_SUCCESS,
//     payload: data
//   }
// }

// /********************FAILURE STATUS********************/
// export const fetchBreakDownFailure = error => {
//   return {
//     type: types.FETCH_BREAKDOWN_FAILURE,
//     payload: error
//   }
// }

// /********************DISPATCHED METHOD********************/
// export const fetchBreakDown = (state) => {
//   return (dispatch) => {
//     dispatch(fetchBreakDownRequest)
//     axios.get(`/api/states/breakdown/${state}`)
//       .then(response => {
//         const users = response.data;
//         dispatch(fetchBreakDownSuccess(users))
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchBreakDownFailure(errorMsg))
//       })
//   }
// }
// /*************************FETCH TO GET TOP PLANTS*************************/

// /********************REQUEST STATUS********************/
// export const fetchTopPlantsRequest = () => {
//   return {
//     type: types.FETCH_TOP_PLANTS_REQUEST
//   }
// }

// /********************SUCCESS STATUS********************/
// export const fetchTopPlantsSuccess = states => {
//   return {
//     type: types.FETCH_TOP_PLANTS_SUCCESS,
//     payload: states
//   }
// }

// /********************FAILURE STATUS********************/
// export const fetchTopPlantsFailure = error => {
//   return {
//     type: types.FETCH_TOP_PLANTS_FAILURE,
//     payload: error
//   }
// }

// /********************DISPATCHED METHOD********************/
// export const fetchStatesTopPlant = (state) => {
//   return (dispatch) => {
//     dispatch(fetchTopPlantsRequest)
//     axios.get(`/api/states/top-plants/${state}`)
//       .then(response => {
//         const users = response.data;
//         dispatch(fetchTopPlantsSuccess(users))
//       })
//       .catch(error => {
//         const errorMsg = error.message;
//         dispatch(fetchTopPlantsFailure(errorMsg))
//       })
//   }
// }






