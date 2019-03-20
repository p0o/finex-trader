import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Row = styled.section`
  display: block;
  background: darkslategray;
  color: white;
  font-size: 11px;
`;

const Cell = styled.div`
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  padding: 0.4em;
`;

function TradeRow({ type, time, price, amount }) {
  return (
    <div>
      <Row>
        <Cell>{type}</Cell>
        <Cell>{time}</Cell>
        <Cell>{price}</Cell>
        <Cell>{amount}</Cell>
      </Row>
    </div>
  );
}

TradeRow.proptypes = {
  type: PropTypes.oneOf[('buy', 'sell')],
  time: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
};

export function TradeRowHeading({ type }) {
  const columnHeaders = ['type', 'time', 'price', 'amount'];

  return (
    <Row>
      {columnHeaders.map((x, idx) => (
        <Cell key={idx}>{x === 'type' ? '' : x.toUpperCase()}</Cell>
      ))}
    </Row>
  );
}

export default TradeRow;
