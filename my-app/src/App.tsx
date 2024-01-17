import React, { Component } from 'react';
import './App.css';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const imageMeme = 'https://pbs.twimg.com/media/B4n_bB0IAAAhw54.jpg';

function App() {
  const releaseDate = new Date('2024-04-26');
  const releaseDateAsTime =releaseDate.getTime();
  const diff = releaseDateAsTime - new Date().getTime();

  return (
      <div className="App">
        <div className='next-release'>
          DELAY date: <br />
          {
             releaseDate.toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long"}) // 'Wednesday, 14/06/2023, 13:43:57'
          }
        </div>
        <div className='CountDown'>
          <FlipClockCountdown className='flip-clock' to={new Date().getTime() + diff} >
              <Completed />
          </FlipClockCountdown>
        </div>
        <footer className='footer fadeInUp'>
          <p>Would you like to help me to buy more orcs? <strong>7W9sJg9t9RvGhhJkGK5f1jZxQJ19U3bWQ1yRbwALcEpG </strong></p>
          </footer>
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
