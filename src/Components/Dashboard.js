import React, {useState} from "react";
import {useSelector} from "react-redux";
import Answered from "./Answered";
import Poll from "./Poll";
import styled from "styled-components";
import {TabsContainer, Tab} from './UI/elements/Tabs'
import {Row, List} from "./UI/shared/Container";


const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    subNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }

}



const Dashboard = ({match}) => {
    const user = useSelector(state => state.users[state.authedUser]);
    const answered = useSelector(state => Object.keys(state.users[state.authedUser].answers));
    const questions = useSelector(state=> Object.keys(state.question).sort((a, b)=> state.question[b].timestamp - state.question[a].timestamp));
    const [index, setIndex] = useState(false);

    const id = questions.filter((id)=>{
        return index ? answered.includes(id): !answered.includes(id)
    });

    return (
        <div>
            <Row>
                <TabsContainer>
                    <Tab className={index ? '' : 'active'} onClick={()=> setIndex(false)}>Unanswered</Tab>
                    <Tab className={index ? 'active' : ''} onClick={()=> setIndex(true)}>Answered</Tab>
                </TabsContainer>
            </Row>

            <div style={styles.container}>
                    <List>
                    {id.map(id => (
                        <li key={id}>
                            {index
                                ? <Poll id={id}/>
                                : <Poll id={id}/>
                            }
                        </li>
                    ))}
                    </List>

            </div>


            <div>

            </div>

        </div>

    )
}

export default Dashboard