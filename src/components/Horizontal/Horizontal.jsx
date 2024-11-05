import React, { useEffect, useRef } from 'react';
import './Horizontal.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Skate from '../../assets/skater.png';
import Caminante from '../../assets/caminante.png';

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
    const horizontalRef = useRef(null);
    const imgContainerRef = useRef(null);

    useEffect(() => {
        const horizontalElem = horizontalRef.current;
        const imgContainerElem = imgContainerRef.current;

        // Animar la opacidad del contenedor cuando aparece en la pantalla
        gsap.fromTo(horizontalElem, { opacity: 0, yPercent: 100 }, {
            opacity: 1,
            yPercent: 0,
            duration: 2,
            ease: "expo.out",
        });

        // Ajustar el desplazamiento horizontal en función del tamaño de la pantalla
        const xMove = window.innerWidth < 768 ? -120 : -80;  // Desplazamiento mayor en móvil


        // Crear el scroll horizontal para el contenedor
        gsap.to(imgContainerElem, {
            xPercent: xMove,
            scrollTrigger: {
                trigger: imgContainerElem,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.9,
            },
        });
    }, []);

    return (
        <div className='container horizontal' ref={horizontalRef}>
            <section className="sticky">
                <div className="sticky-header">
                    <h5>registrate</h5>
                </div>
                <div className="moving-img-container" ref={imgContainerRef}>
                    <img src={Skate} alt="Skate Image" className="moving-img" />
                    <img src={Caminante} alt="Walking Image" className="moving-img" />
                </div>
            </section>
        </div>
    );
};

export default Horizontal;
