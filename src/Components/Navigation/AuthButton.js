import React from "react";
import {withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {setAuthedUser} from "../../Store/Actions/authedUser";
import Button from "../UI/elements/Button";



const AuthButton = withRouter(({ history }) => {
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();

    const handleLogOut = (e)=> {
        e.preventDefault();
        dispatch(setAuthedUser(null))

    };

    return (authedUser !== null
            ? <Button onClick={(e) => handleLogOut(e)}>Sign Out</Button>
                : <p>You are not logged in.</p>


        )
});

export default AuthButton