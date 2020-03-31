import React, {useEffect} from 'react';
import {handleInitialData} from "../Store/Actions/shared";
import {useDispatch, useSelector} from "react-redux";
//import Login from "./login"
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import UnAnswered from "./Unanswered";
import {Container} from "@material-ui/core";
import Nav from "./Navigation/MainNav";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";




function App () {
        const dispatch = useDispatch();
        const loading = useSelector(state => state.authedUser === null)

        useEffect(()=>{
            dispatch(handleInitialData());

        },[handleInitialData])

        return (
               <Router>
                <LoadingBar style={{backgroundColor: "green", height: "20px"}}/>
                <div className="Container">
                <Nav/>
                    {loading
                    ? null
                    :   <div>
                            <Route path="/home" exact component={Dashboard}/>
                            <Route path='/home/add' component={NewQuestion}/>
                            <Route path='/home/leaderboard' component={Leaderboard}/>
                        </div>

                    }
                </div>
               </Router>


        )

}

export default App;
