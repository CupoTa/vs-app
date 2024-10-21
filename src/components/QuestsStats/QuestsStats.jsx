import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './QuestsStats.css';


const QuestsStats = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='questsStats-section'>
            <div className='title-section'>{ t('quests') }</div>
            <div className='wrapper-progress-quests'>
                <div className='wrapper-completed'>
                   13/30 { t('completed') }
                   <ProgressBar className='quests-progress' now={13} max={30}/>
                </div>
                <Link to="/quests" className='no-wrap'>{ t('see-all') }</Link>
            </div>
        </div>
    );
};

export default QuestsStats;