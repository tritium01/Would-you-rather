import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {setAuthedUser} from "../Store/Actions/authedUser";
import {Redirect, withRouter} from 'react-router-dom'
import Button from "./UI/elements/Button";
import {Container, Wrapper, Row, Col} from "./UI/shared/Container";
import {Select} from "./UI/elements/input";
import {Title} from "./UI/text/TextOptions";
import {toast} from "react-toastify";


const Login = withRouter((props) => {
        const {users} = useSelector(state => state);
        const dispatch =  useDispatch();
        const [id, setId] = useState(null);
        const [redirect, setRedirect] = useState(false);
        const from = (props.location.state && props.location.state.from.pathname) || {from: {pathname: '/'}};

        const handleLogIn = ()=>{
            if(id !== null) {
                dispatch(setAuthedUser(id));
                setRedirect(true);
            } else {
                toast.warn("Please select a user")
            }
        }
        if(redirect){
          return <Redirect to={from === undefined ? './' : from}/>
        }

        return (
                <Container>
                    <Wrapper padding={'100px'}>
                        <Row>
                            <Title>Would you rather</Title>
                        </Row>
                        <Row>
                            <Col>
                        <Select onChange={(e)=> setId(e.target.value)}>
                                <option>Please select your user</option>
                            {users && Object.values(users).map(user => (
                                <option value={user.id} key={user.id}>{user.name}</option>
                            ))
                            }
                        </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                             <Button onClick={(e)=> handleLogIn()}>Login</Button>
                            </Col>
                        </Row>
                    </Wrapper>
                </Container>
        )
});

export default Login