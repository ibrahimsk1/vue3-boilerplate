import { createI18n } from 'vue-i18n/index'
import en from './locales/en.json'
import tr from './locales/tr.json'
import { defaultLocale } from '../constans/config';



const messages = { en: en, tr: tr };
const i18n = createI18n({
    locale: localStorage.getItem('currentLanguage') || defaultLocale,
    messages,
});

export default i18n;