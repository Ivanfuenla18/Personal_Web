import React from 'react'
import "./css/Header.css";

export const Head = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <img src="/icons8-oni-64.png" alt="Ivan Logo" width="30" height="30" className="d-inline-block align-top " />
                <a className="navbar-brand" href="/">Iván PS</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre">Sobre mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#proyects">Proyectos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                       

                    </ul>
                </div>
            </div>
        </nav>

    )
}
