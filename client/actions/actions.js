import * as types from '../constants/actionTypes';

export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const updateChartData = newData => ({
  type: types.UPDATE_CHART_DATA,
  payload: newData,
});