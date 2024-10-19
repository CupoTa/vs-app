import React, { useEffect } from 'react';
import { useCloudStorage } from '../hooks/useCloudStorage.js';

const QuestsPage = () => {

    const { getStorageItem } = useCloudStorage()

    useEffect(() => {

        getStorageItem("session")
        .then(timestamp => console.log(JSON.parse(timestamp)))
        .catch(e => {
            console.log("ERROR", e)
        })
        
    }, [])

    return (
        <div className=''>
            Earn
        </div>
    );
};

export default QuestsPage;