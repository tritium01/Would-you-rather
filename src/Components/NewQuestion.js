import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleAddQuestion} from "../Store/Actions/questions";
import {Redirect, Prompt} from "react-router-dom"
import {Wrapper, Row, Col, Container} from "./UI/shared/Container";
import {SubTitle} from "./UI/text/TextOptions";
import Button from "./UI/elements/Button";
import {TextInput} from "./Navigation/TextInput";
import {toast} from 'react-toastify'

const NewQuestion = () => {
    const author = useSelector(state => state.authedUser)
    const [textOne, setTextOne] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [toHome, setToHome] = useState(false);
    const [isBlocking, setIsBlocking] = useState(false);
    const dispatch = useDispatch();

    const handleChangeOne = (e)=> {
        setTextOne(e.target.value);
        setIsBlocking(e.target.value.length > 0)
    };
    const handleChangeTwo = (e)=> {
        setTextTwo(e.target.value);
        setIsBlocking(e.target.value.length > 0)
    };
    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(handleAddQuestion(textOne, textTwo, author));
        setTextOne("");
        setTextTwo("");
        setToHome(true);
        toast.success("Your question was successfully added")
    };

    if (toHome) {
        return <Redirect to="/"/>
    }
    return (
        <Container>
        <Wrapper padding={'100px'}>
                <Prompt
                    when={isBlocking}
                    message={location =>
                        `are you sure you want to leave before submitting your question?`}
                />
            <Row>
                <Col size={1} padding={'0 0 15px 0'}>
                    <SubTitle>Would you rather</SubTitle>
                </Col>
            </Row>
            <Row direction={'column'}>
            <form>
                <Col size={1}>
                    <TextInput
                      placeholder = "Option One"
                      value={textOne}
                      onChange={handleChangeOne}
                    />
                </Col>
                <Col size={1}>
                    <SubTitle>Or:</SubTitle>
                </Col>
                <Col size={1}>
                    <TextInput
                        placeholder = "Option Two"
                        value={textTwo}
                        onChange={handleChangeTwo}

                    />
                </Col>
                <Col size={4} padding={'20px 0'} align={'center'}>
                    <Button onClick={(e)=> handleSubmit(e)}>Submit</Button>
                </Col>
            </form>
            </Row>

        </Wrapper>
        </Container>
    )
};

export default NewQuestion