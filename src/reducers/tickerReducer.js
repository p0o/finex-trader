import { tickerTypes } from '../actionCreators';

const ticker = (state = {}, action) => {
  switch (action.type) {
    case tickerTypes.LOAD_TICKER:
      return {
        ...state,
        ...action.res,
        loaded: true,
      };
    default:
      return state;
  }
};

export default ticker;
