import React from "react";
import Avatars from "./Avatar";
import {useSelector} from "react-redux";
import {Wrapper, Row, Col, List, Container} from "./UI/shared/Container";
import {SubTitle, Body} from "./UI/text/TextOptions";
import {Profile, Question} from './UI/styles/Poll'


const Leaderboard = () => {
    const users = useSelector(state => state.users);
    const sorter = ()=> {
        const usersO = [];
        for (const user in users) {
            usersO.push(users[user])
        }
        const sorted =usersO.sort((a,b)=>(Object.keys(a.answers).length + a.questions.length < Object.keys(b.answers).length + b.questions.length) ? 1 : -1 );
        return sorted
    };

    const sorted = sorter();

//            <h2>LeaderBoard</h2> DON'T FORGET
    return(
        <Container>
            <List>
                {sorted.map(user=>(

                    <li key={user.id}>
                    <Wrapper content={'center'} padding={'15px'}>
                        <Row>
                            <Col size={1}>
                            <Profile>
                                <Avatars avatar={user.avatarURL}/>
                                <h2>{`@${user.id}`}</h2>
                            </Profile>
                            </Col>
                            <Col size={1}>
                                <Row direction={'column'}>
                                    <Col>
                                        <Question>
                                            <SubTitle>You asked:</SubTitle>
                                            <Body>{`${user.questions.length} questions`}</Body>
                                        </Question>
                                    </Col>
                                    <Col>
                                        <Question>
                                            <SubTitle>You Answered:</SubTitle>
                                            <Body>{`${Object.keys(user.answers).length} questions`}</Body>
                                        </Question>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Wrapper>
                    </li>

                ))}
            </List>
        </Container>
    )

};

export default Leaderboard