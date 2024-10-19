import React, { useEffect, useState } from 'react';
import TapBG from '../../assets/vs-circle.png';
import { Link } from 'react-router-dom'

import './TapLink.css'


const TapLink = ({activeTap}) => {


    return (
        <div className='wrapper-tap'>
            <Link className={`btn-tap ${activeTap && 'active'}`} to={"/tap-game"}>
                <img src={TapBG} alt="VS" />
            </Link>
        </div>
    );
};

export default TapLink;