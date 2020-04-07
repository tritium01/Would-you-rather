import React, {useState} from "react";
import {useSelector} from "react-redux";
import Poll from "./Poll";
import {TabsContainer, Tab} from './UI/elements/Tabs'
import {Row, List, Container} from "./UI/shared/Container";



const Dashboard = () => {
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

            <Container>
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

            </Container>

        </div>

    )
};

export default Dashboard