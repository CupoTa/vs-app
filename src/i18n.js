import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import WebApp from '@twa-dev/sdk';


let lang = localStorage.getItem("lang") || WebApp.initDataUnsafe?.user?.language_code

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: lang,
        fallbackLng: lang,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        // backend: {
        //     // путь к файлам перевода
        //     loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`, // замените на ваш путь
        //   },
    });


export default i18n;