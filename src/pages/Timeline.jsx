import React from "react";
import { useTranslation } from "react-i18next";
import "../css/Timeline.css";

const Timeline = () => {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });
  const base = import.meta.env.BASE_URL;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card noo">
            <div className="card-body">
              <div id="content">
                <ul className="timeline">
                  {/* Mini-evento CV como evento normal */}

                  {/* Eventos de experiencia */}
                  {experience.map((item, index) => (
                    <li className="event" data-date={item.year} key={index}>
                      <h3>{item.title}</h3>
                      <h5>{item.institution}</h5>
                      <p>{item.description}</p>
                    </li>
                  ))}

                  <li className="event cv-event" data-date="">
                    <h3>Curriculum Vitae</h3>
                    <p>
                      Descarga mi CV en Español o Inglés haciendo clic en los
                      botones.
                    </p>
                    <div className="cv-icons-center">
                      <a
                        href={`${base}assets/CV_ES.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-button"
                        title="CV Español"
                      >
                        📄 Español
                      </a>
                      <a
                        href={`${base}assets/CV_EN.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cv-button"
                        title="CV Inglés"
                      >
                        📄 English
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
