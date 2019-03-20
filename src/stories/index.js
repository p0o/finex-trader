import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import OrderBook from '../OrderBook/OrderBook';
import Trades from '../Trades/Trades';

storiesOf('Order Book', module).add('With Trades', () => <OrderBook />);

storiesOf('Trades', module).add('rendered with trades', () => <Trades />);
