import {ADD_QUESTION, RECEIVE_QUESTIONS} from "../Actions/questions";

export default function question(state= {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            };
        default:
            return state

    }
}