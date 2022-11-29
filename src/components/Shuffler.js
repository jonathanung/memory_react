import React from 'react';
import Card from "./Cardvalue";

export default function Shuffler(array) {

    /* randomize order */
    let mixed_up = [];
    const array2 = []
    for (let i = 0; i < array.length; i++) {
        array2.push(new Card(array[i].value, array[i].suit))
    }
    let paired_up = array.concat(array2);
    let len = paired_up.length;
    let temp = 0;

    for (let i = 0; i < len; i++) {
        let j = Math.floor(Math.random() * (len));
        temp = paired_up[i]
        paired_up[i] = paired_up[j]
        paired_up[j] = temp
    }

    return(paired_up)
}
