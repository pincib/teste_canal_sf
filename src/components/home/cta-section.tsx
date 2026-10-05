"use client";

import * as React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface CTASectionProps {
  onContactClick: () => void;
}

export function CTASection({ onContactClick }: CTASectionProps) {
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-[#101010] text-[#FAF9F6] border-t border-white/10 relative overflow-hidden">
      {/* Subtle architectural background line */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full border-x border-white/20 max-w-7xl mx-auto" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Micro category */}
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#88857E]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
            <span>Consultoria Direta · São Francisco</span>
          </div>

          {/* Main Huge Editorial Headline (Item 41) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.04em] leading-[1.08] text-[#FAF9F6]">
              Procurando um imóvel nesta região?
            </h2>
            <p className="font-heading text-lg sm:text-2xl md:text-3xl font-light text-[#C7C4BC] tracking-tight">
              Fale com quem conhece o mercado local e o histórico de cada ponto.
            </p>
          </motion.div>

          <p className="text-xs sm:text-sm text-[#88857E] max-w-xl font-light leading-relaxed">
            Seja para agendar visita aos imóveis do corredor ou consultar oportunidades antes que entrem na vitrine pública.
          </p>

          {/* CTA Actions — Clean Solid Architectural Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onContactClick}
              className="text-xs sm:text-sm font-mono tracking-widest font-bold"
            >
              <MessageCircle className="h-4 w-4 mr-2 text-[#121212]" />
              <span>Falar com Luiz Pinciara</span>
              <ArrowUpRight className="h-4 w-4 ml-2 text-black/80" />
            </Button>

            <motion.a
              href={siteConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: "spring", stiffness: 450, damping: 24 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-[#FFBB00]/80 bg-[#FFBB00]/10 hover:bg-[#FFBB00] text-[#FFBB00] hover:text-[#121212] text-xs sm:text-sm font-mono uppercase tracking-widest transition-all duration-200 font-bold rounded-[2px]"
            >
              <span>Ver Site Institucional</span>
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  );
}
