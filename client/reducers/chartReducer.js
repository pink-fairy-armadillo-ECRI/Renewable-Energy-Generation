import * as types from '../constants/actionTypes';

const initialState = {
  chartData: [],
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CHART_DATA:
      return {
        ...state,
        chartData: action.payload,
      };
      default: {
        return state;
      }
  }
};

export default chartReducer;