import React, {Component} from 'react';
import {connect} from "react-redux"
import {handleInitialData} from "../Store/Actions/shared";
import Login from "./login";




class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        return (
        <div>
            <Login/>
        </div>

        )
    }
}

function mapStateToProps ({users, questions}){
    return{
        users,
        questions
    }
}
export default connect(mapStateToProps)(App);
