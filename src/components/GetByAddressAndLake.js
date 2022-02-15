import React, { useState, useEffect } from 'react';

const GetByAddressAndLake = ({  }) => {
    const [address, setAddress] = useState('');
    const [lake, setLake] = useState('');
    const getByAddressAndLake = async () => {
        const baseUrl = 'https://w4tbyyb2ai.execute-api.us-east-1.amazonaws.com/getByAddressAndLake';
        const params = `?address=${address}&lake=${lake}`;
        const response = await fetch(baseUrl+params);
        const body = await response.json();
        console.log(body["Items"])
        return;
    }
    return (
        <div>
            <button id="getByAddress" onClick={() => getByAddressAndLake()}>Get by address & lake</button>
            <input type='text' onChange={(event) => setAddress(event.target.value)} placeholder='address'/>
            <input type='text' onChange={(event) => setLake(event.target.value)} placeholder='lake'/>
        </div>
    )
}

export default GetByAddressAndLake;