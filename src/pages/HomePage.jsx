import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/userSlice';
import { formatPoints } from '../helpers';
import { useTimer } from 'react-timer-hook';
import { checkTestTime, checkTime } from '../helpers';
import AutoFarm from '../components/AutoFarm/AutoFarm';
import TapLink from '../components/TapLink/TapLink';
import InfoTabs from '../components/InfoTabs/InfoTabs';
import { IconPoints, IconTimer } from '../components/icons/icons';
import { CONFIG } from '../config'



const HomePage = () => {

    const user = useSelector(selectUser)
    const [activeTap, setActiveTap] = useState(checkTime(user))

    const time = new Date(user.lastTimeTap);

    time.setSeconds(time.getSeconds() + CONFIG.PERIOD_COOLING)

    const { minutes, hours, seconds } = useTimer({ expiryTimestamp: time, onExpire: () => setActiveTap(true) })


    return (
        <div className='row'>
            <div className='col-12'>
                <InfoTabs/>
            </div>
            <div className='col-12'>
                <AutoFarm/>
                <div className='d-flex justify-content-center align-items-center flex-column w-100 align-content-center'>
                    <div className='all-points d-inline-flex'>
                        <IconPoints/>
                        <span>{formatPoints(user?.points)}</span>
                    </div>
                    <TapLink activeTap={activeTap}/>
                    <div className='info-tap'>
                        <div className='timer-tap'><IconTimer/><div className='d-flex align-items-end'>{ hours }:{ minutes < 10 ? "0" + minutes : minutes}, <small className='seconds mb-1'>{ seconds < 10 ? "0" + seconds : seconds }</small></div></div>
                        <div className='tap-points'>+{ user.coeff * CONFIG.BASE_REWARD_TAP}<small>/tap</small></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;