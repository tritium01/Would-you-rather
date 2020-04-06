import {RECEIVE_USERS} from "../Actions/users";
import {ADD_QUESTION, ADD_QUESTION_ANSWER} from "../Actions/questions";

export default function users(state={}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        case ADD_QUESTION:
            console.log(state);
            return {
                ...state,
                [action.question.author]: {
                ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }

            }
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid] : action.answer
                    }
                }
            }
        default:
            return state
    }
}