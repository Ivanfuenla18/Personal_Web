import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation("conf");

  return (
    <section className="container min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
      <h1 className="display-1 fw-bold" style={{ color: "#7a1cb3" }}>
        404
      </h1>
      <h2 className="fw-bold mb-3" style={{ color: "#fff" }}>
        {t("notfound.title")}
      </h2>
      <p className="lead mb-4" style={{ color: "#fff", opacity: 0.8 }}>
        {t("notfound.text")}
      </p>
      <Link
        to="/"
        className="btn"
        style={{
          backgroundColor: "#7a1cb3",
          borderColor: "#7a1cb3",
          color: "#fff",
          fontWeight: "600",
        }}
      >
        {t("notfound.back")}
      </Link>
    </section>
  );
}

export default NotFound;
