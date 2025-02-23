import React from 'react'
import './css/About.css';

export const About = () => {
  return (
    <div>
        <h1 class="text-white text-sobr"  >Sobre mí</h1>
    <section id="sobre" class="container min-vh-100 d-flex align-items-center justify-content-center">

    

    <div class="row about-sec ">

        <div class="col-md-4 d-flex justify-content-center">
            <img src="Foto-perfil.png" class="img-fluid img-container fot " alt="Foto de perfil" />
        </div>

      

        <div class="col-md-8 d-flex flex-column justify-content-center   text">
            <h1>¡Hola! Soy Iván Paniagua Sánchez</h1>


            <p>un apasionado del desarrollo de software con formación en
                Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM).
            </p>
            <p>
                Me encanta la programación y siempre estoy buscando aprender nuevas tecnologías para mejorar
                mis habilidades. Durante mi formación, he trabajado con HTML, CSS, JavaScript, React, PHP,
                Java, python y bases de datos como MySQL. Mi objetivo es crear soluciones eficientes
                y bien estructuradas, ya sea en el desarrollo web o en aplicaciones móviles y de escritorio.
            </p>
            <p>
                Soy una persona curiosa, autodidacta y con ganas de enfrentar nuevos desafíos en el mundo
                de la tecnología. Si quieres saber más sobre mí o trabajar juntos en un proyecto, ¡no dudes
                en contactarme! 🚀
            </p>



        </div>
    </div>

</section>
    </div>

  )
}
