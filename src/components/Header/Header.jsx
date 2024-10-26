import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slices/userSlice';
import { formatPoints } from '../../helpers';
import { IconSettings, IconPoints } from '../icons/icons';

import './Header.css'

import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

    const user = useSelector(selectUser)
    const location = useLocation()

    return (
        <div className='wrapper-header fixed-top'>
            <div className='points'>
                <IconPoints /><span>{formatPoints(user?.points)}</span>
            </div>
            <div className='name-user'>
                {user?.tgUserName}
                <div className='header-nav'>
                    <NavLink to={'/profile'} state={{ parent: location.pathname }} >
                        <IconSettings size={28} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;