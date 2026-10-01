"use client";

import * as React from "react";
import Link from "next/link";
import { MessageCircle, ExternalLink, ArrowRight, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { PropertyCarousel } from "@/components/property/property-carousel";
import { commercialProperties } from "@/data/properties";
import { LeadModalTarget } from "@/components/conversion/lead-modal";

interface PropertiesSectionProps {
  onPropertySelect: (target: LeadModalTarget) => void;
}

/**
 * PropertiesSection (Clean, De-cluttered & Editorial)
 * - Fundo: #333333 (Charcoal)
 * - 1 Imóvel em Destaque de Capa (layout horizontal amplo) + 4 em Grid Equilibrado 2x2
 * - Sem poluição visual: eliminadas caixas cinzas aninhadas dentro de caixas
 * - Tipografia limpa com Dourado Pinciara (#FFBB00) e ações objetivas
 */
export function PropertiesSection({ onPropertySelect }: PropertiesSectionProps) {
  const featuredProperty = commercialProperties[0]; // LO0222-PINC
  const gridProperties = commercialProperties.slice(1); // 4 imóveis para grid 2x2

  return (
    <Section id="imoveis" variant="charcoal">
      <SectionHeader
        theme="dark"
        badge="Portfólio de Locação Comercial"
        title="5 Imóveis Comerciais Disponíveis na Avenida"
        description="Casas e lojas comerciais exclusivas com testada ampla, recuo para clientes e metragens de 225 m² a 500 m² no trecho mais nobre de São Francisco."
      />

      <div className="space-y-10">
        {/* 1. FEATURED HERO PROPERTY (Horizontal Wide Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-[#262626] overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Carousel Column (7 Cols on desktop) */}
            <div className="lg:col-span-7 p-3 sm:p-4">
              <PropertyCarousel
                images={featuredProperty.images}
                propertyTitle={featuredProperty.title}
                variant="card"
                className="aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl"
                priorityFirst
              />
            </div>

            {/* Content Column (5 Cols on desktop) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFBB00] text-black">
                    <Star className="h-3.5 w-3.5 fill-black" />
                    Destaque da Avenida
                  </span>
                  <span className="text-xs font-mono text-[#888]">
                    {featuredProperty.id}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#faf9f6] font-heading leading-tight">
                  {featuredProperty.title}
                </h3>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-[#aaa]">
                  <MapPin className="h-3.5 w-3.5 text-[#FFBB00] shrink-0" />
                  <span>{featuredProperty.address}</span>
                </p>

                {/* Clean Price & Metric Row (No nested boxes) */}
                <div className="mt-6 flex items-baseline justify-between border-y border-white/10 py-4">
                  <div>
                    <span className="text-xs text-[#888] uppercase font-mono">Aluguel:</span>
                    <p className="text-2xl sm:text-3xl font-black text-[#FFBB00] font-heading">
                      {featuredProperty.pricing.rent}
                    </p>
                  </div>
                  <div className="text-right text-xs text-[#ccc] space-y-0.5">
                    <p className="font-semibold text-sm text-[#faf9f6]">{featuredProperty.specs.totalArea} m² área</p>
                    <p className="text-[#888]">{featuredProperty.specs.parkingSpaces} vagas frontais</p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#bbb] leading-relaxed line-clamp-2">
                  {featuredProperty.shortDescription}
                </p>
              </div>

              {/* Action Buttons: Clean & Direct */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    variant="whatsapp"
                    size="md"
                    onClick={() =>
                      onPropertySelect({
                        id: featuredProperty.id,
                        title: featuredProperty.title,
                        badge: featuredProperty.badge,
                      })
                    }
                    className="w-full text-xs font-bold"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar no WhatsApp
                  </Button>

                  <a
                    href={featuredProperty.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="md"
                      className="w-full text-xs border-white/20 text-[#faf9f6] hover:bg-white/5"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Ver Anúncio Oficial
                    </Button>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <Link
                    href={`/imoveis/${featuredProperty.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFBB00] hover:underline transition-colors"
                  >
                    Ver especificações técnicas completas
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. THE OTHER 4 PROPERTIES IN BALANCED 2x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProperties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
              className="rounded-3xl border border-white/10 bg-[#262626] overflow-hidden shadow-lg hover:border-[#FFBB00]/40 transition-colors flex flex-col justify-between"
            >
              {/* Carousel */}
              <div className="p-3 pb-0">
                <PropertyCarousel
                  images={property.images}
                  propertyTitle={property.title}
                  variant="card"
                  className="rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFBB00] font-semibold">
                      {property.badge || property.category}
                    </span>
                    <span className="text-xs font-mono text-[#888]">
                      {property.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#faf9f6] font-heading leading-snug line-clamp-1">
                    {property.title}
                  </h3>

                  <p className="mt-1 flex items-center gap-1 text-xs text-[#aaa] truncate">
                    <MapPin className="h-3.5 w-3.5 text-[#FFBB00] shrink-0" />
                    <span>{property.address}</span>
                  </p>

                  {/* Clean Price & Specs Row (No nested boxes) */}
                  <div className="mt-4 flex items-baseline justify-between border-y border-white/10 py-3">
                    <div>
                      <span className="text-[10px] text-[#888] uppercase font-mono">Aluguel:</span>
                      <p className="text-xl font-extrabold text-[#FFBB00] font-heading">
                        {property.pricing.rent}
                      </p>
                    </div>
                    <div className="text-right text-xs text-[#ccc]">
                      <span className="font-semibold text-[#faf9f6]">{property.specs.totalArea} m²</span>
                      <span className="text-[#888] ml-1.5">• {property.specs.parkingSpaces} vagas</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-[#bbb] leading-relaxed line-clamp-2">
                    {property.shortDescription}
                  </p>
                </div>

                {/* Duplo CTA Limpo e Direto */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      onClick={() =>
                        onPropertySelect({
                          id: property.id,
                          title: property.title,
                          badge: property.badge,
                        })
                      }
                      className="w-full text-xs font-bold"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Falar no WhatsApp
                    </Button>

                    <a
                      href={property.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs border-white/20 text-[#faf9f6] hover:bg-white/5"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Ver Anúncio
                      </Button>
                    </a>
                  </div>

                  <div className="text-center pt-1">
                    <Link
                      href={`/imoveis/${property.slug}`}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#888] hover:text-[#FFBB00] transition-colors"
                    >
                      Ver ficha técnica completa
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
