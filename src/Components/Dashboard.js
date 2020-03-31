import React, {useState} from "react";
import {useSelector} from "react-redux";
//import DashNav from "./Navigation/DashboardNav";
import Answered from "./Answered";
import UnAnswered from "./Unanswered";
import {Switch, Route, Link} from "react-router-dom"
import Poll from "./Poll";




function Dashboard () {
    const user = useSelector(state => state.users[state.authedUser])
    const answered = useSelector(state => Object.keys(state.users[state.authedUser].answers))
    const questions = useSelector(state=> Object.keys(state.question).sort((a, b)=> state.question[b].timestamp - state.question[a].timestamp))
    const [index, setIndex] = useState(false)

    const id = questions.filter((id)=>{
        return index ? answered.includes(id): !answered.includes(id)
    })


    return (
        <div>
            <div className="tabs">
                <button onClick={()=> setIndex(true)}>Answered</button>
                <button onClick={()=> setIndex(false)}>Unanswered</button>
            </div>

            <div className="container">
                <ul>
                    {id.map(id =>(
                        <li key={id}>
                            <Poll id={id}/>
                        </li>
                    ))}
                </ul>

            </div>




        </div>

    )
}

export default Dashboard