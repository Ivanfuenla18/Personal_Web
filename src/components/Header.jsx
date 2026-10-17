import { Link } from "react-router-dom";
import "../css/Header.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Header() {
  const { t, i18n } = useTranslation("conf");
  const [checked, setChecked] = useState(i18n.language === "en");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = checked ? "es" : "en";
    i18n.changeLanguage(newLang);
    setChecked(!checked);
  };

  // Cierra el menú al clicar cualquier enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Alternar menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg text-white">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex fl align-items-center">
          <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
            <img src={`${import.meta.env.BASE_URL}Icono_white.png`} alt="Logo" className="me-2" />
            <span className="navbar-brand">{t("nav.nav_title")}</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
          id="navbarNav"
        >
          <div className="d-flex dee flex-lg-row flex-column">
            <ul className="navbar-nav flex-lg-row flex-column mx-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLinkClick}>
                  {t("nav.nav_home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={handleLinkClick}
                >
                  {t("nav.nav_about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  onClick={handleLinkClick}
                >
                  {t("nav.nav_projects")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/experience"
                  onClick={handleLinkClick}
                >
                  {t("nav.nav_experience")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  {t("nav.nav_contact")}
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-lg-auto mt-3 mt-lg-0">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={toggleLanguage}
                />
                <span className="slider round"></span>
              </label>
              <span className="ms-2">{checked ? "EN" : "ES"}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
