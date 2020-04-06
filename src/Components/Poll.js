import React from "react";
import Avatars from "./Avatar";
import {useSelector} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import {Body, SubTitle} from "./UI/text/TextOptions";
import {Wrapper, Row, Col, Container} from "./UI/shared/Container"
import {Profile, Question, Text} from "./UI/styles/Poll";
import {StyledLink} from "./UI/elements/Button";



const Poll = withRouter((props) => {
    const question = useSelector(state => state.question[props.id])
    const avatar =  useSelector(state => state.users[question.author].avatarURL)

    const {id, author, timestamp, optionOne, optionTwo} = question;
    return (
        <Container>
        <Wrapper padding={'15px'}>
            <Row>
                <Col size={2} align={'flex-start'}>
                    <Profile>
                        <Avatars avatar={avatar}/>
                        <SubTitle>{`@${question.author}`}</SubTitle>
                    </Profile>
                </Col>
                <Col size={1} >
                    <Row direction={"column"}>
                        <Question>
                            <SubTitle>Would you rather...</SubTitle>
                            <Text>{`${optionOne.text}....`}</Text>
                            <StyledLink to={{pathname: `/question/${id}`, answer: "false"}}>Go to Poll </StyledLink>
                        </Question>
                    </Row>
                </Col>
            </Row>
        </Wrapper>

        </Container>
    )


});

export default Poll