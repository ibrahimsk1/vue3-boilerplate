import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './locales/en.json'
import es from './locales/es.json'
import { defaultLocale } from '../constans/config';

Vue.use(VueI18n);

const messages = { en: en, es: es };
const i18n = new VueI18n({
    // set locale
    // options: en
    locale: localStorage.getItem('currentLanguage') || defaultLocale,
    // set locale messages
    messages,
});

export default i18n;