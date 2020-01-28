import React, { useState } from 'react';
import QrReader from 'react-qr-reader'
import './App.css';

const App = () => {
  const [result, setResult] = useState('No Result')

  const handleError = () => {
    console.log('error')
  }
  
  const handleScan = data => {
    if(data) {
      setResult(data)
    }
  }

  return (
    <div className="App">
        <div>
          <QrReader
            delay={1}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p>{result}</p>
        </div>
    </div>
  );
}

export default App;
