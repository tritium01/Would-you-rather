import React from "react";
import {Avatar} from "./UI/elements/Avatar";
import cero from '../Assets/images/0.png'
import one from '../Assets/images/1.png'
import two from '../Assets/images/2.png'
const Avatars = (props)=>{

    switch (props.avatar) {
        case 0 :
            return(
                <Avatar src={cero}/>
            );
        case 1 :
            return(
                <Avatar src={one}/>
            );
        case 2 :
            return(
                <Avatar src={two}/>
            )
    }
};

export default Avatars