import React, { useEffect, useState } from 'react';
import TapBG from '../assets/vs-circle.png';
import { useTimer } from 'react-timer-hook';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateUser } from '../store/slices/userSlice';
import { checkTime, checkTestTime } from '../helpers';
import { CONFIG } from '../config'

import WebApp from '@twa-dev/sdk';

const TapGamePage = () => {

    const [startGame, setStartGame] = useState(false)
    const [points, setPoints] = useState(0)

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


    return (
        <div className='d-flex flex-column justify-content-start align-items-center h-100'>
            <h1 className='text-center'>
                TapGame
            </h1>
            <div className='info-game'>
                <div className='points-info'>{points}</div>
                <div className='time-info'>{totalSeconds < 10 ? "0" + totalSeconds : totalSeconds}</div>
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
                    <div className='animate-result'>
                        <div className='points-total-tap'>{ points }</div>
                        <p>A</p>
                        <p>B</p>
                        <p>C</p>
                        <p>D</p>
                        <p>I</p>
                        <p>F</p>
                        <p>J</p>
                        <p>K</p>
                        <p>L</p>
                    </div>
                </>

            }
        </div>
    );
};

export default TapGamePage;