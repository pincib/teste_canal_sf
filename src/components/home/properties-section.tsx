"use client";

import * as React from "react";
import Link from "next/link";
import { MessageCircle, ExternalLink, Maximize2, Car, Zap, ArrowRight, MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PropertyCarousel } from "@/components/property/property-carousel";
import { commercialProperties } from "@/data/properties";
import { CommercialProperty } from "@/types/property";
import { LeadModalTarget } from "@/components/conversion/lead-modal";

interface PropertiesSectionProps {
  onPropertySelect: (target: LeadModalTarget) => void;
}

/**
 * PropertiesSection component showcasing the 5 commercial properties
 * Features:
 * - Embla PropertyCarousel with 5 official photos per property
 * - Two CTAs per card strictly following Section 10 & 11:
 *   1. "Falar no WhatsApp" (Primary Gold -> opens LeadModal)
 *   2. "Ver Anúncio Completo" (Secondary Outline -> external link to Pinciara)
 */
export function PropertiesSection({ onPropertySelect }: PropertiesSectionProps) {
  return (
    <Section id="imoveis" variant="default">
      <SectionHeader
        badge="Portfólio Disponível"
        title="5 Imóveis Comerciais na Av. Presidente Roosevelt"
        description="Casas e lojas comerciais exclusivas com recuo, testada ampla e metragens de 225 m² a 500 m² no trecho mais valorizado de São Francisco."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {commercialProperties.map((property, idx) => (
          <Card
            key={property.id}
            className="flex flex-col h-full overflow-hidden border-border/80 hover:border-primary/50 transition-all duration-300"
          >
            {/* 5-Image Carousel */}
            <div className="relative p-2 pb-0">
              <PropertyCarousel
                images={property.images}
                propertyTitle={property.title}
                variant="card"
                priorityFirst={idx === 0}
              />
            </div>

            {/* Property Content */}
            <CardContent className="flex-1 flex flex-col justify-between p-6">
              <div>
                {/* Badge and Code Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="gold" className="text-[11px] font-semibold">
                    {property.badge || property.category}
                  </Badge>
                  <span className="text-xs font-mono text-foreground-dim">
                    {property.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-foreground font-heading leading-snug line-clamp-2">
                  {property.title}
                </h3>

                {/* Address */}
                <p className="mt-2 flex items-center gap-1.5 text-xs text-foreground-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="truncate">{property.address}</span>
                </p>

                {/* Pricing Block */}
                <div className="mt-4 p-3 rounded-xl bg-surface-elevated/80 border border-border-subtle">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-foreground-muted uppercase font-mono">Aluguel:</span>
                    <span className="text-xl font-extrabold text-primary font-heading">
                      {property.pricing.rent}
                    </span>
                  </div>
                  {property.pricing.iptu && (
                    <div className="mt-1 flex items-baseline justify-between text-xs text-foreground-dim">
                      <span>IPTU:</span>
                      <span className="font-mono">{property.pricing.iptu}</span>
                    </div>
                  )}
                </div>

                {/* Specs Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2 py-3 border-y border-border-subtle text-center text-xs">
                  <div className="space-y-0.5">
                    <span className="flex items-center justify-center text-primary">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                    <p className="font-semibold text-foreground">{property.specs.totalArea} m²</p>
                    <p className="text-[10px] text-foreground-dim uppercase">Área Total</p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="flex items-center justify-center text-primary">
                      <Car className="h-3.5 w-3.5" />
                    </span>
                    <p className="font-semibold text-foreground">{property.specs.parkingSpaces} vagas</p>
                    <p className="text-[10px] text-foreground-dim uppercase">Estacionam.</p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="flex items-center justify-center text-primary">
                      <Zap className="h-3.5 w-3.5" />
                    </span>
                    <p className="font-semibold text-foreground">{property.specs.electrical ? "Trifásica" : "Padrão"}</p>
                    <p className="text-[10px] text-foreground-dim uppercase">Energia</p>
                  </div>
                </div>

                {/* Short Description */}
                <p className="mt-3 text-xs text-foreground-muted leading-relaxed line-clamp-3">
                  {property.shortDescription}
                </p>
              </div>

              {/* Action Buttons: Duplo CTA Obrigatório (Seção 10 & 11) */}
              <div className="mt-6 pt-4 border-t border-border-subtle space-y-2.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Primário: WhatsApp (abre LeadModal) */}
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
                    className="w-full text-xs font-semibold"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Falar no WhatsApp
                  </Button>

                  {/* Secundário: Ver Anúncio Completo (link externo oficial) */}
                  <a
                    href={property.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Ver Anúncio
                    </Button>
                  </a>
                </div>

                {/* Link Discreto para Detalhes do Imóvel */}
                <div className="text-center pt-1">
                  <Link
                    href={`/imoveis/${property.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-foreground-dim hover:text-primary transition-colors"
                  >
                    Ver ficha técnica completa
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
