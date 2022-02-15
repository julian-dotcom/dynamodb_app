import React, { useState } from 'react';

const GetAllDeposits = ({  }) => { 
    const getAllDeposits = async () => {
        const url =
          "https://w4tbyyb2ai.execute-api.us-east-1.amazonaws.com/getAllDeposits";
        const response = await fetch(url);
        const body = await response.json();
        const entries = body["Items"];
        console.log(entries);
    };
    return (
        <div><button id="getAllBtn" onClick={() => getAllDeposits()}>Get All</button></div>
    )
}

export default GetAllDeposits;