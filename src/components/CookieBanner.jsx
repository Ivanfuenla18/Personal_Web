import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/CookieBanner.css";

// ID de medición de Google Analytics del sitio.
const GA_MEASUREMENT_ID = "G-NPLS0F1PMH";
// Clave donde guardamos la decisión del usuario en localStorage.
const STORAGE_KEY = "cookie-consent";
// Evita inyectar el script de Google Analytics más de una vez.
let analyticsLoaded = false;

/**
 * Carga Google Analytics (gtag.js) de forma dinámica.
 * Solo se llama cuando el usuario ha aceptado las cookies.
 */
function loadGoogleAnalytics() {
  if (analyticsLoaded || typeof window === "undefined") return;
  analyticsLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

function CookieBanner() {
  const { t } = useTranslation("conf");
  const [visible, setVisible] = useState(false);

  // Al montar, revisamos la decisión guardada.
  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Si localStorage no está disponible, mostramos el banner igualmente.
    }

    if (stored === "accepted") {
      loadGoogleAnalytics();
    } else if (stored !== "rejected") {
      setVisible(true);
    }
  }, []);

  // Empuja el contenido hacia arriba mientras el banner está visible para no taparlo.
  useEffect(() => {
    if (!visible) return undefined;
    document.body.classList.add("has-cookie-banner");
    return () => document.body.classList.remove("has-cookie-banner");
  }, [visible]);

  const persist = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignoramos errores de almacenamiento (modo privado, etc.).
    }
  };

  const handleAccept = () => {
    persist("accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    persist("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.title")}
    >
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          <strong>{t("cookies.title")}. </strong>
          {t("cookies.message")}
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--reject"
            onClick={handleReject}
            aria-label={t("cookies.reject")}
          >
            {t("cookies.reject")}
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={handleAccept}
            aria-label={t("cookies.accept")}
          >
            {t("cookies.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
