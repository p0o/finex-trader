import React, { useEffect } from 'react';
import styled from 'styled-components';
import OrderBookRow, { OrderBookRowHeading } from './OrderBookRow';

const Container = styled.div`
  width: 50%;
  float: left;
  box-sizing: border-box;
`;

function OrderBookAsks({ asks }) {
  return (
    <Container>
      <OrderBookRowHeading asks />
    </Container>
  );
}

export default OrderBookAsks;
