import React, {useState} from 'react'
import {useSelector} from "react-redux";
import Avatars from "./Avatar";



function Question(props) {
    const question = useSelector(state => state.question[props.id])
    const avatar =  useSelector(state => state.users[question.author].avatarURL)

    const handleSubmit = ()=> {

    }

        const {id, author, timestamp, optionOne, optionTwo} = question;
        return (
            <div className="question-info">
                <Avatars avatar={avatar}/>
                <form onSubmit={handleSubmit}>
                    <input type="radio" value={optionOne}>{optionOne.text}</input>
                    <input type="radio" value={optionTwo}>{optionTwo.text}</input>
                </form>
            </div>
        )



}

export default Question