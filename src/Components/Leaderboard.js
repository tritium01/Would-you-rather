import React from "react";
import Avatars from "./Avatar";
import {useSelector} from "react-redux";


export default function Leaderboard() {
    const users = useSelector(state => state.users);
    const sorter = ()=> {
        const usersO = [];
        for (const user in users) {
            usersO.push(users[user])
        }
        const sorted =usersO.sort((a,b)=>(Object.keys(a.answers).length + a.questions.length < Object.keys(b.answers).length + b.questions.length) ? 1 : -1 );
        return sorted
    };

    const sorted = sorter();


    return(
        <div className="container">
            <h2>LeaderBoard</h2>

            <ul>
                {sorted.map(user=>(
                    <li key={user.id}>
                        <div className="username">
                            <Avatars avatar={user.avatarURL}/>
                            <h2>{`@${user.id}`}</h2>
                        </div>
                        <div>
                            <span>You asked:</span>
                            <br/>
                            <em>{`${user.questions.length} questions`}</em>
                            <br/>
                            <span>You Answered:</span>
                            <br/>
                            <em>{`${Object.keys(user.answers).length} questions`}</em>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )

}