import React from "react";
import {useSelector} from "react-redux";
import Avatars from "./Avatar";
import {Profile, Question} from './UI/styles/Answered'
import {Container, Col, Row, Wrapper} from './UI/shared/Container'
import {Body, SubTitle} from "./UI/text/TextOptions";
import {ProgressInTracker, Tracker} from "./UI/styles/ProgressBar";


const Answered = (props) => {
    const question = useSelector(state => state.question[props.id]);
    const avatar =  useSelector(state => state.users[question.author].avatarURL);
    const totalOne = (question.optionOne.votes.length);
    const totalTwo = (question.optionTwo.votes.length);
    const chosen = (question.optionOne.votes.includes(question.author))? 'optionOne' : 'optionTwo';


    const percentage = (option) => {
        const total = totalOne + totalTwo;
        return (((option.votes.length / total) * 100).toFixed(0))
    }

    //STILL NEEDS FIXING
    return (
        <Container>
            <Wrapper>
                <Row>
                <Col size={1}>
                    <Profile>
                        <Avatars avatar={avatar}/>
                        <SubTitle>{`@${question.author}`}</SubTitle>
                    </Profile>
                </Col>
                <Col size={2} justify={'center'}>
                    <Row>
                        <Col size={1}>
                            <Question shadow={chosen === "optionOne" ?'0px 0px 5px 1px rgba(0,0,0,0.19)' : ''} margin={'15px 80px'} >
                                {chosen === "optionOne" ? <SubTitle>You chose:</SubTitle> : null}
                                <SubTitle>{`${question.optionOne.text}`}</SubTitle>
                                <Body>{`Total votes:${totalOne}`}</Body>
                                <Tracker>
                                    <ProgressInTracker percentage={`${percentage(question.optionOne)}%`}>{`${percentage(question.optionOne)}%`}</ProgressInTracker>
                                </Tracker>
                            </Question>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={1}>
                            <Question shadow={chosen === 'optionTwo' ? '0px 0px 5px 1px rgba(0,0,0,0.19)' : ''} margin={'0 80px 15px 80px'}>
                                {chosen === "optionTwo" ? <SubTitle>You chose:</SubTitle> : null}
                                <SubTitle>{`${question.optionTwo.text}`}</SubTitle>
                                <Body>{`Total votes:${totalTwo}`}</Body>
                                <Tracker>
                                    <ProgressInTracker percentage={`${percentage(question.optionTwo)}%`}>{`${percentage(question.optionTwo)}%`}</ProgressInTracker>
                                </Tracker>
                            </Question>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </Wrapper>
        </Container>
    )



};

export default Answered;