import React, { useState, useEffect } from 'react';

const UpdateValue = () => {
    const [address, setAddress] = useState('');
    const [lake, setLake] = useState('');
    const [timestamp, setTimestamp] = useState('');

    const [field, setField] = useState('');
    const [value, setValue] = useState('');
    const nonAcceptableFields = ['address', 'lake-timestamp', 'lake']
    const updateValue = async () => {
        if (nonAcceptableFields.includes(field)) throw ('Invalid field');
        const baseUrl = 'https://w4tbyyb2ai.execute-api.us-east-1.amazonaws.com/updateValue';
        const request = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                address: address,
                lake: lake,
                timestamp: timestamp,
                field: field, 
                value: value 
            })
        };
        const response = await fetch(baseUrl, request);

        const body = await response.json();
        console.log(body)
        return;
    }
    return (
        <div>
            <button id="getByAddress" onClick={() => updateValue()}>Update specific field</button>
            <input type='text' onChange={(event) => setAddress(event.target.value)} placeholder='Address'/>
            <input type='text' onChange={(event) => setLake(event.target.value)} placeholder='Lake'/>
            <input type='text' onChange={(event) => setTimestamp(event.target.value)} placeholder='Timestamp'/>

            <input type='text' onChange={(event) => setField(event.target.value)} placeholder='field'/>
            <input type='text' onChange={(event) => setValue(event.target.value)} placeholder='value'/>
        </div>
    )
}

export default UpdateValue;