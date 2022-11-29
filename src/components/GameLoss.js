import React from 'react';
import LeaderboardForm from './leaderboard-form';
import Leaderboard from './leaderboard';
import { Container } from 'reactstrap';

export default function GameLoss(props) {
    const reload = () => {
        window.location.reload(false)
    }
    return (
        <Container className="game-menu">
            <div className="game-loss">
                <h1>Your score: {props.score}</h1> 
                <h4>You managed to get to level {props.level}!</h4>
                <LeaderboardForm score={props.score} />
            </div>
            <Leaderboard/>
        </Container>
    );
}
