import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Contact.css"; // Asegúrate de que tienes el CSS

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      document.getElementById("subject").value
    );
    const body = encodeURIComponent(document.getElementById("message").value);
    window.location.href = `mailto:ivanfuenla18@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>

      <div className="social-links">
        <a
          href="https://github.com/Ivanfuenla18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${import.meta.env.BASE_URL}github-50.png`} alt="GitHub" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/iván-paniagua-194314205/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${import.meta.env.BASE_URL}linkedin-50.png`} alt="LinkedIn" /> LinkedIn
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>{t("contact.subject")}</label>
        <input type="text" id="subject" required />

        <label>{t("contact.message")}</label>
        <textarea id="message" required />

        <button type="submit">{t("contact.send")}</button>
      </form>
    </div>
  );
};

export default Contact;
