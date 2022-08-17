import React, { useState } from "react";

function Converter () {

    let [amount, setAmount] = useState('');
    let [converted, setConverted] = useState('');

    function handleInput (event) {
        setAmount(event.target.value)
    }

    function convertation () {
        setConverted(amount * 476);
    }

    return (
        <div>
            <input type="number" value={amount} onChange={handleInput} placeholder="USD" />
            <button onClick={convertation}>Convert</button>
            <h3>Result: {converted} KZT</h3>
        </div>
    );

}

export default Converter