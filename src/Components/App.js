import React, {useEffect, useState} from 'react';
import {handleInitialData} from "../Store/Actions/shared";
import {useDispatch, useSelector} from "react-redux";
import NewQuestion from "./NewQuestion";
import {Route, Redirect, BrowserRouter as Router, Switch} from "react-router-dom";
import {useToasts} from 'react-toast-notifications'
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Nav from "./Navigation/MainNav";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Question from "./Question";
import NoMatch from "./NoMatch";
import colors from "../utils/colors";
import {Title} from "./UI/text/TextOptions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`

const PrivateRoute = ({component: Component, ...rest}) => {
    const authedUser = useSelector(state => state.authedUser);
    const {addToast} = useToasts();
    if (authedUser === null) {
        addToast('Please log in',{appearance: 'error', autoDismiss: 500})
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
    const loading = useSelector(state => state.authedUser === null);

        useEffect(()=>{
            dispatch(handleInitialData());
        },[dispatch]);


        
        return (
            <Router>
                <LoadingBar style={{backgroundColor: colors.primary, height: "6px"}}/>
                <Container><Title>Hola mundo</Title></Container>

                        <Nav/>
                        <Switch>
                            <PrivateRoute path="/" exact component={Dashboard}/>
                            <Route path="/login" component={Login}/>
                            <PrivateRoute path='/add' component={NewQuestion}/>
                             <PrivateRoute path='/leaderboard' component={Leaderboard}/>
                            <PrivateRoute path='/question/:question_id' component={Question}/>
                            <Route component={NoMatch}/>
                        </Switch>

            </Router>


        )

}

export default App;
