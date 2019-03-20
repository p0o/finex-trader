import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderBookRow, { OrderBookRowHeading } from './OrderBookRow';

const Container = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
`;

function OrderBookBids() {
  return (
    <Container>
      <OrderBookRowHeading bids />
      <OrderBookRow />
    </Container>
  );
}

export default OrderBookBids;
