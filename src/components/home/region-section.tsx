"use client";

import * as React from "react";
import { MapPin, TrendingUp, Briefcase, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
import { regionTopics } from "@/data/region";

/**
 * RegionSection (De-cluttered & Grounded in Real Research)
 * - Fundo sereno em #FAF9F6 (Warm Alabaster)
 * - Navegação elegante entre os 3 estudos realizados pelo cliente:
 *   1. Diferenciais da Localização (Av. Presidente Roosevelt)
 *   2. Crescimento Recente & Obras Viárias (R$ 13,1M no Túnel)
 *   3. Tipos de Negócios Mais Apropriados (Saúde, Gastronomia, Varejo)
 * - Eliminação de poluição visual: sem caixas aninhadas, sem badges duplicadas, tipografia limpa
 */
export function RegionSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const currentTopic = regionTopics[activeTab];

  const tabs = [
    { label: "1. A Localização", icon: MapPin },
    { label: "2. Crescimento & Obras", icon: TrendingUp },
    { label: "3. Vocação & Negócios", icon: Briefcase },
  ];

  return (
    <Section id="regiao" variant="alabaster">
      <SectionHeader
        theme="light"
        badge="Estudos de Mercado e Localização"
        title="Por que instalar sua operação na Av. Presidente Roosevelt?"
        description="São Francisco reúne infraestrutura viária renovada, demanda de alto poder aquisitivo e uma das menores taxas de vacância comercial de Niterói."
      />

      {/* Clean Tab Selector - Minimal & High Contrast */}
      <div className="flex items-center justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#eeebe2] border border-[#e2ded3] max-w-full overflow-x-auto">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-white text-[#1a1a1a] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                    : "text-[#666258] hover:text-[#1a1a1a]"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-[#D46E00]" : "text-[#888]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area - Clean, Spacious & Authoritative */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTopic.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          {/* Main Title & Subtitle Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#e8e4db] shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#997300] font-semibold">
                {currentTopic.tag}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] font-heading tracking-tight leading-snug">
                {currentTopic.title}
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#555248] leading-relaxed">
                {currentTopic.summary}
              </p>
            </div>

            {/* 3 or 4 Verified Metric Columns */}
            <div className="mt-8 pt-8 border-t border-[#f0ede4] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {currentTopic.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a1a1a] font-heading tracking-tight">
                    {st.value}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#33312b] leading-tight">
                    {st.label}
                  </p>
                  {st.source && (
                    <p className="text-[11px] text-[#8c887e] font-mono">
                      Fonte: {st.source}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4 Deep Insights Grid - Clean & Crisp (No nesting) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTopic.insights.map((insight, iIdx) => (
              <div
                key={iIdx}
                className="rounded-2xl bg-white p-7 border border-[#e8e4db] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-[#1a1a1a] font-heading mb-2.5 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#FFBB00]" />
                    {insight.title}
                  </h4>
                  <p className="text-sm text-[#555248] leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Bullet Highlights */}
          <div className="rounded-2xl bg-[#f2efe7] p-6 sm:p-7 border border-[#e2ded4]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#666258] font-bold mb-4">
              Síntese do Estudo
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#3a3832]">
              {currentTopic.bulletPoints.map((bp, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#D46E00] shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
