import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTonConnectUI } from "@tonconnect/ui-react";
import { selectUser } from '../../store/slices/userSlice';
import { Database } from 'react-bootstrap-icons';
import { formatPoints } from '../../helpers';
import { IconSettings, IconPoints } from '../icons/icons';

import './Header.css'
import WebApp from '@twa-dev/sdk';
import { Link } from 'react-router-dom';

const Header = () => {

    const user = useSelector(selectUser)
    const [_, setOptions] = useTonConnectUI()

    useEffect(() => {
        setOptions({ language: WebApp.initDataUnsafe.user?.language_code });
    }, [])

    return (
        <div className='wrapper-header fixed-top'>
            <div className='points'>
                <IconPoints /><span>{formatPoints(user?.points)}</span>
            </div>
            <div className='name-user'>
                {user?.tgUserName}
                <div className=''>
                    <Link to={'/profile'}>
                        <IconSettings size={28} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;