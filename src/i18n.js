import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  az: {
    translation: {
      welcomeMessage: "Xoş gəldiniz!",
      menu: {
        home: "Ana səhifə",
        about: "Haqqında",
        photos: "Rəsmlər",
        contact: "Əlaqə",
      },
    },
  },
  en: {
    translation: {
      welcomeMessage: "Welcome to our website!",
      menu: {
        home: "Home",
        about: "About",
        photos: "Arts",
        contact: "Contact",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "az",
  resources,
});

export default i18n;
