import React from 'react'
import "../App.css"

const Game = (props) => {
    return (
            <div>
                <div id="gameboard">
                {props.deck.map((row, i) => {
                    return (
                        <div className="row"  id={"row-" + i} key={i}>
                            {row.map((card, j) => {
                            return (
                                <img key={j}  className="card" src={`${process.env.PUBLIC_URL}/assets/images/cards/` + card.url} alt="your mom"></img>
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
