import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
const tr = require('./tr.json');
const en = require('./en.json');

const i18n = new I18n({
    en: en,
    tr: tr,
});


i18n.locale = getLocales()[0].languageCode ?? 'en';
i18n.enableFallback = true;

export default i18n;