import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleAddQuestion} from "../Store/Actions/questions";
import {Redirect} from "react-router-dom"

export default function NewQuestion() {
    const author = useSelector(state => state.authedUser)
    const [textOne, setTextOne] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [toHome, setToHome] = useState(false);
    const dispatch = useDispatch();

    const handleChangeOne = (e)=> {
        setTextOne(e.target.value)
    };
    const handleChangeTwo = (e)=> {
        setTextTwo(e.target.value)
    };
    const handleSubmit = (e)=> {
        e.preventDefault()
        dispatch(handleAddQuestion(textOne, textTwo, author));
        setTextOne("");
        setTextTwo("");
        setToHome(true);
    };

    if (toHome) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <h3>Make your own would you rather</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                  placeholder = "Option one"
                  value={textOne}
                  onChange={handleChangeOne}
                />
                <h2>Or:</h2>
                <textarea
                    placeholder = "Option Two"
                    value={textTwo}
                    onChange={handleChangeTwo}
                />
                <button>Submit</button>
            </form>

        </div>
    )
}