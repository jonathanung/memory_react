import React, { useState } from 'react';
import { Form, FormGroup, Button } from 'reactstrap'; 
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase-config';
import "../App.css";

const LeaderboardForm = (props) => {
    const [leaderboardForm, setLeaderboardForm] = useState("")
    const [errorMsg, setErrorMsg] = useState("");

    const addScore = async (e) => {
        e.preventDefault();  
        if (leaderboardForm === "") {
            setErrorMsg("You must enter a name!");
            return;
        }
        try {
            const docRef = await addDoc(collection(db, "leaderboard"), {
                name: leaderboardForm,
                score: props.score
            });
            console.log("Document written with ID: ", docRef.id);
            window.location.reload();
          } catch (e) {
            console.error("Error adding document: ", e);
            setErrorMsg("There was an error adding the document!");
        }
    }

    return (
        <section className="leaderboard-form-container">
            <div className="leaderboard-form">
                <Form>
                    <FormGroup>
                        <h2>Enter your name here to participate in the leaderboard!</h2>
                        <input type="text" onChange={(e) => setLeaderboardForm(e.target.value)} />
                        <p>{ errorMsg }</p>
                    </FormGroup>
                    <FormGroup className="btn-container">
                        <Button type="submit" className="submit-btn" onClick={addScore}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </section>
    )
}
 
export default LeaderboardForm