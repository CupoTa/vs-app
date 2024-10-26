import React, { useEffect, useState } from 'react';
import TapBG from '../assets/vs-circle.png';
import { useTimer } from 'react-timer-hook';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateUser } from '../store/slices/userSlice';
import { checkTime, checkTestTime } from '../helpers';
import { CONFIG } from '../config';
import { useTranslation } from 'react-i18next';
import { IconDataBase, IconTimerTap } from '../components/icons/icons'

import WebApp from '@twa-dev/sdk';

const TapGamePage = () => {

    const [startGame, setStartGame] = useState(false)
    const [points, setPoints] = useState(0)
    const { t, i18n } = useTranslation()

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const time = new Date();
    time.setSeconds(time.getSeconds() + CONFIG.TIME_TAP_GAME)

    const { totalSeconds, isRunning, start } = useTimer({ expiryTimestamp: time, onExpire: () => updatePoints(), autoStart: false })

    const tapHandle = () => {
        if (!startGame) {
            WebApp.BackButton.hide()
            WebApp.enableClosingConfirmation()
            setStartGame(true)
            start()
            setPoints(points + (user.coeff * CONFIG.BASE_REWARD_TAP))
        }
        if (isRunning)
            setPoints(points + (user.coeff * CONFIG.BASE_REWARD_TAP))
    }

    const updatePoints = () => {
        WebApp.BackButton.show()
        WebApp.disableClosingConfirmation()
        const updateData = {
            ...user,
            points: user.points + points,
            lastTimeTap: Date.now()
        }
        dispatch(updateUser(updateData))
    }

    function formatTapPoints(points) {
        return new Intl.NumberFormat('en-En').format(points)
    }


    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 w-100'>
            <div className='info-game'>
                <div className='title-made'>{t('made_for_time')}</div>
                <div className='points-info'>
                    <span className='icon'>
                        <IconDataBase />
                    </span>
                    <span>
                        {formatTapPoints(points)}
                    </span>
                </div>
            </div>
            {
                checkTime(user) &&
                <button className='btn-tap' onClick={tapHandle} >
                    <img src={TapBG} alt="VS" />
                </button>
            }
            {
                !checkTime(user) &&
                <>
                    <p>Ждем вас через 8 часов</p>
                </>

            }
            <div className='info-timer'>
                <span><IconTimerTap /></span>
                <span>{totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}</span>
                <div>{ user.coeff * CONFIG.BASE_REWARD_TAP } VS/tap</div>
            </div>
        </div>
    );
};

export default TapGamePage;