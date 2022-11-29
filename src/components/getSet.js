import getCard from "./getCard";
import Shuffler from "./Shuffler";

export default function getSet(len, height) {
    const size = len * height
    const halfSize = size / 2;
    const getCards = [];
    for (let i = 0; i < halfSize; i++) {
        getCards.push(getCard());
    }
    const shuffled = Shuffler(getCards);
    const twoDimensionShuffle = [];
    for (let i = 0; i < height; i++){
        twoDimensionShuffle.push([]);
        for (let j = 0; j < len; j++) {
            twoDimensionShuffle[i].push(shuffled[i*len + j]);
        }
    }
    // console.log(getCards);
    // console.log(shuffled);
    // console.log(twoDimensionShuffle);
    return twoDimensionShuffle;
}
