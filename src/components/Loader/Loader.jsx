import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div className='loader_wrapper'>
            <div className="container-loader">
                <div className="back side"></div>
                <div className="left side"></div>
                <div className="right side"></div>
                <div className="top side"></div>
                <div className="bottom side"></div>
                <div className="front side"></div>
            </div>
        </div>
    );
};

export default Loader;