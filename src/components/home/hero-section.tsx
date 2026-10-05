"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDownRight, ExternalLink, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { commercialProperties } from "@/data/properties";

interface HeroSectionProps {
  onContactClick: () => void;
}

interface PropertyPoint {
  id: string;
  number: number;
  numStr: string;
  label: string;
  addressShort: string;
  fullAddress: string;
  mapQuery: string;
  zoom: number;
  specs: string;
  rent: string;
  image: string;
}

// Dynamically generated from commercialProperties so future properties added automatically appear
const PROPERTY_POINTS: PropertyPoint[] = commercialProperties.map((prop, idx) => {
  const number = idx + 1;
  const numStr = String(number).padStart(2, "0");

  let label = `Nº ${number}`;
  let addressShort = prop.address.split("—")[0].trim();

  if (prop.address.includes("Guaianazes")) {
    label = "Guaianazes, 46";
    addressShort = "R. Guaianazes, 46";
  } else {
    const match = prop.address.match(/(\d+)/);
    if (match) {
      label = `Nº ${match[1]}`;
    }
  }

  const mapQuery = prop.address.includes("Niterói")
    ? prop.address.split("—")[0].trim() + ", São Francisco, Niterói - RJ"
    : `${prop.address}, Niterói - RJ`;

  const specs = `${prop.specs.totalArea} m² · ${prop.specs.parkingSpaces} ${prop.specs.parkingSpaces === 1 ? "vaga" : "vagas"}`;

  return {
    id: prop.id,
    number,
    numStr,
    label,
    addressShort,
    fullAddress: prop.address,
    mapQuery,
    zoom: 17,
    specs,
    rent: prop.pricing.rent,
    image: prop.images[0]?.src || "/images/properties/ca0339/01-fachada.jpg",
  };
});

const CORRIDOR_QUERY = "-22.9143407, -43.0887021";
const CORRIDOR_MAP_URL =
  "https://www.google.com.br/maps/place/Av.+Pres.+Roosevelt,+Niter%C3%B3i+-+RJ,+24360-066/@-22.9143357,-43.0912824,1166m/data=!3m2!1e3!4b1!4m6!3m5!1s0x99840302f46225:0xae2b7f82fe938598!8m2!3d-22.9143407!4d-43.0887021!16s%2Fg%2F1ptw3768_?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";
const CORRIDOR_ZOOM = 16;

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
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&t=m&z=${activeMapZoom}&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = selectedPoint
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapQuery)}`
    : CORRIDOR_MAP_URL;

  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#121212] text-[#FAF9F6] overflow-hidden border-b border-white/10">
      {/* Background Architectural Grid Accent */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FAF9F6 1px, transparent 1px), linear-gradient(to bottom, #FAF9F6 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <Container size="wide" className="relative z-10">
        {/* Top Territorial Micro-header — Thirdway Style (Clean Without Coordinates) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10 font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#88857E]">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#FFBB00]" />
            <span className="text-[#FAF9F6] font-semibold">SÃO FRANCISCO · NITERÓI/RJ</span>
            <span className="text-white/20">/</span>
            <span>EIXO COMERCIAL AV. PRES. ROOSEVELT</span>
          </div>
          <div className="flex items-center gap-3 text-[#88857E]">
            <span className="text-[#FFBB00] font-semibold">CANAL DE SÃO FRANCISCO</span>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="text-[#FAF9F6] font-semibold">{commercialProperties.length} ATIVOS DISPONÍVEIS</span>
          </div>
        </div>

        {/* Horizontal Split Layout on Desktop: Left Narrative (5 cols) + Right Map System (7 cols) */}
        <div className="pt-8 sm:pt-10 lg:pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column (5 Cols): Editorial Title, Narrative, Value Drivers & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              {/* Region Pre-title */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFBB00]/15 border border-[#FFBB00]/40 font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFBB00] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
                <span>São Francisco · Corredor Nobre</span>
              </div>

              {/* Giant Title */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px] font-normal tracking-[-0.04em] leading-[0.96] text-[#FAF9F6]">
                Canal de São Francisco
              </h1>

              {/* Positioning Narrative */}
              <p className="font-heading text-lg sm:text-xl lg:text-2xl font-light tracking-[-0.02em] text-[#C7C4BC] leading-snug pt-2">
                Imóveis comerciais de testada ampla e recuo frontal na principal artéria de fluxo e valorização da Zona Sul.
              </p>

              <p className="text-xs sm:text-sm text-[#88857E] font-light leading-relaxed">
                Curadoria restrita de {commercialProperties.length} casas e lojas comerciais de 225 m² a 500 m² para clínicas, sedes corporativas, gastronomia e redes de varejo.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block">
                  Trecho
                </span>
                <p className="font-heading text-xl sm:text-2xl font-normal text-[#FAF9F6] mt-0.5">
                  1,4 km
                </p>
                <span className="text-[10px] font-mono text-[#88857E]">Av. Roosevelt</span>
              </div>
              <div className="border-x border-white/10 px-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block">
                  Obras
                </span>
                <p className="font-heading text-xl sm:text-2xl font-normal text-[#FFBB00] mt-0.5">
                  R$ 13,1M
                </p>
                <span className="text-[10px] font-mono text-[#88857E]">Revitalização</span>
              </div>
              <div className="pl-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block">
                  Perfil
                </span>
                <p className="font-heading text-xl sm:text-2xl font-normal text-[#FAF9F6] mt-0.5">
                  A / B
                </p>
                <span className="text-[10px] font-mono text-[#88857E]">Poder Aquisitivo</span>
              </div>
            </div>

            {/* CTA Buttons — Prominent, High-Contrast & Colored with Principal Brand Color (Clean Architectural Matte) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <motion.a
                href="#imoveis"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 22 }}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#FFBB00] hover:bg-[#FFC82C] active:bg-[#E6A800] text-[#121212] text-xs sm:text-sm font-mono uppercase tracking-widest font-bold border border-[#FFBB00] transition-colors cursor-pointer rounded-[2px]"
              >
                <span>Ver os {commercialProperties.length} Imóveis</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-[#121212]" />
              </motion.a>
              <motion.button
                type="button"
                onClick={onContactClick}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,187,0,0.18)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 450, damping: 22 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FFBB00]/10 text-[#FAF9F6] hover:text-[#FAF9F6] border-2 border-[#FFBB00] text-xs sm:text-sm font-mono uppercase tracking-widest font-semibold transition-all cursor-pointer rounded-[2px]"
              >
                <MessageCircle className="h-4 w-4 text-[#FFBB00]" />
                <span>Consultar</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Architectural Interactive Map & Property Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 border border-white/10 bg-[#161616] overflow-hidden"
          >
            {/* Architectural Index Header: Corridor Identity & Dynamic Active Count */}
            <div className="p-3.5 sm:px-4 sm:py-3 border-b border-white/10 flex items-center justify-between gap-3 bg-[#191919]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#FAF9F6] min-w-0">
                <span className="text-[#FFBB00] font-bold shrink-0">MAPA TERRITORIAL</span>
                <span className="text-white/20">/</span>
                <span className="text-[#FAF9F6] uppercase tracking-wider text-[11px] font-medium truncate">
                  {selectedPoint ? selectedPoint.addressShort : "Av. Pres. Roosevelt · São Francisco"}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] text-[#FFBB00] bg-[#FFBB00]/10 px-2.5 py-1 border border-[#FFBB00]/30 rounded-[2px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
                <span className="font-semibold">{PROPERTY_POINTS.length} ATIVOS DISPONÍVEIS</span>
              </div>
            </div>

            {/* Dedicated Full-Width Property Selector Toolbar — Flex-Wrap ensures 100% of properties (5, 6, 8, etc.) are always visible & clickable */}
            <div className="p-3 sm:p-3.5 bg-[#141414] border-b border-white/10">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] mb-2 flex items-center justify-between">
                <span>Navegar pelos imóveis no mapa:</span>
                <span className="text-[#FFBB00]">
                  {selectedPoint ? `Ativo ${selectedPoint.numStr} selecionado` : "Visão geral do corredor"}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <motion.button
                  type="button"
                  onClick={() => setSelectedPointId("all")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className={`px-3 py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer rounded-[2px] flex items-center gap-1.5 ${
                    selectedPointId === "all"
                      ? "bg-[#FFBB00] text-[#121212] font-bold border border-[#FFBB00]"
                      : "bg-[#1f1f1f] text-[#88857E] hover:text-[#FAF9F6] hover:border-[#FFBB00]/50 border border-white/10"
                  }`}
                >
                  <span className={selectedPointId === "all" ? "h-1.5 w-1.5 rounded-full bg-[#121212]" : "h-1.5 w-1.5 rounded-full bg-[#88857E]"} />
                  <span>Visão do Corredor</span>
                </motion.button>

                {PROPERTY_POINTS.map((pt) => {
                  const isSelected = selectedPointId === pt.id;
                  return (
                    <motion.button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedPointId(pt.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all cursor-pointer rounded-[2px] ${
                        isSelected
                          ? "bg-[#FFBB00] text-[#121212] font-bold border border-[#FFBB00]"
                          : "bg-[#1f1f1f] text-[#FAF9F6] hover:text-[#FFBB00] hover:border-[#FFBB00]/50 border border-white/10"
                      }`}
                    >
                      <span className={isSelected ? "text-[#121212] font-black" : "text-[#FFBB00] font-bold"}>
                        {pt.numStr}
                      </span>
                      <span className={isSelected ? "text-[#121212]/40" : "text-white/20"}>·</span>
                      <span className={isSelected ? "text-[#121212] font-medium" : "text-[#C7C4BC]"}>
                        {pt.label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Stylized Google Maps Surface */}
            <div className="relative h-[300px] sm:h-[340px] lg:h-[360px] bg-[#0e0e0e] overflow-hidden">
              <iframe
                key={embedUrl}
                title="Google Maps do Corredor São Francisco"
                src={embedUrl}
                className="w-full h-full border-0 opacity-90 transition-opacity"
                style={{
                  filter: "grayscale(90%) invert(90%) hue-rotate(180deg) contrast(115%) brightness(90%)",
                }}
                loading="lazy"
                allowFullScreen
              />

              {/* Minimalist Map Indicator & Satellite Link */}
              <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-2 px-2.5 py-1 bg-[#121212]/95 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-[#FAF9F6] uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
                <span>Eixo Canal de São Francisco</span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 z-10">
                <a
                  href={externalMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#121212]/95 backdrop-blur-sm text-[#FFBB00] hover:text-[#121212] hover:bg-[#FFBB00] border border-[#FFBB00]/50 text-[10px] font-mono uppercase tracking-wider transition-all rounded-[2px]"
                >
                  <span className="font-semibold">Abrir no Google Maps</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>

            {/* Active Property Ledger / Inspector Bar Beneath Map */}
            <div className="p-4 sm:p-5 bg-[#171717] border-t border-white/10">
              {selectedPoint && selectedProperty ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPoint.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-14 w-20 shrink-0 overflow-hidden bg-[#101010] border border-white/10 hidden sm:block">
                        <Image
                          src={selectedPoint.image}
                          alt={selectedPoint.addressShort}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-[#FFBB00]">
                            {selectedPoint.numStr} · {selectedPoint.addressShort}
                          </span>
                          <span className="font-mono text-[10px] text-[#88857E] border border-white/10 px-1.5 py-0.2">
                            {selectedPoint.id}
                          </span>
                        </div>
                        <p className="font-heading text-sm text-[#FAF9F6] font-medium truncate max-w-xs">
                          {selectedProperty.title}
                        </p>
                        <p className="font-mono text-[11px] text-[#88857E]">
                          {selectedPoint.specs} · <span className="text-[#FAF9F6] font-semibold">{selectedPoint.rent}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <motion.a
                        href={`#imovel-${selectedPoint.id.toLowerCase()}`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 450, damping: 22 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFBB00] hover:bg-[#FFC82C] text-[#121212] text-xs font-mono uppercase tracking-wider font-bold transition-colors rounded-[2px]"
                      >
                        <span>Ver Ficha</span>
                        <ArrowDownRight className="h-3.5 w-3.5 text-[#121212]" />
                      </motion.a>
                      <motion.button
                        type="button"
                        onClick={onContactClick}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 450, damping: 22 }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-transparent text-[#FFBB00] hover:bg-[#FFBB00] hover:text-[#121212] border-2 border-[#FFBB00] text-xs font-mono uppercase tracking-wider font-semibold transition-all cursor-pointer rounded-[2px]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : (
                /* Corridor Overview Bar */
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <p className="font-mono text-[11px] text-[#FAF9F6] font-semibold flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
                      {PROPERTY_POINTS.length} Ativos Disponíveis para Locação no Canal
                    </p>
                    <p className="text-[11px] text-[#88857E] font-light">
                      Selecione um dos botões numerados acima para visualizar o ponto exato no mapa e a ficha do imóvel.
                    </p>
                  </div>
                  <motion.a
                    href="#imoveis"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FFBB00] hover:bg-[#FFC82C] text-[#121212] text-xs font-mono uppercase tracking-wider font-bold transition-colors shrink-0 rounded-[2px]"
                  >
                    <span>Ver no Portfólio</span>
                    <ArrowDownRight className="h-3.5 w-3.5 text-[#121212]" />
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
