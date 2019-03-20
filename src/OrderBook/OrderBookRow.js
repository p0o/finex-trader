import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const Row = styled.section`
  display: block;
  background: darkslategray;
  color: white;
  font-size: 11px;

  ${props =>
    (props.asks || props.bids) &&
    css`
      font-style: bold;
      text-aling: center;
    `}
  ${props =>
    props.hovered &&
    css`
      background: dimgrey;
    `}
`;

const Cell = styled.div`
  display: inline-block;
  width: 25%;
  box-sizing: border-box;
  padding: 0.4em;
`;

function OrderBookRow({ count, amount, total, price, isAsk, isBid }) {
  return (
    <div>
      {isBid && (
        <Row>
          <Cell>{count}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{total}</Cell>
          <Cell>{price}</Cell>
        </Row>
      )}

      {isAsk && (
        <Row>
          <Cell>{price}</Cell>
          <Cell>{total}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{count}</Cell>
        </Row>
      )}
    </div>
  );
}

export function OrderBookRowHeading({ asks, bids }) {
  const asksColumnHeaders = ['count', 'amount', 'total', 'price'];
  const bidsColumnHeaders = asksColumnHeaders.slice(0).reverse();
  return (
    <Row>
      {asks &&
        asksColumnHeaders.map((x, idx) => (
          <Cell key={idx}>{x.toUpperCase()}</Cell>
        ))}
      {bids &&
        bidsColumnHeaders.map((x, idx) => (
          <Cell key={idx}>{x.toUpperCase()}</Cell>
        ))}
    </Row>
  );
}

export default OrderBookRow;
