"use client";

import * as React from "react";
import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { RegionSection } from "@/components/home/region-section";
import { PropertiesSection } from "@/components/home/properties-section";
import { DifferentialsSection } from "@/components/home/differentials-section";
import { FAQSection } from "@/components/home/faq-section";
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
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/25 selection:text-primary">
      {/* Header Navigation */}
      <Navbar onContactClick={() => handleOpenLeadModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection onContactClick={() => handleOpenLeadModal()} />

        {/* 2. Sobre a Região (São Francisco em Expansão) */}
        <RegionSection />

        {/* 3. Vitrine dos 5 Imóveis Comerciais */}
        <PropertiesSection
          onPropertySelect={(target) => handleOpenLeadModal(target)}
        />

        {/* 4. Diferenciais da Imobiliária */}
        <DifferentialsSection />

        {/* 5. FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

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
