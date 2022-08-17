import React, { useState } from "react";
import dictionary from "./wordsDatabase";

function Translator () {

    let [eng, setEng] = useState('')
    let [kz, setKz] = useState('');

    function english (e) {
        setEng(e.target.value);
        setKz('')
    }

    function kazakh (e) {
        setKz(e.target.value);
        setEng('')
    }

    function translation () {
        if (eng.length === 0 && kz.length === 0) {
            console.log("bruh");
        }

        else {
            if (eng) {
                const lowercase = eng.toLowerCase();
                if (dictionary.englishArr.includes(lowercase)) {
                    const idx = dictionary.englishArr.indexOf(lowercase);
                    setKz(dictionary.kazakhArr[idx]);
                }

                else {
                    console.log("L");
                }
            }


            else {
                const lowercase = kz.toLowerCase();
                if (dictionary.kazakhArr.includes(lowercase)) {
                    const idx = dictionary.kazakhArr.indexOf(lowercase);
                    setEng(dictionary.englishArr[idx]);
                }

                else {
                    console.log("L");
                }
            }
        }
    }

    return (
        <div className="googleTranslate">
            <input value={eng} onChange={english} placeholder="English" />
            <button onClick={translation}>Перевести</button>
            <input value={kz} onChange={kazakh} placeholder="Казакша" />
        </div>
    );

}

export default Translator;