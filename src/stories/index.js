import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import OrderBook from '../OrderBook/OrderBook';

storiesOf('Order Book', module).add('With Trades', () => <OrderBook />);
