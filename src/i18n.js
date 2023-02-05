import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = [ "en", "bn" ];

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const option = {
    order: [ 'navigator', 'htmlTag', 'path', 'subdomain' ],
    checkWhitelist: true
};

i18n

    .use( Backend )

    .use( LanguageDetector )

    .use( initReactI18next )

    .init( {
        fallbackLng: 'en',
        debug: true,
        detection: option,
        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    } );


export default i18n;