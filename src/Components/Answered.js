import React from "react";
import{useSelector} from "react-redux";
import Poll from "./Poll";
import UnAnswered from "./Unanswered";



function Answered (){
    const answered = useSelector(state => Object.keys(state.users[state.authedUser].answers))
    const questions = useSelector(state=> Object.keys(state.question).sort((a, b)=> state.question[b].timestamp - state.question[a].timestamp))
    const id = questions.filter((id)=>{
        return answered.includes(id)
    })
    return (
        <div className="container">
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

export default Answered;