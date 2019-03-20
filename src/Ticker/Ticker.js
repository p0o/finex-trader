import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import btcIcon from '../images/btc.jpg';

const Container = styled.div`
  height: 100px;
  width: 400px;
  background-color: lightslategray;
`;

const SymbolIcon = styled.img`
  width: 60px;
  border-radius: 50px;
  margin-top: 7px;
  margin-right: 10px;
`;

const Text = styled.div`
  text-align: center;
  color: honeydew;
  margin: 0px;
  font-size: 0.85em;
  ${props =>
    props.large &&
    css`
      font-size: 1.1em;
      font-weight: bold;
      color: white;
      padding: 10px;
    `}

  ${props =>
    props.green &&
    css`
      color: limegreen;
    `}
`;

const Col = styled.div`
  margin: 15px 0 0 30px;
  float: left;
  display: inline-block;
`;

// TODO: just to scale in future. Not a good idea to import all icons like this
function getIconBySymbol(symbol) {
  switch (symbol) {
    case 'BTC/USD':
      return btcIcon;
    default:
      return btcIcon;
  }
}

function Ticker({ symbol, currentPrice, low, high, change, volume }) {
  return (
    <Container>
      <Col>
        <SymbolIcon src={getIconBySymbol(symbol)} />
      </Col>
      <Col>
        <Text large>{symbol}</Text>
        <Text>VOL {volume} USD</Text>
        <Text>LOW {low}</Text>
      </Col>
      <Col>
        <Text large>{currentPrice}</Text>
        <Text green>{change}</Text>
        <Text>HIGH {high}</Text>
      </Col>
    </Container>
  );
}

Ticker.propTypes = {
  symbol: PropTypes.string,
  currentPrice: PropTypes.number,
  low: PropTypes.number,
  high: PropTypes.number,
  change: PropTypes.number,
  volume: PropTypes.number,
};

export default Ticker;
