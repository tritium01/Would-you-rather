import {ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS} from "../Actions/questions";

export default function question(state= {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            console.log(action)
            return {
                ...state,
                [action.question.id]: action.question,

        }


        case ADD_QUESTION_ANSWER :
            console.log("state inside questions reducer:", state)
            return {
               ...state,
                [action.qid]: {
                   ...state[action.qid],
                    [action.answer]: {
                       ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }

            }


        default:
            return state

    }
}