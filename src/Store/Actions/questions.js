import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";


function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(textOne, textTwo, author) {
    return (dispatch)=> {

        dispatch(showLoading());

        return saveQuestion({
            author :author,
            optionOneText: textOne,
            optionTwoText: textTwo,
        })
            .then(question => dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
}

function addQuestionAnswer ({authedUser, qid, answer}) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleAddQuestionAnswer (info) {
    return(dispatch)=> {
        dispatch(console.log("This is the question answered passed:", info)||addQuestionAnswer(info))
        return saveQuestionAnswer(info)
    }
}


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

