import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  az: {
    translation: {
      home: "ANA SƏHİFƏ",
      about: "HAQQIMIZDA",
      services: "XİDMƏTLƏR",
      partners: "PARTNYORLAR",
      contact: "ƏLAQƏ",
      career: "KARYERA",
    },
  },
  en: {
    translation: {
      home: "HOME",
      about: "ABOUT",
      services: "SERVICES",
      partners: "PARTNERS",
      contact: "CONTACT",
      career: "CAREER",
    },
  },
  ru: {
    translation: {
      home: "ГЛАВНАЯ",
      about: "О НАС",
      services: "УСЛУГИ",
      partners: "ПАРТНЁРЫ",
      contact: "КОНТАКТ",
      career: "КАРЬЕРА",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az',
    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
