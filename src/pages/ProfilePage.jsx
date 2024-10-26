import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import GamesStats from '../components/GamesStats/GamesStats';
import QuestsStats from '../components/QuestsStats/QuestsStats';
import WalletConnectBtn from '../components/WalletConnectBtn/WalletConnectBtn';

const ProfilePage = () => {

    const { t, i18n } = useTranslation()
    return (
        <div>
            <QuestsStats />
            <GamesStats />
            <LanguageSwitcher />
            <WalletConnectBtn />
        </div>
    );
};

export default ProfilePage;