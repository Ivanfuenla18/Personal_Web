import i18next from "i18next";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const initI18n = async () => {
  try {
    await i18next
      .use(backend)
      .use(initReactI18next)
      .init({
        fallbackLng: "es",
        supportedLngs: ["es", "en"],
        ns: ["conf"],
        defaultNS: "conf",
        backend: {
          // Usa el base configurado en vite.config.js ("/Personal_Web/"),
          // tanto en desarrollo como en producción, en lugar de hardcodearlo.
          loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
        },
      });
  } catch (error) {
    console.error("Error al cargar i18next", error);
  }
};

initI18n();
