"use client";

import * as React from "react";
import { MessageCircle, ArrowDown, MapPin, Building, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onContactClick: () => void;
}

/**
 * HeroSection component strictly following the taste-skill Hero Discipline & Awwwards Promotional layout:
 * - Headline max 2 lines on desktop
 * - Subtext max 20 words
 * - Visible CTA without scroll
 * - Dark Luxury ambient edge-lighting with official gold tones
 */
export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background Ambient Radial Gold Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/20 to-primary-dark/10 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center gap-2">
            <Badge variant="gold" className="px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Locação Comercial Exclusiva em São Francisco, Niterói
            </Badge>
          </div>

          {/* H1 Headline (Desktop max 2 lines) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] font-heading">
            Pontos Comerciais Nobres para Franquias na Avenida de São Francisco
          </h1>

          {/* Subtext (Strictly under 20 words) */}
          <p className="mt-6 text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            Visibilidade máxima, alto poder aquisitivo e 5 imóveis exclusivos prontos para receber sua operação em Niterói.
          </p>

          {/* Primary Action Buttons (Above the fold) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={onContactClick}
              className="w-full sm:w-auto shadow-[0_6px_30px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com Luiz Pinciara no WhatsApp
            </Button>

            <a href="#imoveis" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <ArrowDown className="h-4 w-4" />
                Explorar os 5 Imóveis Disponíveis
              </Button>
            </a>
          </div>

          {/* Verified Regional Highlights Strip */}
          <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="rounded-xl border border-border-subtle bg-surface/50 p-4">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Building className="h-4 w-4" />
                <span className="text-xs uppercase font-mono tracking-wider font-semibold">Portfólio</span>
              </div>
              <p className="text-lg font-bold text-foreground font-heading">5 Imóveis</p>
              <p className="text-xs text-foreground-muted">225 m² a 500 m²</p>
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface/50 p-4">
              <div className="flex items-center gap-2 text-primary mb-1">
                <MapPin className="h-4 w-4" />
                <span className="text-xs uppercase font-mono tracking-wider font-semibold">Localização</span>
              </div>
              <p className="text-lg font-bold text-foreground font-heading">Av. Pres. Roosevelt</p>
              <p className="text-xs text-foreground-muted">Eixo central de São Francisco</p>
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface/50 p-4">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs uppercase font-mono tracking-wider font-semibold">Público</span>
              </div>
              <p className="text-lg font-bold text-foreground font-heading">Classe A / B</p>
              <p className="text-xs text-foreground-muted">Alto poder de consumo</p>
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface/50 p-4">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Building className="h-4 w-4" />
                <span className="text-xs uppercase font-mono tracking-wider font-semibold">Orla</span>
              </div>
              <p className="text-lg font-bold text-foreground font-heading">A 1 Quadra</p>
              <p className="text-xs text-foreground-muted">Maior polo gastronômico</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
