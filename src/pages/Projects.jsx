import React from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation("conf");
  const projects = t("projects", { returnObjects: true });

  const customButtonColor = "#7a1cb3";
  const customButtonHoverColor = "#6a169b";

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{
                backgroundColor: "#2d3748",
                color: "white",
                borderRadius: "0.5rem",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0.5rem 1rem rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
              }}
            >
              <img
                className="card-img-top"
                alt={project.title || "Project image"}
                src={`${import.meta.env.BASE_URL}${project.image}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5
                    className="card-title text-purple-400"
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {project.title}
                  </h5>

                  {/* AQUÍ ESTÁ EL STATUS REUPERADO */}
                  {project.status && (
                    <p
                      className="text-warning"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      ● {project.status}
                    </p>
                  )}

                  <p className="card-text text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* CONTENEDOR DE BOTONES DUALES */}
                <div className="d-flex justify-content-between pt-3 border-top border-secondary mt-3">
                  {/* BOTÓN GITHUB (URL desde el JSON) */}
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "transparent",
                        border: `2px solid ${customButtonColor}`,
                        color: "white",
                        fontWeight: "600",
                        flex: "1",
                        marginRight: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          customButtonColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      GitHub
                    </a>
                  )}

                  {/* BOTÓN VER WEB (URL desde el JSON) */}
                  {project.url && (
                    <a
                      href={project.url}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: customButtonColor,
                        borderColor: customButtonColor,
                        color: "white",
                        fontWeight: "600",
                        flex: "1",
                        marginLeft: "5px",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          customButtonHoverColor)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          customButtonColor)
                      }
                    >
                      {project.button || "View Site"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
