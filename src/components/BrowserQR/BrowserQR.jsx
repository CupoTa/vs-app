import React from 'react';
import './BrowserQR.css';
import VS_QR from '../../assets/vs_bot_app-qr.png'

const BrowserQR = () => {
    return (
        <div className='d-flex w-100 h-100 align-items-center justify-content-center flex-column'>
            <h1>VS</h1>
            <img src={VS_QR}/>
            <small>Go to mobile</small>
        </div>
    );
};

export default BrowserQR;