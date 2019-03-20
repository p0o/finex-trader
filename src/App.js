import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Trades from './Trades/Trades';
import Ticker from './Ticker/Ticker';
import OrderBook from './OrderBook/OrderBook';

const Main = styled.div`
  margin: auto;
  width: 1160px;
`;

const Col = styled.div`
  margin: 15px 0 0 30px;
  float: left;
  display: inline-block;
`;

function App() {
  return (
    <Main>
      <Col>
        <Ticker />
        <Trades />
      </Col>
      <Col>
        <OrderBook />
      </Col>
    </Main>
  );
}

export default App;
