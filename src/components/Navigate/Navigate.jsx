import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconQuests, IconFriends, IconHome, IconMatrix, IconTables, IconUpgrade } from '../icons/icons'
import { useTranslation } from 'react-i18next';

import './Navigate.css';

const Navigate = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className={`wrapper-nav fixed-bottom`} >
            <div>
                <NavLink to={'/'} state={{ parent: location.pathname }} className={'nav-link'} style={{paddingTop: "7px"}}>
                    <IconHome size={28} />
                    <span>{ t('nav.home') }</span>
                </NavLink>
            </div>
            <div>

                <a href={"#!"} className={'nav-link link-disabled'} style={{paddingTop: "4px"}}>
                    <IconTables size={28} />
                    <span>{ t('nav.game') }</span>
                </a>
            </div>
            <div>
                <NavLink to={'/quets'} state={{ parent: location.pathname }} className={'nav-link'}>
                    <IconQuests size={28}/>
                    <span>{ t('nav.quests') }</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/magic-box'} state={{ parent: location.pathname }} className={'nav-link'}>
                    <IconUpgrade size={28} />
                    <span>{ t('nav.upgrade') }</span>
                </NavLink>
            </div>
            <div>
                <NavLink to={'/friends'} state={{ parent: location.pathname }} className={'nav-link'}>
                    <IconFriends size={28} />
                    <span>{ t('nav.friends') }</span>
                </NavLink>
            </div>
            <div>
                <a className={'nav-link link-disabled'} href={"#!"}>
                    <IconMatrix size={28} />
                    <span>{ t('nav.matrix') }</span>
                </a>
            </div>
        </div>
    );
};

export default Navigate;