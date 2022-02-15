import React, { useState, useEffect } from 'react';

const PostCustomDeposit = ({  }) => {
    const [address, setAddress] = useState('');
    const [lake, setLake] = useState('');

    const postCustomDeposit = async () => {
        const now = Math.floor(Date.now());
        const amount = Math.random(100);
        const deposit = {
          address: address,
          lake: lake,
          timeAdded: now,
          initialValue: amount,
          currency: "USDC",
          hypothPnl: 0,
          realPnl: 0,
          lastUpdate: now,
        };
        const url =
          "https://w4tbyyb2ai.execute-api.us-east-1.amazonaws.com/postDeposit";
        let response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(deposit),
        });
        console.log("Post response: ", response);
        response = await response.json();
        console.log("Response: ", response);
      };

    return (
        <div>
            <button onClick={() => postCustomDeposit()}>Post Custom Deposit</button>
            <input type='text' onChange={(event) => setAddress(event.target.value)} placeholder='address' />
            <input type='text' onChange={(event) => setLake(event.target.value)} placeholder='lake' />
        </div>
    )
}

export default PostCustomDeposit;