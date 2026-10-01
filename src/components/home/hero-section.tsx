"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, ExternalLink, ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { commercialProperties } from "@/data/properties";

interface HeroSectionProps {
  onContactClick: () => void;
}

interface PropertyPoint {
  id: string;
  number: number;
  label: string;
  addressShort: string;
  fullAddress: string;
  mapQuery: string;
  zoom: number;
}

const PROPERTY_POINTS: PropertyPoint[] = [
  {
    id: "CA0339-PINC",
    number: 1,
    label: "Nº 102",
    addressShort: "Av. Pres. Roosevelt, 102",
    fullAddress: "Av. Presidente Roosevelt, 102 — São Francisco, Niterói/RJ",
    mapQuery: "Av. Presidente Roosevelt, 102, São Francisco, Niterói - RJ",
    zoom: 17,
  },
  {
    id: "CA0176-PINC",
    number: 2,
    label: "Nº 132",
    addressShort: "Av. Pres. Roosevelt, 132",
    fullAddress: "Av. Presidente Roosevelt, 132 — São Francisco, Niterói/RJ",
    mapQuery: "Av. Presidente Roosevelt, 132, São Francisco, Niterói - RJ",
    zoom: 17,
  },
  {
    id: "CA0324-PINC",
    number: 3,
    label: "Nº 133",
    addressShort: "Av. Pres. Roosevelt, 133",
    fullAddress: "Av. Presidente Roosevelt, 133 — São Francisco, Niterói/RJ",
    mapQuery: "Av. Presidente Roosevelt, 133, São Francisco, Niterói - RJ",
    zoom: 17,
  },
  {
    id: "LO0222-PINC",
    number: 4,
    label: "Guaianazes, 46",
    addressShort: "R. Guaianazes, 46 (Esq. Roosevelt)",
    fullAddress: "Rua Guaianazes, 46 (Esquina com Av. Pres. Roosevelt) — São Francisco, Niterói/RJ",
    mapQuery: "Rua Guaianazes, 46, São Francisco, Niterói - RJ",
    zoom: 17,
  },
  {
    id: "CA0318-PINC",
    number: 5,
    label: "Nº 1027",
    addressShort: "Av. Pres. Roosevelt, 1027",
    fullAddress: "Av. Presidente Roosevelt, 1027 — São Francisco, Niterói/RJ",
    mapQuery: "Av. Presidente Roosevelt, 1027, São Francisco, Niterói - RJ",
    zoom: 17,
  },
];

const CORRIDOR_QUERY = "Av. Presidente Roosevelt, São Francisco, Niterói - RJ";
const CORRIDOR_ZOOM = 15;

/**
 * HeroSection (Clean, Direct & Map-Centric)
 * - Textos desnecessários eliminados: foco direto na oportunidade comercial e localização
 * - Google Maps interativo exibindo a posição dos 5 imóveis ao longo da Av. Presidente Roosevelt
 * - Alternância harmoniosa de fundo #333333 e acentos Dourado Pinciara (#FFBB00)
 */
export function HeroSection({ onContactClick }: HeroSectionProps) {
  const [selectedPointId, setSelectedPointId] = React.useState<string | "all">("all");

  const selectedPoint = React.useMemo(() => {
    if (selectedPointId === "all") return null;
    return PROPERTY_POINTS.find((p) => p.id === selectedPointId) || null;
  }, [selectedPointId]);

  const selectedProperty = React.useMemo(() => {
    if (!selectedPoint) return null;
    return commercialProperties.find((p) => p.id === selectedPoint.id) || null;
  }, [selectedPoint]);

  const activeMapQuery = selectedPoint ? selectedPoint.mapQuery : CORRIDOR_QUERY;
  const activeMapZoom = selectedPoint ? selectedPoint.zoom : CORRIDOR_ZOOM;
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&t=&z=${activeMapZoom}&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapQuery)}`;

  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-[#333333]">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-coastal-avenue.jpg"
          alt="Avenida Presidente Roosevelt, São Francisco, Niterói"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/90 via-[#333333] to-[#333333]" />
      </div>

      <Container className="relative z-10">
        {/* Concise Header - Zero Text Pollution */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#d8d4ca]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
            São Francisco • Niterói/RJ
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#faf9f6] leading-[1.15] font-heading"
          >
            5 Imóveis Comerciais na Av. Presidente Roosevelt
          </motion.h1>

          {/* Direct Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-[#ccc8bf] max-w-xl mx-auto font-sans"
          >
            Pontos nobres de 225 m² a 500 m² no principal corredor comercial e gastronômico de São Francisco.
          </motion.p>

          {/* Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              variant="whatsapp"
              size="md"
              onClick={onContactClick}
              className="text-sm font-bold shadow-[0_4px_16px_rgba(255,187,0,0.25)]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </Button>

            <a href="#imoveis">
              <Button
                variant="outline"
                size="md"
                className="text-sm border-white/20 text-[#faf9f6] hover:bg-white/5 hover:border-white/40"
              >
                <ArrowDown className="h-4 w-4" />
                Explorar os 5 Imóveis
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Google Maps Interactive Showcase in Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#262626]/90 backdrop-blur-sm overflow-hidden shadow-2xl"
        >
          {/* Map Header Bar & Filter Tabs */}
          <div className="border-b border-white/10 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#2b2b2b]/60">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFBB00]/15 text-[#FFBB00] border border-[#FFBB00]/30">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[#faf9f6] font-heading">
                  Mapa do Corredor Presidente Roosevelt
                </h2>
                <p className="text-xs text-[#a8a396]">
                  {selectedPoint
                    ? `Foco: ${selectedPoint.addressShort}`
                    : "Visão dos 5 imóveis ao longo da avenida"}
                </p>
              </div>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedPointId("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedPointId === "all"
                    ? "bg-[#FFBB00] text-[#1f1f1f] shadow-md font-bold"
                    : "bg-white/5 text-[#d8d4ca] hover:bg-white/10 border border-white/10"
                }`}
              >
                Todos no Corredor
              </button>

              {PROPERTY_POINTS.map((pt) => {
                const isSelected = selectedPointId === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedPointId(pt.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-[#FFBB00] text-[#1f1f1f] shadow-md font-bold"
                        : "bg-white/5 text-[#d8d4ca] hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${
                        isSelected
                          ? "bg-[#1f1f1f] text-[#FFBB00]"
                          : "bg-white/10 text-[#d8d4ca]"
                      }`}
                    >
                      {pt.number}
                    </span>
                    <span>{pt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map & Property Preview Grid */}
          <div className="grid lg:grid-cols-12 min-h-[460px] lg:min-h-[520px]">
            {/* Google Maps Embed Frame */}
            <div className="lg:col-span-8 relative h-[340px] sm:h-[400px] lg:h-full w-full bg-[#1e1e1e]">
              <iframe
                title="Google Maps - Imóveis Comerciais na Av. Presidente Roosevelt"
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.1] contrast-[1.05]"
              />

              {/* Floating Map Action Badge */}
              <div className="absolute bottom-3 left-3 z-10">
                <a
                  href={externalMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-black/20 bg-[#1f1f1f]/90 px-3 py-1.5 text-xs font-semibold text-[#faf9f6] backdrop-blur-md shadow-lg hover:bg-black transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-[#FFBB00]" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            {/* Sidebar: Property Focus or Overview List */}
            <div className="lg:col-span-4 p-4 sm:p-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#242424]">
              {selectedProperty && selectedPoint ? (
                /* Focused Property Card */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFBB00]/15 px-2 py-0.5 text-xs font-bold text-[#FFBB00] border border-[#FFBB00]/30">
                      Ponto {selectedPoint.number} de 5
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedPointId("all")}
                      className="text-xs text-[#a8a396] hover:text-[#faf9f6] transition-colors"
                    >
                      Ver todos
                    </button>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative h-36 w-full rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={selectedProperty.images[0].src}
                      alt={selectedProperty.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {selectedProperty.specs.totalArea} m²
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-base font-bold text-[#faf9f6] font-heading leading-snug">
                      {selectedProperty.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#a8a396] flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#FFBB00] shrink-0" />
                      {selectedProperty.address}
                    </p>
                  </div>

                  {/* Pricing & Key Spec */}
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#a8a396] block uppercase tracking-wide">
                        Locação
                      </span>
                      <span className="text-sm font-bold text-[#FFBB00]">
                        {selectedProperty.pricing.rent}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-[#a8a396] block uppercase tracking-wide">
                        Vagas
                      </span>
                      <span className="text-sm font-bold text-[#faf9f6]">
                        {selectedProperty.specs.parkingSpaces} vagas
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 space-y-2">
                    <Link
                      href={`/imoveis/${selectedProperty.slug}`}
                      className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-[#FFBB00] px-4 py-2.5 text-xs font-bold text-[#1f1f1f] hover:bg-[#e5a800] transition-colors shadow-sm"
                    >
                      Ver Ficha Completa deste Imóvel
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onContactClick}
                      className="w-full text-xs border-white/15 text-[#faf9f6] hover:bg-white/5"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-[#FFBB00]" />
                      Consultar Luiz Pinciara
                    </Button>
                  </div>
                </div>
              ) : (
                /* Overview List of 5 Properties along the Avenue */
                <div className="flex flex-col h-full justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#a8a396]">
                        5 Imóveis no Eixo
                      </span>
                      <span className="text-[11px] text-[#FFBB00] font-semibold">
                        Clique para focar no mapa
                      </span>
                    </div>

                    <div className="space-y-2">
                      {PROPERTY_POINTS.map((pt) => {
                        const prop = commercialProperties.find((p) => p.id === pt.id);
                        if (!prop) return null;

                        return (
                          <button
                            key={pt.id}
                            type="button"
                            onClick={() => setSelectedPointId(pt.id)}
                            className="w-full text-left p-2.5 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#FFBB00]/40 transition-all flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFBB00]/20 text-[#FFBB00] font-bold text-xs group-hover:bg-[#FFBB00] group-hover:text-[#1f1f1f] transition-colors">
                                {pt.number}
                              </span>
                              <div className="truncate">
                                <p className="text-xs font-bold text-[#faf9f6] truncate group-hover:text-[#FFBB00] transition-colors">
                                  {pt.addressShort}
                                </p>
                                <p className="text-[11px] text-[#a8a396] truncate">
                                  {prop.specs.totalArea} m² • {prop.pricing.rent}
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-[#a8a396] group-hover:text-[#faf9f6] shrink-0 transition-colors" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      onClick={onContactClick}
                      className="w-full text-xs font-bold"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Agendar Visita no Corredor
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
