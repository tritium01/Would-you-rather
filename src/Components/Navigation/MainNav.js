import React from "react";
import {useSelector} from "react-redux";
import AuthButton from './AuthButton'
import {NavList, StyledLink, NavItems} from "../UI/styles/MainNav";


const Nav = () => {
    const user = useSelector(state => state.authedUser != null ? state.users[state.authedUser].name : null)

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