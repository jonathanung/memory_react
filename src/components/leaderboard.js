import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase-config';
import { React, useState, useEffect } from 'react';
import { Button } from "reactstrap";
import quickSort from "./quickSort";

export default function Leaderboard(props) {
    const [scores, setScores] = useState([]);
    const [read, setRead] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchPost = async () => {
    
        await getDocs(collection(db, "leaderboard"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setScores(newData);                
                // console.log(scores, newData);
            })
    }
    
    useEffect(() => {
        if (!read) {
            fetchPost();
            setRead(true);
        }
        if (loading) {
            setTimeout(() => {
                setScores(quickSort(scores, 0, scores.length - 1));
                setScores(quickSort(scores, 0, scores.length - 1)); //idk why it needs to run twice kinda bugged
                setLoading(false);
            }, 1000);
        }
    }, [scores, read])

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        if (props.isMenu) {
            return (
                <div className="leaderboard">
                    <Button onClick={() => props.swapMode()}> Back to main menu </Button>
                    <h1>Leaderboard</h1>
                    <div className="user-score-header">
                        <h2>Format -&gt; User : Score</h2>
                    </div>
                    {/* {console.log(scores)} */}
                    {scores.map((score, i) => {
                        return (
                            <div key={i} className="user-score">
                                <h3>{i + 1} -&gt; {score.name} : {score.score}</h3>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="leaderboard">
                    <h1>Leaderboard</h1>
                                        <div className="user-score-header">
                        <h2>Format -&gt; User : Score</h2>
                    </div>
                    {/* {console.log(scores)} */}
                    {scores.map((score, i) => {
                        return (
                            <div key={i} className="user-score">
                                <h3>{i + 1} -&gt; {score.name} : {score.score}</h3>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}
