import {React} from 'react';

const LastPair = (props) => {
    // console.log(props.lastPair);
    if (props.lastPair.length === 1) {
        return (
            <div className="last-pair">
                <h3>The last card you chose:</h3>
                <img className="card" src={`${process.env.PUBLIC_URL}/assets/images/cards/` + props.lastPair[0][0].url} alt="deez"></img>
            </div>
        );
    } else if (props.lastPair.length === 2) {
        return (
            <div className="last-pair">
                <h3>The last pair you chose:</h3>
                <img className="card" src={`${process.env.PUBLIC_URL}/assets/images/cards/` + props.lastPair[0][0].url} alt="deez"></img>
                <img className="card" src={`${process.env.PUBLIC_URL}/assets/images/cards/` + props.lastPair[1][0].url} alt="deez"></img>
            </div>
        )
    }
}

export default LastPair;