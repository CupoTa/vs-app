import React, { useEffect } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';


import './WalletConnectBtn.css'

const buttonRootId = "button-connect"

const WalletConnectBtn = ({ style }) => {

    const [ _, setOptions] = useTonConnectUI();

    useEffect(() => {

        const colorsSet = {
            connectButton: {
                background: "black",
    
            },
            text: {
                primary: "red",
                secondary: "green"
            }}

        setOptions({ buttonRootId, colorsSet,  uiPreferences: { theme: "DARK" }, language: localStorage.getItem("lang") });
        return () => setOptions({ buttonRootId: null });
    }, [setOptions, localStorage.getItem("lang")]);

    return (
        <div
            id={buttonRootId}
            className={"wrapper-button-ton"}
            style={{ width: 'auto', ...style }}
        ></div>
    );
};

export default WalletConnectBtn;