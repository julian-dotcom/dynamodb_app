import React, { useState } from 'react';
import GetAllDeposits from './components/GetAllDeposits';
import GetByAddress from './components/GetByAddress';
import GetByAddressAndLake from './components/GetByAddressAndLake';
import PostDeposit from './components/PostDeposit';
import PostCustomDeposit from './components/PostCustomDeposit';
import UpdateValue from './components/UpdateValue';
const App = () => {
    return (
        <div>
            <GetAllDeposits />
            <GetByAddress />
            <GetByAddressAndLake />
            <PostDeposit />
            <PostCustomDeposit />
            <UpdateValue />
        </div>
    )
}

export default App;
