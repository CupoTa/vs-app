import React, { useState, useEffect } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useTonConnect } from '../../hooks/useTonConnect';
import { fromNano } from '@ton/core';
import { useTonClient } from '../../hooks/useTonClient';
import { useTranslation } from 'react-i18next';
import { CONFIG } from '../../config';
import { IconTON } from '../icons/icons'


import './DonateBtn.css';

const InputNumber = ({ count, setCount, amount }) => {

    
    const decrement = () => {
        if( count > 1){
            setCount(count - 1)
        } else {
            setCount(1)
        }
    }

    const increment = () => {
        console.log()
        if(Math.floor(Number(amount) / CONFIG.BASE_DONATE) > count){
            setCount(count + 1)
        }
    }

    return (
        <div className='wrapper-count-input'>
            <button className='decrement control' onClick={decrement}>-</button>
            <div className='count-value'>{count}</div>
            <button className='increment control' onClick={increment}>+</button>
        </div>
    )
}

const DonateBtn = () => {

    const [count, setCount] = useState(1)
    const [balance, setBalance] = useState(0)
    const { connected, address, sender } = useTonConnect()
    const [tonConnectUI] = useTonConnectUI();
    const { client } = useTonClient()

    const { t, i18n } = useTranslation()

    const connectWallet = () => {
        !connected && tonConnectUI.modal.open()
    }

    const value = CONFIG.BASE_DONATE * count

    const donate = async () => {
        const data = {
            to: "0QBgKuRFn7D2BvlOsC25idrnc6VTTom6NSxXaAllACfh2fPU",
            value: value
        }
        const t = await sender.send(data)
        console.log(t)
    }

    const shortenAddress = (address) => {
        return `${address.slice(0, 5)}...${address.slice(-5)}`
    }

    useEffect(() => {
        async function getBalance() {
            if (client) {
                const tb = await client.getBalance(address)
                setBalance(tb)
            } else {
                setBalance(0n)
            }

        }

        getBalance()
    }, [address, client, connected])


    const formatBalance = (num) => {
        return parseFloat(fromNano(num)).toFixed(3)
    }
    // если нет подключения возвращаем кнопку подключить
    // если есть то кнопку с функцией отправки в параметрах из управляемого поля типа нумбер
    // берем значение

    return (
        <>
            <InputNumber count={count} setCount={setCount} amount={balance}/>
            {connected && <button className='btn-donate' disabled={count == 0} onClick={donate}>{t("donate")} { fromNano(value) }<IconTON/></button>}
            {!connected && <button className='btn-donate btn-connect' onClick={connectWallet}><IconTON/> {t('connect')}</button>}
            {
                connected &&
                <div className='wrapper-info-address'>
                    <small className='d-flex align-items-center'>{shortenAddress(address)}</small>
                    <small className='d-flex align-items-center'>{formatBalance(balance)}<IconTON/></small>
                </div>
            }
        </>
    );
};

export default DonateBtn;