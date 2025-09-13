import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

i18n.on('languageChanged', function (lng) {
  // if the language we switched to is the default language we need to remove the /en from URL
  if (lng === i18n.options.fallbackLng[0]) {
    if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
      const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
      window.location.replace(newUrl)
    }
  }
})

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    preload: ['fr'],
    resources: {
      fr: {
        translation: fr,
      },
      en: {
        translation: en,
      },
    },
    whitelist: ['fr', 'en'],
    fallbackLng: 'fr',
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;