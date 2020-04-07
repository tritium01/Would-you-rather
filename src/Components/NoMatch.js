import React, {useState} from "react";
import {Container, Wrapper, Row, Col} from "./UI/shared/Container";
import {Title} from "./UI/text/TextOptions";
import {Redirect} from 'react-router-dom'
import Avatars from "./Avatar";
import Button from "./UI/elements/Button";


const NoMatch = () => {
    const [home, setHome] = useState(false);
    const handleGoHome = (e) => {
        e.preventDefault();
        setHome(true);
    };

    if (home) {
        return <Redirect to='/'/>
    }
    return(
        <Container>
            <Wrapper padding={'100px'}>
                <Row direction={'column'}>
                <Col size={1}>
                <Avatars id={3}/>
                </Col>
                <Col size={1} padding={'0'}>
                <Title>404</Title>
                </Col>
                </Row>
                <Row>
                <Button onClick={(e)=> handleGoHome(e)}>Go Home</Button>
                </Row>
            </Wrapper>
        </Container>
    )
}


export default NoMatch