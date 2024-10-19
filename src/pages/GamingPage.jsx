import React from 'react';
import { useOutletContext } from 'react-router-dom';

const GamingPage = () => {

    const {WebApp, value, tgID} = useOutletContext()

    return (
        <div>
            <h3>Игровая</h3>
            <div className="card">
                <p>TG ID: {tgID}</p>
                <button className='btn' onClick={() => WebApp.showConfirm(`Hello World! Current count is ${value}`)}>
                    Show Alert
                </button>
            </div>
        </div>
    );
};

export default GamingPage;