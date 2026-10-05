"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Maximize2,
  Car,
  Zap,
  Building,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PropertyCarousel } from "@/components/property/property-carousel";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { LeadModal } from "@/components/conversion/lead-modal";
import { Footer } from "@/components/home/footer";
import { CommercialProperty } from "@/types/property";
import { siteConfig } from "@/config/site";

interface PropertyDetailViewProps {
  property: CommercialProperty;
}

/**
 * PropertyDetailView client component for individual property page
 * Renders expanded carousel, technical specs, description, ideal segments,
 * and dual CTA conversion flow with LeadModal.
 */
export function PropertyDetailView({ property }: PropertyDetailViewProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const modalTarget = {
    id: property.id,
    title: property.title,
    badge: property.badge,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/25 selection:text-primary">
      {/* Top Bar with Back Link */}
      <div className="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-30 py-3.5">
        <Container>
          <div className="flex items-center justify-between">
            <Link
              href="/#imoveis"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar aos Imóveis</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs font-mono text-foreground-dim">
                Cód: {property.id}
              </span>
              <Button
                variant="whatsapp"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="text-xs"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <main className="flex-1 py-8 sm:py-12">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-foreground-dim font-mono">
            <Link href="/" className="hover:text-foreground">
              Início
            </Link>
            <span>/</span>
            <Link href="/#imoveis" className="hover:text-foreground">
              Imóveis Comerciais
            </Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[200px] sm:max-w-md">
              {property.title}
            </span>
          </nav>

          {/* Title Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <Badge variant="gold" className="text-xs font-semibold">
                {property.badge || property.category}
              </Badge>
              <span className="text-xs font-mono text-foreground-dim bg-surface px-2.5 py-1 rounded-full border border-border">
                {property.id}
              </span>
              <span className="text-xs text-primary font-medium">
                • Disponível para Locação
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-heading leading-tight">
              {property.title}
            </h1>

            <p className="mt-3 flex items-center gap-2 text-sm text-foreground-muted">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{property.address}</span>
            </p>
          </div>

          {/* Main Grid: Left Column (Gallery & Specs) vs Right Column (Sticky Conversion) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Columns: Gallery & Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Expanded 5-Image Carousel */}
              <div className="rounded-2xl border border-border p-2 bg-surface/60 overflow-hidden shadow-2xl">
                <PropertyCarousel
                  images={property.images}
                  propertyTitle={property.title}
                  variant="expanded"
                  priorityFirst
                />
              </div>

              {/* Technical Specifications Grid */}
              <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground font-heading mb-6 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Especificações Técnicas do Imóvel
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Maximize2 className="h-4 w-4" />
                      <span className="text-xs uppercase font-mono text-foreground-dim">Área Total</span>
                    </div>
                    <p className="text-xl font-bold text-foreground font-heading">
                      {property.specs.totalArea} m²
                    </p>
                  </div>

                  {property.specs.builtArea && (
                    <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Building className="h-4 w-4" />
                        <span className="text-xs uppercase font-mono text-foreground-dim">Área Construída</span>
                      </div>
                      <p className="text-xl font-bold text-foreground font-heading">
                        {property.specs.builtArea} m²
                      </p>
                    </div>
                  )}

                  {property.specs.frontage && (
                    <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Maximize2 className="h-4 w-4" />
                        <span className="text-xs uppercase font-mono text-foreground-dim">Testada / Frente</span>
                      </div>
                      <p className="text-base sm:text-lg font-bold text-foreground font-heading truncate">
                        {property.specs.frontage}
                      </p>
                    </div>
                  )}

                  <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Car className="h-4 w-4" />
                      <span className="text-xs uppercase font-mono text-foreground-dim">Estacionamento</span>
                    </div>
                    <p className="text-xl font-bold text-foreground font-heading">
                      {property.specs.parkingSpaces} vagas
                    </p>
                  </div>

                  {property.specs.bathrooms && (
                    <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Building className="h-4 w-4" />
                        <span className="text-xs uppercase font-mono text-foreground-dim">Sanitários</span>
                      </div>
                      <p className="text-xl font-bold text-foreground font-heading">
                        {property.specs.bathrooms} banheiros
                      </p>
                    </div>
                  )}

                  {property.specs.electrical && (
                    <div className="p-4 rounded-xl bg-background/70 border border-border-subtle">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Zap className="h-4 w-4" />
                        <span className="text-xs uppercase font-mono text-foreground-dim">Rede Elétrica</span>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-foreground font-heading truncate">
                        {property.specs.electrical}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Full Description */}
              <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8 space-y-4">
                <h2 className="text-xl font-bold text-foreground font-heading mb-4">
                  Sobre o Ponto Comercial
                </h2>
                {property.fullDescription.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-foreground-muted leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights Checklist */}
              <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground font-heading mb-4">
                  Diferenciais deste Imóvel
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Business Segments */}
              <div className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground font-heading mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Segmentos com Alta Sinergia
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.idealFor.map((seg, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-surface border border-border text-xs font-medium text-foreground hover:border-primary/40 transition-colors"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Conversion Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <Card className="p-6 sm:p-7 border-primary/40 shadow-2xl bg-surface-elevated/95 backdrop-blur-md">
                  {/* Pricing Overview */}
                  <div className="pb-6 border-b border-border">
                    <span className="text-xs uppercase font-mono text-foreground-muted tracking-wider">
                      Valor de Locação:
                    </span>
                    <p className="text-3xl font-extrabold text-primary font-heading mt-1">
                      {property.pricing.rent}
                    </p>
                    {property.pricing.iptu && (
                      <p className="text-xs text-foreground-dim font-mono mt-1">
                        IPTU: {property.pricing.iptu}
                      </p>
                    )}
                    {property.pricing.note && (
                      <p className="text-xs text-foreground-muted mt-2 leading-relaxed">
                        {property.pricing.note}
                      </p>
                    )}
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-6 space-y-3">
                    <Button
                      variant="whatsapp"
                      size="lg"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full text-sm font-bold"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Falar no WhatsApp
                    </Button>

                    <a
                      href={property.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full text-xs"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver Anúncio Oficial no Portal
                      </Button>
                    </a>
                  </div>

                  {/* Broker Card */}
                  <div className="mt-6 pt-6 border-t border-border-subtle flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-bold font-heading text-sm">
                      LP
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-foreground font-heading">
                        {siteConfig.broker.name}
                      </p>
                      <p className="text-xs text-foreground-muted">
                        Corretor Especialista
                      </p>
                      <p className="text-xs text-primary font-mono mt-0.5">
                        {siteConfig.broker.phoneDisplay}
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-4 pt-4 border-t border-border-subtle/80 flex items-center gap-2 text-[11px] text-foreground-dim">
                    <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Locação segura com assessoria da Pinciara Imóveis Exclusivos</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global WhatsApp Floating Button */}
      <WhatsAppFloat
        onClick={() => setIsModalOpen(true)}
        label="Falar sobre este imóvel"
      />

      {/* Lead Capture Modal with Zero Persistence */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={modalTarget}
      />
    </div>
  );
}
