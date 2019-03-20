export const tickerTypes = {
  LOAD_TICKER: 'LOAD_TICKER',
};

export const orderBookTypes = {
  UPDATE_BIDS: 'UPDATE_BIDS',
  UPDATE_ASKS: 'UPDATE_ASKS',
  REMOVE_BIDS: 'REMOVE_BIDS',
  REMOVE_ASKS: 'REMOVE_ASKS',
};

export const loadTicker = res => ({
  type: tickerTypes.LOAD_TICKER,
  res,
});

export const updateBids = (price, amount) => ({
  type: orderBookTypes.UPDATE_BIDS,
  price,
  amount,
});

export const updateAsks = (price, amount) => ({
  type: orderBookTypes.UPDATE_ASKS,
  price,
  amount,
});

export const removeAsks = price => ({
  type: orderBookTypes.REMOVE_ASKS,
  price,
});

export const removeBids = price => ({
  type: orderBookTypes.REMOVE_BIDS,
  price,
});
