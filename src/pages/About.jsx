import React from "react";
import "../css/About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("conf");
  const details = t("about.details", { returnObjects: true });
  const highlights = t("about.highlights", { returnObjects: true });

  const purpleColor = "#7a1cb3";

  return (
    <section
      id="sobre"
      className="container min-vh-100 d-flex align-items-center py-5"
    >
      <div className="row justify-content-center align-items-center">
        {/* Lado de la Imagen */}
        <div className="col-12 col-lg-5 d-flex justify-content-center mb-5 mb-lg-0">
          <div className="position-relative">
            <img
              className="img-fluid shadow-lg"
              alt="Iván Paniagua Sánchez"
              src={`${import.meta.env.BASE_URL}Foto-perfil.png`}
              style={{
                borderRadius: "2.5rem",
                border: `6px solid #fff`, // Borde Morado
                objectFit: "cover",
                maxWidth: "320px",
                backgroundColor: "#fff",
              }}
            />
            <div
              className="position-absolute top-0 start-0 translate-middle badge rounded-pill p-3 shadow"
              style={{ zIndex: 1, backgroundColor: purpleColor, color: "#fff" }}
            >
              Dev
            </div>
          </div>
        </div>

        {/* Lado del Texto */}
        <div className="col-12 col-lg-7 text-center text-lg-start px-4">
          <h1 className="display-3 fw-bold mb-2" style={{ color: "#fff" }}>
            {t("about.title")}
          </h1>
          <h4 className="fw-bold mb-4" style={{ color: "#fff", opacity: 0.8 }}>
            {t("about.description")}
          </h4>

          <div className="mb-4">
            {details.map((paragraph, index) => (
              <p
                key={index}
                className="lead mb-3"
                style={{ color: "#fff", fontSize: "1.1rem" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights con fondo morado y texto blanco */}
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
            {highlights.map((item, index) => (
              <span
                key={index}
                className="badge p-2 px-3 rounded-pill shadow-sm"
                style={{
                  backgroundColor: purpleColor,
                  color: "#fff",
                  border: `1px solid ${purpleColor}`,
                  fontSize: "0.9rem",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
