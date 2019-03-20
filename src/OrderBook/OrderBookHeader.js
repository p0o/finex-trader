import React, { useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  padding: 1em;
  background: slategrey;
  color: white;
`;

function OrderBookHeader({ symbol }) {
  return <Header>Order Book {symbol}</Header>;
}

export default OrderBookHeader;
