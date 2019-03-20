import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderBookHeader from './OrderBookHeader';
import OrderBookAsks from './OrderBookAsks';
import OrderBookBids from './OrderBookBids';

const Container = styled.div`
  width: 700px;
  background-color: lightslategray;
`;

function OrderBook({ asks, bids }) {
  return (
    <Container>
      <OrderBookHeader symbol="BTC/USD" />
      <OrderBookBids bids={bids} />
      <OrderBookAsks asks={asks} />
    </Container>
  );
}

export default OrderBook;
