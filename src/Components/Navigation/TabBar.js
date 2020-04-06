import React, {useState} from "react";
import {TabsContainer, Tab} from '../UI/elements/Tabs'

const TabBar = ({firstTab, secondTab, activeIndex}) => {

    const [tabIndex, toggle] = useState(0);

    return (
        <TabsContainer>
            <Tab className={!tabIndex ? 'active' : ''} onClick={() => toggle(0) && activeIndex(0)}>
                {firstTab}
            </Tab>
            <Tab className={tabIndex ? 'active' : ''} onClick={() => toggle(1) && activeIndex(1)}>
                {secondTab}
            </Tab>
        </TabsContainer>
    );
};

TabBar.defaultProps = {
    firstTab: 'Answered',
    secondTab: 'Unanswered'
}

export default TabBar;