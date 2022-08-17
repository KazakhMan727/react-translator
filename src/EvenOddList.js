import React, { useState } from "react";

function EvenOddList () {

    let [numbers, setNumbers] = useState('');

    function filterFunc () {
        let arr = numbers.split(',').map(Number);

        return arr;
        
        // let evens = arr.filter(item => item % 2 === 0);
        // let odds = arr.filter(item => item % 2 !== 0);

        // evens.map(element => <li key={element.toString()}>{element}</li>)
        // odds.map(element => <li key={element.toString()}>{element}</li>)
    }

    function evens () {
        let arr = filterFunc();
        let evensArr = arr.filter(item => item % 2 === 0);
        
        return evensArr;
    }

    function odds () {
        let arr = filterFunc();
        let oddsArr = arr.filter(item => item % 2 !== 0);
        
        return oddsArr;
    }

    function renderFunc () {
        let arr1 = evens();
        let arr2 = odds();

        <div>
            <ul>
                {
                    arr1.map(element => <li key={element.toString()}>{element}</li>)
                }
            </ul>

            <ul>
                {
                    arr2.map(element => <li key={element.toString()}>{element}</li>)
                }
            </ul>
        </div>
        
        
        
    }

    return (
        <div>
            <input value={numbers} onChange={e => setNumbers(e.target.value)} /> <button onClick={renderFunc}>Do the thing</button>
        </div>
    );

}

export default EvenOddList;