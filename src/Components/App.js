import React, {useEffect} from 'react';
import {handleInitialData} from "../Store/Actions/shared";
import {useDispatch, useSelector} from "react-redux";
import NewQuestion from "./NewQuestion";
import {Route, Redirect, BrowserRouter as Router, Switch} from "react-router-dom";
import {toast} from "react-toastify";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Nav from "./Navigation/MainNav";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import NoMatch from "./NoMatch";
import colors from "../utils/colors";

import QuestionRouter from "./QuestionRouter";



const PrivateRoute = ({component: Component, ...rest}) => {
    const authedUser = useSelector(state => state.authedUser);
    if (authedUser === null) {
        toast.error("Please log in before continuing")
    }
    return (<Route {...rest} render={(props) => (
            authedUser !== null
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location || '/login'}
                }}/>
    )}/>)
};

const App = () => {
    const dispatch = useDispatch();

        useEffect(()=>{
            dispatch(handleInitialData());
        },[dispatch]);
        return (
            <Router>
                <LoadingBar style={{backgroundColor: colors.primary, height: "6px"}}/>


                        <Nav/>
                        <Switch>
                            <PrivateRoute path="/" exact component={Dashboard}/>
                            <Route path="/login" component={Login}/>
                            <PrivateRoute path='/add' component={NewQuestion}/>
                             <PrivateRoute path='/leaderboard' component={Leaderboard}/>
                            <PrivateRoute path='/questions/:question_id' component={QuestionRouter}/>
                            <Route component={NoMatch}/>
                        </Switch>

            </Router>


        )

}

export default App;
