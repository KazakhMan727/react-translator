import React, { useState } from "react";
import QRCode from "qrcode";
import "./qrgenerator.css"

function QrCodeGenerator () {
    
    let [url, setUrl] = useState('');
    let [qrCode, setQr] = useState('');

    function generateQR () {
        QRCode.toDataURL(url, {width: 350, margin: 1.5}, (err, url) => {
            if (err) {
                return console.log(err);
            }

            setQr(url);
        });
    }

    return (
        <div>
            <h1>QR Code</h1>
            <div>
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
                <button onClick={generateQR}>Generate</button>
            </div>

            <img src={qrCode} />
        </div>
    );

}

export default QrCodeGenerator;