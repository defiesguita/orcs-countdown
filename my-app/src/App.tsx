import React, { Component } from 'react';
import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function App() {
  const releaseDate = new Date('2023-09-16').getTime();
  const diff = releaseDate - new Date().getTime();
  return (
    <div className="App">
      <div className='CountDown'>
         <FlipClockCountdown to={new Date().getTime() + diff} >
            <Completed />
         </FlipClockCountdown>
      </div>
    </div>
  );
}


class Completed extends Component {
  render() {
    return <div className='Complete'>
      <div className='Complete-inner'><a className='Complete-inner-link'  href='https://orcade.io'>GO TO ORCADE.IO</a></div> 
      </div>
  }
}

export default App;
