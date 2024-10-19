import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconQuests, IconFriends, IconHome, IconMatrix, IconTables, IconUpgrade } from '../icons/icons'

import './Navigate.css';

const Navigate = () => {
    return (
        <div className={`wrapper-nav fixed-bottom`} >
            <div>
                <NavLink to={'/'} className={'nav-link'} style={{paddingTop: "7px"}}>
                    <IconHome size={28} />
                    <span>Домой</span>
                </NavLink>
            </div>
            <div>

                <a href={"#!"} state={{ parent: location.pathname }} className={'nav-link link-disabled'} style={{paddingTop: "4px"}}>
                    <IconTables size={28} />
                    <span>Игровая</span>
                </a>
            </div>
            <div>
                <NavLink to={'/quets'} className={'nav-link'}>
                    <IconQuests size={28}/>
                    <span>Задания</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/magic-box'} state={{ parent: location.pathname }} className={'nav-link'}>
                    <IconUpgrade size={28} />
                    <span>Сундук</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/friends'} className={'nav-link'}>
                    <IconFriends size={28} />
                    <span>Друзья</span>
                </NavLink>
            </div>
            <div>
                <a className={'nav-link link-disabled'} href={"#!"}>
                    <IconMatrix size={28} />
                    <span>Матрица</span>
                </a>
            </div>
        </div>
    );
};

export default Navigate;