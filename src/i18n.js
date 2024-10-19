import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import WebApp from '@twa-dev/sdk';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: WebApp.initDataUnsafe?.user.language_code,
        debug: true
    });


export default i18n;