"use client";

import * as React from "react";
import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { RegionSection } from "@/components/home/region-section";
import { PropertiesSection } from "@/components/home/properties-section";
import { DifferentialsSection } from "@/components/home/differentials-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { Footer } from "@/components/home/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { LeadModal, LeadModalTarget } from "@/components/conversion/lead-modal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalTarget, setModalTarget] = React.useState<LeadModalTarget | null>(null);

  const handleOpenLeadModal = React.useCallback((target?: LeadModalTarget) => {
    setModalTarget(target || null);
    setIsModalOpen(true);
  }, []);

  const handleCloseLeadModal = React.useCallback(() => {
    setIsModalOpen(false);
    setModalTarget(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#141414] text-[#FAF9F6] selection:bg-[#FFBB00]/30 selection:text-[#FFBB00]">
      {/* Header Navigation */}
      <Navbar onContactClick={() => handleOpenLeadModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero & Google Maps Corridor Showcase */}
        <HeroSection onContactClick={() => handleOpenLeadModal()} />

        {/* 01. Vitrine dos 5 Imóveis Comerciais (ERA Residence Linear Style) */}
        <PropertiesSection
          onPropertySelect={(target) => handleOpenLeadModal(target)}
        />

        {/* 02. Sobre a Região (Driessen Grid - São Francisco em Expansão) */}
        <RegionSection />

        {/* 03. Processo Consultivo e Credibilidade */}
        <DifferentialsSection />

        {/* 04. FAQ Linear Minimalista */}
        <FAQSection />

        {/* 05. CTA Final de Fechamento */}
        <CTASection onContactClick={() => handleOpenLeadModal()} />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => handleOpenLeadModal()} />

      {/* Global WhatsApp Floating Button */}
      <WhatsAppFloat
        onClick={() => handleOpenLeadModal()}
        label="Falar com Luiz Pinciara"
      />

      {/* Lead Capture Modal with Zero Persistence */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseLeadModal}
        property={modalTarget}
      />
    </div>
  );
}
