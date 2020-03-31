import {combineReducers} from "redux";
import question from "./questions";
import users from "./users"
import authedUser from "./authedUser";
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
    users,
    question,
    authedUser,
    loadingBar: loadingBarReducer,
})