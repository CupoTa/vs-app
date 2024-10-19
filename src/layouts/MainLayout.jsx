import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';

import WebApp from '@twa-dev/sdk';
import Header from '../components/Header/Header';
import Navigate from '../components/Navigate/Navigate';

const MainLayout = () => {
    const location = useLocation()
    return (
        <>
            <Header />
            <Navigate />
            <div className='wrapper-page'>
                <Outlet context={WebApp} />
            </div>
        </>
    );
};

export default MainLayout;