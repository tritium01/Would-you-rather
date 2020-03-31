import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Nav() {
    const user = useSelector(state => state.authedUser != null ? state.users[state.authedUser].name : " ")
    console.log(user)
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link to='/home'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/home/add'>
                        New Question
                    </Link>
                </li>
                <li>
                    <Link to='/home/leaderboard'>
                        LeaderBoard
                    </Link>
                </li>
                <li>
                    {`Welcome back, ${user}`}
                </li>
            </ul>
        <hr/>
        </nav>

    )
}