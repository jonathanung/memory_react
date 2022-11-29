// import {useState , useEffect} from 'react';
// import {getRemainingTimeUntilMsTimestamp} from './countdownTimerUtils';
// import '../App.css';

// const defaultRemainingTime = {
//     seconds: '00',
//     minutes: '00'
// }

// /*JORDAN IS DUMBASS*/

// const countDownTimer = ({countdownTimestampMs}) => {
//     const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             updateRemainingTime(countdownTimestampMs);
//         }, 1000)
//         return() => clearInterval(intervalId)
//     },[])

//     function updateRemainingTime(){
//         setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
//     }

//     return(
//         <div className="timer">
//             <span>{remainingTime.minutes}</span>
//             <span>minutes</span>
//             <span>{remainingTime.seconds}</span>
//             <span>seconds</span>
//         </div>
//     );
//   }

//   export default countDownTimer;