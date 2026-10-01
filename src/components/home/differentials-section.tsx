"use client";

import * as React from "react";
import { ShieldCheck, Award, Handshake, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

/**
 * DifferentialsSection component communicating the authority and trust of Pinciara Imóveis Exclusivos
 * Styled with warm alabaster (#FAF9F6) background, motion scroll entry, and gold accents.
 */
export function DifferentialsSection() {
  const differentials = [
    {
      icon: Award,
      badge: "Curadoria",
      title: "Curadoria Exclusiva na Região",
      description:
        "Foco estrito em imóveis comerciais nobres na Avenida Presidente Roosevelt e orla de São Francisco, garantindo os melhores pontos para quem busca máxima visibilidade comercial.",
      highlight: "Foco 100% comercial em São Francisco",
    },
    {
      icon: ShieldCheck,
      badge: "Segurança",
      title: "Assessoria Jurídica Especializada",
      description:
        "Suporte completo na elaboração de contratos comerciais seguros, negociação de prazos de carência para reformas, licenças de fachada e adaptação de infraestrutura.",
      highlight: "Carência para obras e contratos blindados",
    },
    {
      icon: Handshake,
      badge: "Diretoria",
      title: "Condução Direta com a Diretoria",
      description:
        `Negociações conduzidas diretamente com ${siteConfig.broker.name}, proporcionando velocidade decisória, transparência e flexibilidade comercial para o seu negócio.`,
      highlight: "Agilidade sem intermediários burocráticos",
    },
  ];

  return (
    <Section id="diferenciais" variant="alabaster">
      <SectionHeader
        theme="light"
        badge="Credibilidade Institucional"
        title="Por que fechar sua locação comercial com a Pinciara?"
        description="Especialização de mercado, segurança contratual e condução direta com a diretoria para viabilizar a expansão da sua operação comercial."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {differentials.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
              className="rounded-3xl bg-white p-8 border border-[#e6e2d8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFBB00]/15 text-[#9e7400] mb-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold text-[#1a1a1a] font-heading mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a574f] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ede4] flex items-center gap-2 text-xs font-semibold text-[#8a6500]">
                <CheckCircle2 className="h-4 w-4 text-[#FFBB00] shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
