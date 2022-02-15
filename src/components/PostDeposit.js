import React, { useState } from 'react';

const PostDeposit = ({  }) => {
    const postDeposit = async () => {
        const now = Math.floor(Date.now());
        const amount = Math.random(100);
        const deposit = {
          address: randomString(),
          lake: randomString(),
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

    const randomString = () => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(
        Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
    };

    return (
        <div><button id="postBtn" onClick={() => postDeposit()}>Post</button></div>
    )
}

export default PostDeposit;