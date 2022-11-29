import React from 'react'
import { useState}  from 'react';
import "../App.css";
import DisplayCard from './displayCard';
import LastPair from './LastPair';

const Play = (props) => {
    const deck = props.deck;
    const [hold, setHold] = useState(undefined);
    const [lastPair, setLastPair] = useState([]);
    // console.log("triggered!");
    // console.log(deck);

    const isFlip = async(i, j) => {
        if (hold === undefined) {
            setHold(deck[i][j]);
            setLastPair([[deck[i][j], i+1, j+1]])
        } else {
            if (hold.url !== deck[i][j].url) {
                hold.flip();
                deck[i][j].flip();
                props.modCounter(-100)
                // window.location.reload(false);
            } else {
                props.modCounter(200)
                props.addScore();
                props.checkFin();

            }
            setHold(undefined);
            setLastPair([...lastPair, [deck[i][j], i + 1, j + 1]])
        }
        // console.log(hold);
    };

    // useEffect(() => {
    //     props.checkFin();
    // }, [props])

    return (
            <div>
                <div id="gameboard">
                {deck.map((row, i) => {
                    return (
                        <div className="row" id={"row-" + i} key={i} >
                            {row.map((card, j) => {
                                // console.log(i, j);
                                return (
                                    <DisplayCard key={j} card={card} flipCheck={isFlip} i={i} j={j} />
                                )
                        })}
                        </div>
                    )
                })}
                </div>  
            <LastPair lastPair={lastPair} />
            </div>

        
    )
}   
export default Play;