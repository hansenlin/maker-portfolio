import React, { Component } from 'react';

//import DeleteButton from './DeleteButton.js';
import CreateCdp from './CreateCdp.js';
import WithdrawDai from './WithdrawDai.js';
import DepositDai from './DepositDai.js';
import Rebalance from './Rebalance.js';

class App extends Component {
  render() {
    return (
      <div>
        <CreateCdp />
        <WithdrawDai />
        <DepositDai />
        <Rebalance />
      </div>
    );
  }
}

export default App;
