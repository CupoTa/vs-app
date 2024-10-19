import React, { useState, useEffect } from 'react';
import Quest from '../components/Quest/Quest';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuests, fetchQuests } from '../store/slices/questsSlice';

import { useTranslation } from 'react-i18next';

const LoaderQuests = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='wrapper-loader-quests'>
            <h6>{t('title')}</h6>
            <div className="loader-quests"></div>
        </div>
    )
}

const QuestsPage = () => {


    // Создать локальный стейт и сессию для квестов
    // По подобию userSlice
    const dispatch = useDispatch()
    const quests = useSelector(selectQuests)
   
    useEffect(() => {
        dispatch(fetchQuests()) 
    }, [])

    if(quests.loading == 'pending') return <LoaderQuests/>

    return (
        <>
            <h3 className='title-page'>Задания ({0}/{quests.data.length})</h3>
            {quests.data.length > 0 ?
                <div>
                    {
                        quests.data.map((quest, key) => {
                            return <Quest quest={quest} key={key} />
                        })
                    }
                </div>
                :
                <h4 className='text-info text-center mt-5' >Нет доступных заданий</h4>
            }
        </>
    );
};

export default QuestsPage;