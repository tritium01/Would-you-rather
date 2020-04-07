import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Avatars from "./Avatar";
import {handleAddQuestionAnswer} from "../Store/Actions/questions";
import {Container, Wrapper, Row, Col} from "./UI/shared/Container";
import {Profile} from "./UI/styles/Poll";
import Button from "./UI/elements/Button";
import {SubTitle} from "./UI/text/TextOptions";
import Answered from "./Answered";
import {Questions} from './UI/styles/Question'

const Question = (props) => {
    const question = useSelector(state => state.question[props.id]);
    const avatar = useSelector(state => question.author !== undefined ? state.users[question.author].avatarURL : 'helloWorld');
    const authedUser = useSelector(state => state.authedUser);
    const [answer, setAnswer] = useState("");
    const [answered, setAnswered] = useState(false);
    const dispatch = useDispatch();
    const {id, optionOne, optionTwo} = question;

    const handleChange = (e)=> {
        setAnswer(e.target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestionAnswer({
            authedUser,
            qid: id,
            answer
        }));

        setAnswered(true)
    };
    if (answered){
        return <Answered id={id}/>
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
                                <Questions>
                                    <label><input type="radio" value="optionOne" name='selected'/>{optionOne.text}</label>
                                    <label><input type="radio" value="optionTwo" name='selected'/>{optionTwo.text}</label>
                                </Questions>
                                <Col size={1} padding={'15px'}>
                                 <Button onClick={(e)=> handleSubmit(e)}>Submit your Choice</Button>
                                </Col>
                            </Row>
                        </form>

                    </Col>
                </Row>
            </Wrapper>
        </Container>
    )


};

export default Question