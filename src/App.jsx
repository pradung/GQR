import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [promptPayID, setPromptPayID] = useState('');
  const [amount, setAmount] = useState('');
  const [qrCodeURL, setQRCodeURL] = useState('');

  // ฟังก์ชันสำหรับสร้าง QR Code
  const generateQRCode = () => {
    if (promptPayID && amount) {
      const randomQuery = `?cacheBuster=${new Date().getTime()}`;
      const apiURL = `https://promptpay.io/${promptPayID}/${amount}.png`;
      setQRCodeURL(apiURL);
    } else {
      alert('กรุณากรอก PromptPay ID และจำนวนเงิน');
    }
  };

  return (
    <div className="container">
      <h1>PromptPay QR Code Generator</h1>
      <div className="form-group">
        <label>PromptPay ID (เบอร์โทรหรือเลขบัตรประชาชน):</label>
        <input
          type="text"
          value={promptPayID}
          onChange={(e) => setPromptPayID(e.target.value)}
          placeholder="ใส่เบอร์โทรหรือเลขบัตรประชาชน"
        />
      </div>
      <div className="form-group">
        <label>จำนวนเงิน (บาท):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="ใส่จำนวนเงิน"
        />
      </div>
      <button onClick={generateQRCode} className="btn-generate">
        Generate QR Code
      </button>

      {qrCodeURL && (
        <div className="qr-code">
          <h2>QR Code:</h2>
          <img src={qrCodeURL} alt="PromptPay QR Code" />
        </div>
      )}
    </div>
  );
};

export default App;
