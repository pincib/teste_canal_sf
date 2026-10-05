"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

export function DifferentialsSection() {
  const pillars = [
    {
      num: "01",
      tag: "Curadoria Territorial",
      headline: "Filtro Rigoroso & Vocação Comercial",
      thesis:
        "Não operamos catálogo genérico de classificados. Nossa atuação no Canal de São Francisco é restrita a ativos comerciais selecionados com testada nobre, visibilidade de esquina ou recuo frontal para clientes, adequados para clínicas, gastronomia e operações de alto valor.",
      indicator: "EXCLUSIVIDADE TERRITORIAL",
    },
    {
      num: "02",
      tag: "Rigor Técnico & Jurídico",
      headline: "Contratos Blindados de 36 a 60 Meses",
      thesis:
        "Diagnóstico documental prévio, viabilidade de fachada e conformidade estrutural. Contratos comerciais estruturados sob a Lei do Inquilinato, garantindo a amortização dos investimentos de reforma e a perenidade do ponto comercial para a sua empresa.",
      indicator: "SEGURANÇA JURÍDICA BILATERAL",
    },
    {
      num: "03",
      tag: "Interlocução Direta",
      headline: "Carência de Obras & Condução Executiva",
      thesis:
        `Negociações conduzidas diretamente com ${siteConfig.broker.name}. Agilidade decisória na formalização de prazos de carência proporcionais ao cronograma de obras e flexibilidade na composição de garantias locatícias corporativas.`,
      indicator: "VELOCIDADE DECISÓRIA",
    },
  ];

  return (
    <section id="diferenciais" className="py-14 sm:py-18 lg:py-22 bg-[#FAF9F6] text-[#141414] border-b border-black/10">
      <Container size="wide">
        {/* Editorial Section Header */}
        <SectionHeader
          theme="light"
          sectionNumber="03"
          category="Processo Consultivo"
          title="Intermediação Comercial Estruturada"
          description="Atuação consultiva de alto padrão no mercado de São Francisco, conectando franquias e empresas aos proprietários com agilidade decisória e segurança contratual."
        />

        {/* 3 Pillars in Commanding Institutional Rows (Item 4) */}
        <div className="space-y-0 border-t border-black/15">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 sm:py-10 border-b border-black/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline"
            >
              {/* Massive Institutional Number & Tag (3 Cols) */}
              <div className="lg:col-span-3 space-y-1">
                <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extralight text-[#141414] tracking-[-0.04em] leading-none block">
                  {pillar.num}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#88857E] block pt-0.5">
                  {pillar.tag}
                </span>
              </div>

              {/* Institutional Headline & Thesis (6 Cols) */}
              <div className="lg:col-span-6 space-y-3.5">
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#141414] tracking-tight leading-snug">
                  {pillar.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#55524A] leading-relaxed font-light">
                  {pillar.thesis}
                </p>
              </div>

              {/* Indicator Stamp (3 Cols) */}
              <div className="lg:col-span-3 lg:text-right pt-2 lg:pt-0">
                <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-[#141414] border-l-2 lg:border-l-0 lg:border-r-2 border-[#141414] pl-3 lg:pl-0 lg:pr-3 py-1 font-semibold">
                  {pillar.indicator}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
