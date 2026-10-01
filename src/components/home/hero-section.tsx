"use client";

import * as React from "react";
import Image from "next/image";
import { MessageCircle, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onContactClick: () => void;
}

/**
 * HeroSection (Clean, Sophisticated & De-cluttered)
 * - Fundo sereno em #333333 com imagem arquitetônica em baixa opacidade e fusão limpa
 * - Sem poluição visual, sem manchas amarelas de blur artificial ou sombras pesadas
 * - Métricas autênticas dos estudos realizados (R$ 13,1M em obras, 21,6% comercial, 1 quadra da praia, 5 imóveis)
 * - Botão em Dourado Pinciara oficial (#FFBB00) com alta conversão
 */
export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-[#333333]">
      {/* Background Architectural Image - Clean, subtle and elegant */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-coastal-avenue.jpg"
          alt="Avenida Presidente Roosevelt, São Francisco, Niterói"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/90 to-[#333333]/60" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Label - Clean & Crisp */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#d8d4ca]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
            Av. Presidente Roosevelt • São Francisco, Niterói
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#faf9f6] leading-[1.12] font-heading"
          >
            Pontos Comerciais Nobres na Principal Avenida de São Francisco
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#ccc8bf] leading-relaxed max-w-2xl mx-auto font-sans"
          >
            Visibilidade contínua, infraestrutura viária renovada e 5 imóveis exclusivos de 225 m² a 500 m² prontos para receber sua operação comercial.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Button
              variant="whatsapp"
              size="lg"
              onClick={onContactClick}
              className="w-full sm:w-auto text-sm sm:text-base font-bold shadow-[0_4px_20px_rgba(255,187,0,0.3)]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Luiz Pinciara no WhatsApp
            </Button>

            <a href="#imoveis" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base border-white/20 text-[#faf9f6] hover:bg-white/5 hover:border-white/40"
              >
                <ArrowDown className="h-4 w-4" />
                Explorar os 5 Imóveis
              </Button>
            </a>
          </motion.div>

          {/* Clean Horizontal Metrics Strip - Grounded in Real Research */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold text-[#faf9f6] font-heading tracking-tight">
                R$ 13,1M
              </p>
              <p className="text-xs text-[#a8a396] font-medium leading-snug">
                Obras de mobilidade no Túnel Roberto Silveira (4 faixas)
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold text-[#faf9f6] font-heading tracking-tight">
                21,6%
              </p>
              <p className="text-xs text-[#a8a396] font-medium leading-snug">
                Dos imóveis da avenida são comerciais ativos
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold text-[#faf9f6] font-heading tracking-tight">
                1 Quadra
              </p>
              <p className="text-xs text-[#a8a396] font-medium leading-snug">
                Da orla e do maior polo gastronômico de Niterói
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-bold text-[#FFBB00] font-heading tracking-tight">
                5 Imóveis
              </p>
              <p className="text-xs text-[#a8a396] font-medium leading-snug">
                Exclusivos com metragens de 225 m² a 500 m²
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
