import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'
import Avatars from "./Avatar";
import {handleAddQuestionAnswer} from "../Store/Actions/questions";
import JustAnswered from "./JustAnswered";
import {InputGroup, Input, Label} from "./UI/elements/RadioButton";
import {Container, Wrapper, Row, Col} from "./UI/shared/Container";
import {Profile} from "./UI/styles/Poll";
import Button from "./UI/elements/Button";
import {SubTitle} from "./UI/text/TextOptions";

const Question = ({match}) => {
    const question = useSelector(state => state.question[match.params.question_id])
    const avatar = useSelector(state => state.users[question.author].avatarURL)
    const authedUser = useSelector(state => state.authedUser)
    const [answer, setAnswer] = useState("")
    const [answered, setAnswered] = useState(false)
    const dispatch = useDispatch();
    const {id, optionOne, optionTwo} = question

    const handleChange = (e)=> {
        setAnswer(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestionAnswer({
            authedUser,
            qid: id,
            answer
        }))

        setAnswered(true)
    }
    if (answered){
        return <JustAnswered id={id}/>
    }
    return (

        <Container>
            <Wrapper padding={'15px'}>
                <Row>
                    <Col size={2}>
                        <Profile>
                            <Avatars avatar={avatar}/>
                            <SubTitle>{`@${question.author}`}</SubTitle>
                        </Profile>
                    </Col>
                    <Col size={1}>
                        <form onChange={(e)=> handleChange(e)}>
                            <Row direction={'column'}>
                                <Col size={2}>
                                    <input type="radio" value="optionOne"/><label>{optionOne.text}</label>
                                </Col>
                                <Col size={2}>
                                    <input type="radio" value="optionTwo"/><label>{optionTwo.text}</label>
                                </Col>
                                <Col size={1}>
                                 <Button onClick={(e)=> handleSubmit(e)}>Submit your Choice</Button>
                                </Col>
                            </Row>
                        </form>

                    </Col>
                </Row>
            </Wrapper>
        </Container>
    )


}

export default Question