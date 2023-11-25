import * as types from '../constants/actionTypes';

export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});

