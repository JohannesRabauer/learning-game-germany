import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import deCommon from './locales/de/common.json';
import deGame from './locales/de/game.json';
import deSubjects from './locales/de/subjects.json';
import deRewards from './locales/de/rewards.json';
import enCommon from './locales/en/common.json';
import enGame from './locales/en/game.json';
import enSubjects from './locales/en/subjects.json';
import enRewards from './locales/en/rewards.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { common: deCommon, game: deGame, subjects: deSubjects, rewards: deRewards },
      en: { common: enCommon, game: enGame, subjects: enSubjects, rewards: enRewards },
    },
    defaultNS: 'common',
    fallbackLng: 'de',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'kluge_eule_language',
    },
  });

export default i18n;
