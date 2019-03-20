import React, { useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  padding: 1em;
  background: slategrey;
  color: white;
`;

function TradesHeader({ symbol }) {
  return <Header>Trades {symbol}</Header>;
}

export default TradesHeader;
