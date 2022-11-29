import {React} from 'react';

const Overlay = (props) => {

    return (
        <div className="timer">
            <div>Countdown: {props.counter/100}s</div>
        </div>
    );
};

export default Overlay;