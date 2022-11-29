import React from 'react';
import LeaderboardForm from './leaderboard-form';

export default function GameLoss(props) {
    const reload = () => {
        window.location.reload(false)
    }
    return (
        <div className="game-loss">
            <h1>Your score: {props.score}</h1> 
            <h4>You managed to get to level {props.level}!</h4>
            <LeaderboardForm score={props.score} />
        </div>
    );
}