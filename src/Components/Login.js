import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {setAuthedUser} from "../Store/Actions/authedUser";






function Login () {
        const {users} = useSelector(state => state);
        const dispatch =  useDispatch();
        const [id, setId] = useState("null")

        const handleLogIn = ()=>{
            dispatch(setAuthedUser(id))
        }
        return (
            <div>
                <select onChange={(e)=> setId(e.target.value)}>
                        <option>Please select your user</option>
                    {users && Object.values(users).map(user => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                    ))
                    }
                </select>
                <button onClick={()=> handleLogIn()}>Login</button>
            </div>
        )
}

export default Login