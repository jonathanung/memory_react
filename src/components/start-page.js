import { React, useState } from 'react';
import Leaderboard from './leaderboard';
import '../App.css'


const StartPage = (props) => {
  const [leaderboardMode, setLeaderboardMode] = useState(false);

  const startGame = () => {
      props.startGame(true);
  }

  const swapMode = () => {
    if (leaderboardMode) {
      setLeaderboardMode(false);
    } else {
      setLeaderboardMode(true);
    }
  }

  if (!leaderboardMode) {
      return (
        <div className = "Start">
          <h1 className="title">Memory Game</h1>
          <h2 className="subtitle">By Jon, Sam, Nathan, and Jordan</h2>
          <button type="button" onClick={startGame} >Start</button>
          <button type="button" id="leaderboard-btn" onClick={() => swapMode()}>Leaderboard</button>
          <button type='button' onClick={() => alert("I love sam :)")}>Nathan's Super Special Button</button>
          <p>Memory is the card game where you try to flip 2 of the same card! Each correct pair gives you 2 extra seconds on the clock, but be careful since each wrong pair takes 2 seconds away! You also get time added on for each level passed!</p>
        </div>
    )
  } else {
    return (<Leaderboard isMenu={true} swapMode={swapMode} />)
  }
}

export default StartPage;

export default StartPage;
