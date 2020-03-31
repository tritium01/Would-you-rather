import React from "react";
import {Link} from "react-router-dom";


export default function DashNav(props) {

    return(
        <div>
            <ul>
            <li>
                <Link to='/dashboard/unanswered' >
                   UnAnswered
                </Link>
            </li>
            <li>
                <Link to='/dashboard/answered'>
                    Answered
                </Link>
            </li>
            </ul>
        </div>
    )
}