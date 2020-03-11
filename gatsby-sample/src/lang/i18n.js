import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationko from './translation.ko';
import translationen from './translation.en';
import translationja from './translation.ja';
import translationzh from './translation.zh';
import translationvi from './translation.vi';

// https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
const resources = {

    // 한국어 |English |日本語 |简体中文 |繁體中文 |tiếng Việt

    ko: {
        translation: translationko
    },
    en: {
        translation: translationen
    },
    ja: {
        translation: translationja
    },
    zh: {
        translation: translationzh
    },
    vi: {
        translation: translationvi
    },
    
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;
