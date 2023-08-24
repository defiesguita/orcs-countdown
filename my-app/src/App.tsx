import React, { Component } from 'react';
import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const imageMeme = 'https://pbs.twimg.com/media/B4n_bB0IAAAhw54.jpg';

function App() {
  const releaseDate = new Date('2023-09-16').getTime();
  const diff = releaseDate - new Date().getTime();

  return (
    <div className="App">
      <div className='CountDown'>
         <FlipClockCountdown className='flip-clock' to={new Date().getTime() + diff} >
            <Completed />
         </FlipClockCountdown>
      </div>
    </div>
  );
}


class Completed extends Component {
  render() {
    return <div className='Complete'>
          <h2>No release</h2>
          <img src={imageMeme}></img>
      </div>
  }
}

export default App;
