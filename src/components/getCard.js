import Card from "./Cardvalue";
import React from 'react'

export default function getCard() {
    
    const values = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    const suits = ["diamonds", "clubs", "hearts", "spades"];

    const randomVal = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    return new Card(randomVal, randomSuit);
}

