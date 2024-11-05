import React, { useEffect } from 'react'
import './About.css'
import Chala from '../../assets/chala.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // Animación con ScrollTrigger para la imagen
        gsap.fromTo(
            '.Hoja',
            {
                scale: 0.8, // Empieza más pequeña (80% del tamaño original)
            },
            {
                scale: 1, // Llega al tamaño original
                scrollTrigger: {
                    trigger: '.container.about', // El contenedor de la imagen activa la animación
                    start: 'top 80%', // Inicia la animación cuando el top del contenedor está al 80% del viewport
                    end: 'bottom bottom', // Finaliza cuando el top del contenedor alcanza el 30%
                    scrub: true, // La animación se vincula al scroll
                },
                duration: 2, // Duración de la animación
                ease: 'power2.out', // Suavizado de la animación
            }
        );

        // Función para separar las letras en spans
        const splitTextIntoSpans = (selector) => {
            const element = document.querySelector(selector);
            if (element) {
                const text = element.innerText;
                const splitText = text
                    .split("") // Separa cada carácter
                    .map((char) => {
                        if (char === " ") {
                            return `<span style="display: inline-block;">&nbsp;</span>`; // Usa &nbsp; para mantener el espacio
                        }
                        return `<span style="display: inline-block">${char}</span>`; // Crea un span visible para otros caracteres
                    })
                    .join("");
                element.innerHTML = splitText;
            }
        };
        
        
        // Separar el texto de h2 en spans
        splitTextIntoSpans(".txt.about h2");

        // Animación de las letras de h2 con ScrollTrigger
        gsap.fromTo(
            ".txt.about h2 span",
            {
                y: 80,
            },
            {
                y: 0,
                stagger: 0.05,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".txt.about h2",
                    start: 'top 80%', // Empieza la animación cuando el h2 entra en la vista
                    end: 'bottom 60%',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className='container about'>
            <img src={Chala} alt="Hoja de Marihuana" className='Hoja' />
            <div className="txt about">
                <h2>¿Quiénes <span className="space"></span> somos?</h2>
                <p><strong>Alisos Club</strong> es una Asociación Civil comprometida con el <strong>bienestar y la salud</strong> en la
                    provincia de <strong>Tucumán, Argentina</strong>. Nos dedicamos a ofrecer información, asistencia
                    y productos de <strong>cannabis medicinal</strong> de alta calidad, <strong>cultivados y producidos</strong> bajo los
                    más altos estándares. Nuestro enfoque se centra en <strong>eliminar el estigma y la desinformación</strong>, promoviendo un <strong>consumo responsable y consciente</strong>. Además, nos
                    comprometemos con la <strong>sostenibilidad ambiental y la investigación científica</strong> para
                    seguir avanzando en el campo del <strong>cannabis medicinal</strong>. En <strong>Alisos Club</strong>, nuestra
                    visión es crear una comunidad unida por el cuidado, la solidaridad y el respeto por
                    la naturaleza, <strong>donde cada asociado se sienta parte de algo significativo</strong>.</p>
            </div>
        </div>
    )
}

export default About