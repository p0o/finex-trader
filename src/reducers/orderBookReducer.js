import { orderBookTypes } from '../actionCreators';

const orderBook = (state = { asks: {}, bids: {} }, action) => {
  switch (action.type) {
    case orderBookTypes.UPDATE_BIDS:
      return {
        ...state,
        bids: {
          ...state.bids,
          [`${action.price}`]: state.bids[`${action.price}`] + action.amount,
        },
      };
    case orderBookTypes.UPDATE_ASKS:
      return {
        ...state,
        asks: {
          ...state.asks,
          [`${action.price}`]: state.asks[`${action.price}`] + action.amount,
        },
      };
    default:
      return state;
  }
};

export default orderBook;
