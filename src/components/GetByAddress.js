import React, { useState, useEffect } from 'react';

const GetByAddress = ({  }) => {
    const [address, setAddress] = useState('');

    const getByAddress = async () => {
        const url = `https://w4tbyyb2ai.execute-api.us-east-1.amazonaws.com/getByAddress/${address}`;
        const response = await fetch(url);
        console.log(response)
        const body = await response.json();
        console.log(body)
        return;
    }
    return (
        <div>
            <button id="getByAddress" onClick={() => getByAddress()}>Get by address</button>
            <input type='text' onChange={(event) => setAddress(event.target.value)} placeholder='address'/>
        </div>
    )
}

export default GetByAddress;