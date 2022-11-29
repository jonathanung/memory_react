import React from 'react'

export default class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.isFlipped = false;
        this.url = value + '_of_' + suit + ".png";
    }
    getFlipped() {
        return this.isFlipped;
    }
    flip() {
        if (this.isFlipped) {
            this.isFlipped = false;
        } else {
            this.isFlipped = true;
        }
    }
}
  
