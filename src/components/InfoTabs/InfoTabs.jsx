import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import './InfoTabs.css'
import InfoApp from './InfoApp';
import InfoMatrix from './InfoMatrix';

const InfoTabs = () => {
    return (
        <div className='wrapper-info-block'>
            <Tab.Container id={"tabs-info"} className="tabs-info" defaultActiveKey="app" fill>
                <Nav variant='pills' className="flex-row">
                    <Nav.Item>
                        <Nav.Link eventKey="app">App Stats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="matrix" disabled>Matrix Stats</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="app">
                        <InfoApp/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="matrix">
                        <InfoMatrix/>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
};

export default InfoTabs;