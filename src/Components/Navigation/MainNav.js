import React from "react";
import {Link, withRouter, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthedUser} from "../../Store/Actions/authedUser";
import {Redirect} from 'react-router-dom'
import Login from "../Login";
import AuthButton from './AuthButton'
import {NavList, StyledLink, NavItems} from "../UI/styles/MainNav";

const styles = {
    nav: {
        textDecoration: 'none',
        listStyleType: 'none',
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    navItem: {
        textDecoration: 'none',
    }
}



const Nav = () => {
    const user = useSelector(state => state.authedUser != null ? state.users[state.authedUser].name : null)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setAuthedUser(null))
    }
    return(

            <NavList>
                <NavItems>
                    <StyledLink to='/'>
                        Home
                    </StyledLink>
                </NavItems>
                <NavItems>
                    <StyledLink to='/add'>
                        New Question
                    </StyledLink>
                </NavItems>
                <NavItems>
                    <StyledLink to='/leaderboard'>
                        LeaderBoard
                    </StyledLink>
                </NavItems>
                <NavItems>
                    {`Welcome back, ${user}`}
                </NavItems>
                <NavItems>
                    <AuthButton/>
                </NavItems>
            </NavList>



    )
}

export default Nav