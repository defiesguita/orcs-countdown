import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlipCountdown from '@rumess/react-flip-countdown';


function App() {
  return (
    <div className="App">
          <FlipCountdown
                endAt={'2022-12-12 01:26:58'} // Date/Time
                onTimeUp={() => console.log("Time's up ⏳")}
          />
    </div>
  );
}

export default App;
