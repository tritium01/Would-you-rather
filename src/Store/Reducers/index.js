import {combineReducers} from "redux";
import question from "./questions";
import users from "./users"

export default combineReducers({
    users,
    question,
})