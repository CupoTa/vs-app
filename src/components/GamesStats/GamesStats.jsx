import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconGame1, IconGame2, IconGame3, IconWon, IconLost, IconReceived } from '../icons/icons'

import './GamesStats.css';

const TotalPoints = ({ total_points, children, total_title }) => {

    return(
        <div className='item'>
            <span>{ children }</span>
            <span className='total-points'>{ total_points }</span>
            <div className='game-stats'>
                <p>{ total_title }</p>
            </div>
        </div>
    )
}

const GameItem = ({ game_count, looses, wins, game_name, children }) => {

    const { t, i18 } = useTranslation()


    return (
        <div className='item'>
            <span>{children}</span>
            <span className='game-name'>{game_name}</span>
            <span className='game-count'>{game_count}</span>
            <span className='game-count-title'>{t('games.title')}</span>
            <div className='game-stats'>
                <div>
                    <span className='game-name'>{t('games.win')}:</span>
                    <span>{wins}</span>
                </div>
                <div>
                    <span className='game-name'>{t('games.loose')}:</span>
                    <span>{looses}</span>
                </div>
            </div>
        </div>
    );
};


const GamesStats = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='gamesStats-section'>
            <GameItem game_count={50} looses={30} wins={20} game_name={t('games.type_1_name')}>
                <IconGame1 />
            </GameItem>
            <GameItem game_count={200} looses={98} wins={102} game_name={t('games.type_2_name')}>
                <IconGame2 />
            </GameItem>
            <GameItem game_count={50} looses={30} wins={20} game_name={t('games.type_3_name')}>
                <IconGame3 />
            </GameItem>
            <TotalPoints total_title={ t('games.total.won') } total_points={"40k"}>
                <IconWon />
            </TotalPoints>
            <TotalPoints total_title={ t('games.total.lost') } total_points={"140k"}>
                <IconLost />
            </TotalPoints>
            <TotalPoints total_title={ t('games.total.received') } total_points={"400k"}>
                <IconReceived />
            </TotalPoints>
        </div>
    );
};

export default GamesStats;