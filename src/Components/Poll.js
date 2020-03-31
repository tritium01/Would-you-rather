import React from "react";
import Avatars from "./Avatar";
import {useSelector} from "react-redux";
import {Link, Route} from "react-router-dom";

export default function Poll(props) {
    const question = useSelector(state => state.question[props.id])
    const avatar =  useSelector(state => state.users[question.author].avatarURL)

    const {id, author, timestamp, optionOne, optionTwo} = question;
    return (
        <div className="question-info">
            <Avatars avatar={avatar}/>
            <h3>Would you rather...</h3>
            <p><em>{`${optionOne.text}....`}</em></p>
            <button><Link to={'/home/question/:qid'}>Go to poll</Link></button>

            <div className="routes">
                <Route></Route>
            </div>

        </div>
    )


}