import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const dataReducer = (state = initialState, action) => { 

  switch (action.type) {
    case types.ADD_MARKET:
  }
}

export default dataReducer;