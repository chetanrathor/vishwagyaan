import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const appWithTranslation = initReactI18next;

export const getStaticTranslations = serverSideTranslations;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: { escapeValue: false }, // React already escapes values
});

export default i18n;
