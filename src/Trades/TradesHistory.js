import React, { useEffect } from 'react';
import styled from 'styled-components';
import TradeRow, { TradeRowHeading } from './TradeRow';

const Container = styled.div`
  box-sizing: border-box;
`;

function TradesHistory() {
  return (
    <Container>
      <TradeRowHeading />
    </Container>
  );
}

export default TradesHistory;
