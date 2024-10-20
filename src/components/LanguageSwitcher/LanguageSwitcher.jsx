import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './LanguageSwitcher.css';

const LanguageSwitcher = () => {

  const [lng, setLng] = useState(localStorage.getItem("lang"))

  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    setLng(lng)
    localStorage.setItem("lang", lng)
    i18n.changeLanguage(lng);
  };

  return (
    <div className='section-language'>
      <div className='title-section'>{t('language')}</div>
      <div className='wrapper-switcher'>
        <button onClick={() => switchLanguage('en')} disabled={lng == "en"}>English</button>
        <button onClick={() => switchLanguage('ru')} disabled={lng == "ru"}>Русский</button>
      </div>
    </div>

  );
};

export default LanguageSwitcher;
