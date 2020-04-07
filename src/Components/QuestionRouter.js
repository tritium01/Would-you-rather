import React from "react";
import {useParams} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";
import Question from "./Question";
import Answered from "./Answered";

const QuestionRouter = () => {
    const {question_id} = useParams();
    const answered = useSelector(state => Object.keys(state.users[state.authedUser].answers));
    const question = useSelector(state => state.question);

    const check = ()=> {
    const answer = question.hasOwnProperty(question_id);
        return answer
    };

    if (check() === false){
        return <Redirect to='/404'/>
    }
    return (
        <div>
            {answered.includes(question_id)
                ? <Answered id={question_id}/>
                : <Question id={question_id}/>}
        </div>
    )
};

export default QuestionRouter