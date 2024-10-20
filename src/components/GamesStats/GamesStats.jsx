import React from 'react';
import GameItem from './GameItem';
import { useTranslation } from 'react-i18next';

import './GamesStats.css';


const GamesStats = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='gamesStats-section'>
            <div className='title-section'>{ t('games-stats') }</div>
            <GameItem/>
        </div>
    );
};

export default GamesStats;