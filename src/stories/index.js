import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import OrderBook from '../OrderBook/OrderBook';
import Trades from '../Trades/Trades';
import Ticker from '../Ticker/Ticker';

storiesOf('Order Book', module).add('With Trades', () => <OrderBook />);

storiesOf('Trades', module).add('rendered with trades', () => <Trades />);

storiesOf('Ticker', module).add('rendered with data', () => (
  <Ticker
    symbol="BTC/USD"
    currentPrice={4100}
    change={13.1}
    volume={25.7774}
    high={4120}
    low={4060}
  />
));
