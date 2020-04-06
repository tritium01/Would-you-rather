import React from "react";
import colors from "../../../utils/colors";


const styles= {
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 9,
        marginVertical: 80,
        borderWidth: 40,
        borderColor: 'black',
        flex: 1,

    }
}

const Card = (props)=> {
    return <div style={styles.card}>{props.children}</div>
}

export default Card