import React from "react";
import{useSelector} from "react-redux";
import Avatars from "./Avatar";
import {Profile, Question} from './UI/styles/Answered'
import {Wrapper, Row, Col} from './UI/shared/Container'
import {Body, SubTitle, Title} from "./UI/text/TextOptions";
import {ProgressInTracker, Tracker} from "./UI/styles/ProgressBar";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
const JustAnswered = (props) => {
    const question = useSelector(state => state.question[props.id])
    const avatar =  useSelector(state => state.users[question.author].avatarURL)
    const totalOne = (question.optionOne.votes.length)
    const totalTwo = (question.optionTwo.votes.length)
    const chosen = (question.optionOne.votes.includes(question.author))? 'optionOne' : 'optionTwo';


    const percentage = (option) => {
        const total = totalOne + totalTwo;
        const answer=(((option.votes.length / total)*100).toFixed(0))
        return answer
    }

    return (
        <Container>
        <Wrapper>
                    <Row>
                        <Col>
                            <SubTitle>Your answer is:</SubTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={1} >
                            <Question shadow={chosen === "optionOne" ?'0px 0px 5px 1px rgba(0,0,0,0.19)' : ''} margin={'15px 80px'} >
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
                                <SubTitle>{`${question.optionTwo.text}`}</SubTitle>
                                <Body>{`Total votes:${totalTwo}`}</Body>
                                <Tracker>
                                    <ProgressInTracker percentage={`${percentage(question.optionTwo)}%`}>{`${percentage(question.optionTwo)}%`}</ProgressInTracker>
                                </Tracker>
                            </Question>
                        </Col>
                    </Row>
        </Wrapper>
        </Container>
    )



}

export default JustAnswered