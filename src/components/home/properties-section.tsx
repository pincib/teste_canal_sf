"use client";

import * as React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PropertyCarousel } from "@/components/property/property-carousel";
import { commercialProperties } from "@/data/properties";
import { LeadModalTarget } from "@/components/conversion/lead-modal";

interface PropertiesSectionProps {
  onPropertySelect: (target: LeadModalTarget) => void;
}

export function PropertiesSection({ onPropertySelect }: PropertiesSectionProps) {
  return (
    <section id="imoveis" className="py-14 sm:py-18 lg:py-22 bg-[#FAF9F6] text-[#141414] border-b border-black/10">
      <Container size="wide">
        {/* Editorial Section Header */}
        <SectionHeader
          theme="light"
          sectionNumber="01"
          category="Portfólio de Ativos"
          title={`${commercialProperties.length} Imóveis Comerciais Disponíveis na Avenida`}
          description="Casas e lojas comerciais exclusivas com testada ampla, recuo para clientes e metragens de 225 m² a 500 m² no trecho mais nobre e consolidado de São Francisco."
        />

        {/* Linear Editorial Sequence with Compact Architectural Rhythm */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {commercialProperties.map((property, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");
            const anchorId = `imovel-${property.id.toLowerCase()}`;

            return (
              <motion.article
                key={property.id}
                id={anchorId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 sm:pt-10 border-t border-black/15 scroll-mt-24"
              >
                {/* 12-Column Balanced Architectural Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-stretch">
                  {/* Left Column (7 Cols): Dominant Photo Gallery Carousel */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="relative">
                      {/* Floating Micro Tag on Top Left of Carousel */}
                      <div className="absolute top-3 left-3 z-10 bg-[#141414]/90 backdrop-blur-sm px-3 py-1 text-[11px] font-mono text-[#FAF9F6] border border-white/10 uppercase tracking-widest">
                        {property.category}
                      </div>

                      <PropertyCarousel
                        images={property.images}
                        propertyTitle={property.title}
                        variant="expanded"
                        className="aspect-[16/10] w-full"
                        priorityFirst={idx === 0}
                      />
                    </div>
                  </div>

                  {/* Right Column (5 Cols): Anchored, High-Contrast Architectural Spec Ledger */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-1 space-y-5 sm:space-y-6 max-w-xl">
                    {/* Header: Number + Code + Title */}
                    <div className="space-y-3">
                      <div className="flex items-baseline justify-between border-b border-black/10 pb-2.5">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-3xl sm:text-4xl font-light text-[#FFBB00]">
                            {formattedIndex}
                          </span>
                          <span className="font-mono text-xs uppercase tracking-widest text-[#88857E]">
                            / {String(commercialProperties.length).padStart(2, "0")} ATIVOS
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[#88857E] border border-black/15 px-2 py-0.5">
                          CÓD. {property.id}
                        </span>
                      </div>

                      {/* Main Title & Address with High Contrast */}
                      <div className="space-y-1.5">
                        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-[#141414] tracking-tight leading-snug">
                          {property.title}
                        </h3>
                        <p className="font-mono text-xs uppercase tracking-widest text-[#66635D]">
                          {property.address}
                        </p>
                      </div>

                      {/* Technical Specs Metric Bar */}
                      <div className="grid grid-cols-3 gap-3 py-3 border-y border-black/10">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block mb-0.5">
                            Área Total
                          </span>
                          <p className="font-heading text-xl sm:text-2xl font-light text-[#141414]">
                            {property.specs.totalArea} <span className="text-xs font-mono">m²</span>
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block mb-0.5">
                            Vagas
                          </span>
                          <p className="font-heading text-xl sm:text-2xl font-light text-[#141414]">
                            {property.specs.parkingSpaces}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block mb-0.5">
                            {property.specs.frontage ? "Testada" : "Pavimentos"}
                          </span>
                          <p className="font-heading text-lg sm:text-xl font-light text-[#141414] truncate">
                            {property.specs.frontage || (property.specs.floors ? `${property.specs.floors} Pav.` : "Ponto Nobre")}
                          </p>
                        </div>
                      </div>

                      {/* Descriptive Summary (Width Controlled) */}
                      <p className="text-xs sm:text-sm text-[#55524A] leading-relaxed font-light max-w-md">
                        {property.shortDescription}
                      </p>

                      {/* Highlights Minimalist List */}
                      {property.highlights && property.highlights.length > 0 && (
                        <div className="space-y-1 pt-0.5">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#88857E]">
                            Diferenciais Operacionais
                          </p>
                          <ul className="text-xs text-[#33312B] space-y-0.5 font-sans">
                            {property.highlights.slice(0, 3).map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-center gap-2">
                                <span className="h-1 w-1 bg-[#141414] rounded-none shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Price with Maximum Presence & Dual CTAs */}
                    <div className="pt-4 border-t border-black/10 space-y-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#88857E] block mb-0.5">
                            Valor de Locação
                          </span>
                          <p className="font-heading text-2xl sm:text-3xl font-normal text-[#141414] tracking-tight">
                            {property.pricing.rent}
                          </p>
                        </div>
                        <div className="text-right text-[11px] font-mono text-[#88857E] space-y-0.5">
                          {property.pricing.condo && <p>Cond.: {property.pricing.condo}</p>}
                          {property.pricing.iptu && <p>IPTU: {property.pricing.iptu}</p>}
                        </div>
                      </div>

                      {/* Conversion CTAs — High Contrast, Prominent & Spring Animated */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() =>
                            onPropertySelect({
                              id: property.id,
                              title: property.title,
                              badge: property.badge,
                            })
                          }
                          className="w-full text-xs font-mono font-bold"
                        >
                          <MessageCircle className="h-4 w-4 mr-2 text-[#121212]" />
                          Falar no WhatsApp
                        </Button>

                        <motion.a
                          href={property.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.025 }}
                          whileTap={{ scale: 0.975 }}
                          transition={{ type: "spring", stiffness: 450, damping: 24 }}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-[#121212] bg-[#121212] text-[#FAF9F6] hover:bg-[#FFBB00] hover:text-[#121212] hover:border-[#FFBB00] text-xs font-mono uppercase tracking-wider transition-all duration-200 font-bold rounded-[2px]"
                        >
                          <span>Ver Anúncio</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
