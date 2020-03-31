import React from "react";
import {useSelector} from "react-redux";
import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestion} from "../../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";


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


export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

