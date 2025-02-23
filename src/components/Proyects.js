import React from 'react'
import "../components/css/Proyects.css"
export const Proyects = () => {
    return (
        <section id="proyects">
            <h1 class="text-white text-proy"  >Proyectos</h1>
            <div class="container  container-per " >



                <div class="card card-per" >
                    <img class="card-img-top" src="/Tres_en_raya.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Proyecto: Tres en Raya </h5>
                        <p class="card-text">Este proyecto consiste en un juego clásico de Tres en Raya (Tic-Tac-Toe) desarrollado con HTML, CSS y JavaScript puro, sin frameworks ni librerías adicionales. Es un juego para dos jugadores que se turnan para marcar "X" y "O" en una cuadrícula de 3x3.</p>
                        <a href="https://github.com/Ivanfuenla18/Tres-en-raya/tree/master" class="  btn-per">Ver codigo</a>
                    </div>
                </div>

                <div class="card card-per" >
                    <img class="card-img-top" src="/Annubis.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Proyecto: Anubis Gaming</h5>
                        <p class="card-text">
                        Este proyecto consiste en una página web de venta de videojuegos desarrollada con HTML, CSS, JavaScript, PHP y MySQL. Incluye un chatbot llamado THOT para ayudar a los usuarios a encontrar juegos, un minijuego de azar llamado MEHEN, un sistema de autenticación de usuarios y una tienda con carrito de compra y sistema de monedas canjeables. Se ha implementado con tecnologías como Node.js, Express y AJAX para una experiencia interactiva y personalizada.</p>
                        <a href="https://github.com/Ivanfuenla18/Anubis-Gaming/tree/master" class="  btn-per">Ver codigo</a>
                    </div>
                </div>



                
               </div>
        </section>


    )
}
