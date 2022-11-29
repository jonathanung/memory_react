import React from 'react'
import { useState }  from 'react';
import "../App.css"
import getSet from './getSet';
import Card from "./Cardvalue";
import GameLoss from './GameLoss';

const Game = () => {
    const [deck, setDeck] = useState(getSet(20, 8))
    return (
            <div>
                <div id="Gameboard">
                {deck.map((row, i) => {
                    return (
                        <div className="row">
                            {row.map((card, j) => {
                            return (
                                <img className="card" src={`${process.env.PUBLIC_URL}/assets/images/cards/` + card.url} alt="your mom"></img>
                            )
                        })}
                        </div>
                    )
                })}
                </div>    
                
            </div>

        
    )
}   
export default Game;