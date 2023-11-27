import * as types from '../constants/actionTypes';

const initialState = {
  chartData: {re: 25, nre: 75},
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CHART_DATA:
      // fetch here to {RE,NRE} endpoint
      fetch('https://localhost:3000/data?=Washington', {method: 'POST'})
        .then(response => response.json())
        .then(data => {
          return {
            ...state,
            chartData: {re: data.re, nre: data.nre},
          };
        })
        .catch(err => console.log(err));
    default: {
      return state;
    }
  }
};

export default chartReducer;