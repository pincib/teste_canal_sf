'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const hero = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: 'power3.out',
      });
      gsap.to('.hero-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: hero.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <section id="inicio" ref={hero} className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="quiet">São Francisco · Niterói, RJ</p>
        <h1>
          O endereço definitivo para sua <em>flagship store.</em>
        </h1>
        <p className="intro">
          Uma esquina que transforma presença em experiência — feita para marcas que projetam o extraordinário.
        </p>
        <a href="#contato" className="button">
          Agendar uma conversa <span>↗</span>
        </a>
      </div>
      <a href="#conceito" className="scroll-cue">
        Explore o projeto <b />
      </a>
    </section>
  );
}
