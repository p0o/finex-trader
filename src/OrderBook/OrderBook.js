import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderBookHeader from './OrderBookHeader';
import OrderBookAsks from './OrderBookAsks';
import OrderBookBids from './OrderBookBids';

const Container = styled.div`
  width: 700px;
  background-color: lightslategray;
`;

function OrderBook() {
  return (
    <Container>
      <OrderBookHeader symbol="BTC/USD" />
      <OrderBookAsks />
      <OrderBookBids />
    </Container>
  );
}

export default OrderBook;
