import * as types from '../constants/actionTypes';

export const updateChartData = (newData) => ({
  type: types.UPDATE_CHART_DATA,
  payload: newData,
});
