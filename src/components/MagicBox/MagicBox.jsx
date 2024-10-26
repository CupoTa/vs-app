import React, { useState } from 'react';
import './MagicBox.css';
import Box from './Box';
import { useTonConnect } from '../../hooks/useTonConnect'
import { TonConnectButton } from '@tonconnect/ui-react';
import { fromNano, toNano } from "@ton/core";
import DonateBtn from '../DonateBtn/DonateBtn';

const MagicBox = () => {

    const [boxOpen, setBoxOpen] = useState(false)

    return (
        <div className='wrapper-magicBox'>

            {
                boxOpen && <Box />
            }

            
            <DonateBtn/>
        </div>
    );
};

export default MagicBox;