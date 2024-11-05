import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Marquee from '../components/Marquee/Marquee'
import About from '../components/About/About'
import Doble from '../components/Doble/Doble'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Horizontal from '../components/Horizontal/Horizontal'
import Registro from '../components/Registro/Registro'

const HomeScreen = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Sincronizar Lenis con ScrollTrigger de GSAP
    lenis.on('scroll', ScrollTrigger.update);

    // Agregar el raf de Lenis al ticker de GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Asegura que Lenis se ejecute con GSAP
    });

    gsap.ticker.lagSmoothing(0); // Desactivar la suavización del lag

    // Limpiar al desmontar el componente
    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy(); // Destruir la instancia de Lenis
    };
  }, []);
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Doble />
      <Horizontal />
      <Registro />
    </>
  )
}

export default HomeScreen