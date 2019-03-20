export const tickerTypes = {
  LOAD_TICKER_REQUEST: 'LOAD_TICKER_REQUEST',
  LOAD_TICKER_SUCCESS: 'LOAD_TICKER_SUCCESS',
  LOAD_TICKER_FAILURE: 'LOAD_TICKER_FAILURE',
};

export const loadTicker = ticker => ({
  type: tickerTypes.LOAD_TICKER_REQUEST,
  ticker,
});

export const loadTickerSuccess = res => ({
  type: tickerTypes.LOAD_TICKER_SUCCESS,
  res,
});

export const loadTickerFail = err => ({
  type: tickerTypes.LOAD_TICKER_FAILURE,
  err,
});
