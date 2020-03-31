import React from "react";
import Poll from "./Poll";
import {useSelector} from "react-redux";

export default function UnAnswered () {

    const answered = useSelector(state => Object.keys(state.users[state.authedUser].answers))
    const questions = useSelector(state=> Object.keys(state.question).sort((a, b)=> state.question[b].timestamp - state.question[a].timestamp))
    const id = questions.filter((id)=>{
        return !answered.includes(id)
    })


    return(
        <div className="container">
            <h1>These are the unanswered questions:</h1>
            <ul>
                {id.map(id =>(
                    <li key={id}>
                        <Poll id={id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}