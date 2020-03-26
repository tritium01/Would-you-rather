import React, {Component} from "react";
import {connect} from "react-redux"

class Login extends Component {


    render() {
        const {users, questions} = this.props;
        return (
            <div>
                <p>{console.log("These users:", users)}</p>
            </div>
        )
    }
}

function mapStateToProps({users, questions}){
    return{
        users,
        questions
    }
}
export default connect(mapStateToProps)(Login)