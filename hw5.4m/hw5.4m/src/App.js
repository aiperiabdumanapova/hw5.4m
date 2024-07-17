import React, { useState, useEffect } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1); 
  const handleClick = () => {
    setClicks(prevClicks => prevClicks + 1);
  };

  const handleReset = () => {
    setClicks(0);
    setClicksPerSecond(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setClicksPerSecond(clicks / intervalTime);
    }, intervalTime * 1000);

    return () => clearInterval(interval); 
  }, [clicks, intervalTime]);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setIntervalTime(value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={handleClick}>Click me!</button>
        <button onClick={handleReset}>Reset</button>
        <p>Клики: {clicks}</p>
        <p>Клики в секунду: {clicksPerSecond.toFixed(2)}</p>
        <input
          type="number"
          value={intervalTime}
          onChange={handleInputChange}
          min="1"
        />
        
      </header>
    </div>
  );
}

export default App;
