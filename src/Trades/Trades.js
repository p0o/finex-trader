import React, { useEffect } from 'react';
import styled from 'styled-components';
import TradesHeader from './TradesHeader';
import TradesHistory from './TradesHistory';

const Container = styled.div`
  width: 400px;
  background-color: lightslategray;
`;

function Trades() {
  return (
    <Container>
      <TradesHeader symbol="BTC/USD" />
      <TradesHistory />
    </Container>
  );
}

export default Trades;
