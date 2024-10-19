import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateUser } from '../../store/slices/userSlice';
import { useTimer } from 'react-timer-hook';
import { IconTimer } from '../icons/IconTimer';
import { CONFIG } from '../../config'

import './AutoFarm.css'
import { formatPoints, getAutoFarmPoints } from '../../helpers';

const AutoFarm = () => {


    const [activeClass, setActiveClass] = useState(false)
    const [points, setPoints] = useState(0)
    const user = useSelector(selectUser)

    let time = new Date(user.lastTimeClaim)
    time.setSeconds(time.getSeconds() + CONFIG.PERIOD_COOLING)

    const dispatch = useDispatch()

    const amount = CONFIG.BASE_REWARD_FARM * user.coeff

    const { hours, minutes, seconds, restart, isRunning } = useTimer({ expiryTimestamp: time, onExpire: () => setActiveClass(true) })

    useEffect(() => {
        if(hours != 8 && minutes != 59)
            setPoints(points + amount)
    }, [minutes])

    useEffect(() => {
        setPoints(getAutoFarmPoints(user.lastTimeClaim, amount))
    }, [])

    const updateData = () => {
        
        dispatch(updateUser({
            ...user,
            lastTimeClaim: Date.now(),
            points: user.points + points
        }))
        setPoints(0)
        time = new Date(Date.now())
        time.setSeconds(time.getSeconds() + CONFIG.PERIOD_COOLING)
        restart(time)
    }

    return (
        <div className='row my-4'>
            <div className='col-6'>
                <span className='info'>{ formatPoints(points) } <small>+{ amount }/min</small></span>
            </div>
            <div className='col-6 justify-content-end d-flex'>
                <div className='wrapper-timer-claim me-1'>
                    <div className='timer-claim'><IconTimer/><div className='d-flex'>{ hours }:{ minutes < 10 ? "0" + minutes : minutes}, <small className='seconds'>{ seconds < 10 ? "0" + seconds : seconds }</small></div></div>
                    <button className='btn-claim' disabled={points == 0 && true} onClick={updateData}>Claim</button>
                </div>
            </div>
        </div>
    );
};

export default AutoFarm;