import { combineReducers } from 'redux';
import ticker from './tickerReducer';
import orderBook from './orderBookReducer';
import trades from './tradesReducer';

export default combineReducers({
  ticker,
});
