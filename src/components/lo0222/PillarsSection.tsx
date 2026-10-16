'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const data = [
  [
    'Originalidade',
    'Uma arquitetura de esquina com identidade própria, desenhada para ser reconhecida antes mesmo de ser acessada.',
  ],
  [
    'Funcionalidade',
    'Dois níveis integrados que permitem construir jornadas, ambientes e vitrines em escala generosa.',
  ],
  [
    'Modernidade',
    'Vidro, estrutura escura, brises e paisagismo estabelecem uma presença contemporânea e durável.',
  ],
];

export default function PillarsSection() {
  useEffect(() => {
    const ctx = gsap.context(() =>
      gsap.from('.pillar', {
        opacity: 0,
        y: 45,
        stagger: 0.15,
        scrollTrigger: { trigger: '#conceito', start: 'top 72%' },
      })
    );
    return () => ctx.revert();
  }, []);

  return (
    <section id="conceito" className="pillars section">
      <div className="section-intro">
        <p className="label">Uma presença construída para durar</p>
        <h2>
          Mais que uma loja.
          <br />
          <em>Um ponto de referência.</em>
        </h2>
      </div>
      <div className="pillar-list">
        {data.map(([title, text], i) => (
          <article className="pillar" key={title}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
