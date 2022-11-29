import {React, useState, useEffect} from 'react';
import Overlay from './overlay';
import Play from './play';
import getSet from './getSet';
import GameLoss from './GameLoss';
import Game from './game';

const GamePage = () => {
    const [counter, setCounter] = useState(1300);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [loss, setLoss] = useState(false);
    const [currDeck, setCurrDeck] = useState(getSet(4, 2));
    const [incr, setIncr] = useState(false);
    const [timer, setTimer] = useState(300);

    const checkFin = () => {
        let isFin = true;
        for (const row of currDeck) {
            // console.log(row);
            for (const card of row) {
                if (!card.isFlipped) {
                    isFin = false;
                    // console.log(card);
                }
            }
        }
        // console.log("isFin: " + isFin);
        if (isFin) {
            // console.log("fin");
            newLevel();
        }
    }

    const getNewDeck = () => {
        const cCount = (level + 1) * 2;
        const rCount = Math.ceil(level / 2) * 2;
        setCurrDeck(getSet(cCount, rCount));
        // console.log(currDeck);`
    }

    const newLevel = () => {
        setLevel(level + 1);
        getNewDeck();
        modCounter(((level + 1) * 1000) + ((level*50) + 300));
        setTimer((level*50) + 300);
        // console.log(level);
        // console.log(counter);
    }

    const modCounter = (mod) => {
        setIncr(mod);
    }

    const triggerLoss = () => {
        setLoss(true);
    }
    const addScore = () => {
        setScore(score+1);
    }

    useEffect(() => {
        if (incr !== false) {
            setCounter(counter + incr);
            setIncr(false);
        }
        counter > 0 && setTimeout(() => setCounter(counter - 1), 10);
        timer > 0 && setTimeout(() => setTimer(timer - 1), 10);
        if (counter === 0) {
            triggerLoss()
            console.log("lost!");
        }
    }, [counter]);
    if (!loss && timer) {
        return (<div id="gamePage">
                <Overlay counter={counter} />
                <h3>Score {score}</h3>
                <h1>Level {level}</h1>
                <Game deck={currDeck} />
            </div>)
    }
    else if (!loss) {
        return (
            <div id="gamePage">
                <Overlay counter={counter} />
                <h3>Score {score}</h3>
                <h1>Level {level}</h1>
                <Play deck={currDeck} addScore={addScore} checkFin={checkFin} modCounter={modCounter} />
            </div>
        );
    } else {
        return (<GameLoss level={level} score={score} />)
    }
};

export default GamePage;
