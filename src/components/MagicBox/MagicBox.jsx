import React, { useState } from 'react';
import './MagicBox.css';
import Box from './Box';
import { Button } from 'react-bootstrap';
import { useTonConnect } from '../../hooks/useTonConnect'
import { TonConnectButton } from '@tonconnect/ui-react';

const MagicBox = () => {

    const [boxOpen, setBoxOpen] = useState(false)
    const { connected, wallet, walletName } = useTonConnect()

    const openBox = () => {
        setBoxOpen(!boxOpen)
    }

    return (
        <div className='wrapper-magicBox'>
            <div className='wallet'>{connected && <TonConnectButton />}</div>

            {
                boxOpen && <Box />
            }

            {connected && <Button className='btn-buy' onClick={openBox}>Buy</Button>}
            {!connected && <TonConnectButton />}
        </div>
    );
};

export default MagicBox;