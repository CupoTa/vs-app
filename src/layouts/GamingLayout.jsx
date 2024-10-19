import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectUser } from '../store/slices/userSlice';

import WebApp from '@twa-dev/sdk'

const GamingLayout = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Шаблон игровой 45</h3>
            <h4 className='nav'><NavLink to={"/"} >Home</NavLink> | <NavLink to={'/earn'}>Задания</NavLink></h4>
            <Outlet context={{WebApp, value: user?.value, tgID: user?.tgID}} />
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <button
                className='btn'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <h1 style={{margin: 0}}>{user?.value}</h1>
                <button
                className='btn'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default GamingLayout;