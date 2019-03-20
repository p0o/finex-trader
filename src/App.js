import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import WebSocket from 'isomorphic-ws';
import styled from 'styled-components';
import Trades from './Trades/Trades';
import Ticker from './Ticker/Ticker';
import OrderBook from './OrderBook/OrderBook';
import * as actions from './actionCreators';

const Main = styled.div`
  margin: auto;
  width: 1160px;
`;

const Col = styled.div`
  margin: 15px 0 0 30px;
  float: left;
  display: inline-block;
`;

function App({
  state,
  loadTicker,
  updateBids,
  updateAsks,
  removeAsks,
  removeBids,
}) {
  useEffect(() => {
    const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    let tickerChannelId;
    let bookChannelId;

    ws.onmessage = msg => {
      // record subscribed channel ids
      const data = JSON.parse(msg.data);

      if (typeof data === 'object') {
        if (data.event === 'subscribed') {
          if (data.channel === 'ticker') {
            tickerChannelId = data.chanId;
          }
          if (data.channel === 'book') {
            bookChannelId = data.chanId;
          }
        }
      }

      // dispatch actions according to channel ID
      if (data[1] && data[1] !== 'hb') {
        const currentChannelId = data[0];

        if (currentChannelId === tickerChannelId) {
          loadTicker({
            change: data[1][5],
            price: data[1][6],
            volume: data[1][7],
            high: data[1][8],
            low: data[1][9],
          });
        }

        if (currentChannelId === bookChannelId) {
          const price = data[1][0];
          const count = data[1][1];
          const amount = data[1][2];

          // add or update price level

          if (count > 0) {
            if (amount > 0) {
              updateBids(price, amount);
            } else if (amount < 0) {
              updateAsks(price, amount);
            }
          }

          // delete price level
          if (count === 0) {
            if (amount === 1) {
              removeBids(price);
            }
            if (amount === -1) {
              removeAsks(price);
            }
          }
        }
      }
    };

    ws.onopen = () => {
      // subscribe to ticker
      ws.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tBTCUSD',
        })
      );

      ws.send(
        JSON.stringify({
          event: 'subscribe',
          channel: 'book',
          symbol: 'tBTCUSD',
          freq: 'F1',
        })
      );
    };
  }, []);

  return (
    <Main>
      <Col>
        {state.ticker && state.ticker.loaded && (
          <Ticker {...state.ticker} ticker="BTCUSD" />
        )}
        <Trades />
      </Col>
      <Col>
        <OrderBook {...state.orderBook} />
      </Col>
    </Main>
  );
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  loadTicker: res => dispatch(actions.loadTicker(res)),
  updateBids: (price, amount) => dispatch(actions.updateBids(price, amount)),
  updateAsks: (price, amount) => dispatch(actions.updateAsks(price, amount)),
  removeBids: price => dispatch(actions.removeBids(price)),
  removeAsks: price => dispatch(actions.removeAsks(price)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
