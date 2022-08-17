import React, { useState } from "react";

function NumberSumm () {

    let [num, setNum] = useState('');
    let [result, setResult] = useState('Result');

    function calculate () {
        const arr = num.split('').map(Number);

        const arrSum = arr.reduce((acc, el) => acc = acc + el, 0);

        let parity = '';

        if (arrSum % 2 === 0) {
            parity = 'четное';
        }

        else {
            parity = 'нечетное';
        }

        setResult(`${arrSum}, ${parity}`);
    }

    return (
        <div>
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
            <button onClick={calculate}>Do</button>
            <p>{result}</p>
        </div>
    );

}

export default NumberSumm;