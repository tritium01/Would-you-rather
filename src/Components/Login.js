import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {setAuthedUser} from "../Store/Actions/authedUser";
import {Redirect, withRouter} from 'react-router-dom'
import Button from "./UI/elements/Button";
import {Container, Wrapper, Row, Col} from "./UI/shared/Container";
import styled from "styled-components";



const Login = withRouter((props) => {
        const {users} = useSelector(state => state);
        const dispatch =  useDispatch();
        const [id, setId] = useState("null");
        const [redirect, setRedirect] = useState(false);
        const from = props.location.state.from.pathname || {from: {pathname: '/'}};

        const handleLogIn = ()=>{
            dispatch(setAuthedUser(id));
            setRedirect(true);
        }

        if(redirect){
          return <Redirect to={from === undefined ? './' : from}/>
        }

        return (
                <Container>
                    <Wrapper padding={'15px'}>
                        <Row>
                            <Col>
                        <select onChange={(e)=> setId(e.target.value)}>
                                <option>Please select your user</option>
                            {users && Object.values(users).map(user => (
                                <option value={user.id} key={user.id}>{user.name}</option>
                            ))
                            }
                        </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Button onClick={()=> handleLogIn()}>Login</Button>
                            </Col>
                        </Row>
                    </Wrapper>
                </Container>
        )
});

export default Login