"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";
import { regionTopics } from "@/data/region";

export function RegionSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const currentTopic = regionTopics[activeTab];

  const tabLabels = [
    { num: "01", label: "Eixo Estruturante & Localização" },
    { num: "02", label: "Crescimento & R$ 13,1M em Obras" },
    { num: "03", label: "Vocação Comercial & Setores" },
  ];

  return (
    <section id="regiao" className="py-14 sm:py-18 lg:py-22 bg-[#FAF9F6] text-[#141414] border-b border-black/10">
      <Container size="wide">
        {/* Editorial Section Header */}
        <SectionHeader
          theme="light"
          sectionNumber="02"
          category="Inteligência Territorial"
          title="Por que instalar sua operação na Av. Presidente Roosevelt?"
          description="São Francisco reúne infraestrutura viária renovada, demanda de alto poder aquisitivo no entorno imediato e um dos eixos comerciais mais disputados de Niterói."
        />

        {/* Driessen Architectuur Tab Bar — High-Contrast Architectural Plate Index */}
        <div className="mb-8 sm:mb-12 border-b border-black/15">
          <div role="tablist" aria-label="Tópicos territoriais de São Francisco" className="flex flex-wrap gap-4 sm:gap-8 -mb-px">
            {tabLabels.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  id={`region-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`region-tabpanel-${idx}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative pb-3.5 sm:pb-4 text-left transition-colors cursor-pointer ${
                    isActive ? "text-[#141414]" : "text-[#88857E] hover:text-[#141414]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm uppercase tracking-[0.2em]">
                    <span
                      className={`transition-colors ${
                        isActive ? "text-[#141414] font-bold" : "text-[#AAA8A0] group-hover:text-[#141414]"
                      }`}
                    >
                      [{tab.num}]
                    </span>
                    <span className={isActive ? "font-semibold text-[#141414]" : "font-normal"}>
                      {tab.label}
                    </span>
                  </div>
                  {/* Active hairline indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#141414]"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section — Monumental Metrics & Authorial Editorial Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTopic.id}
            role="tabpanel"
            id={`region-tabpanel-${activeTab}`}
            aria-labelledby={`region-tab-${activeTab}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 sm:space-y-14"
          >
            {/* Proportional Numbers Grid — Etched Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-black/15">
              {currentTopic.stats.map((st, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <p className="font-heading text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-light tracking-[-0.04em] leading-none text-[#141414]">
                    {st.value}
                  </p>
                  <div className="pt-2 border-t border-black/10 space-y-0.5">
                    <p className="text-xs sm:text-sm font-medium text-[#2A2925] leading-snug">
                      {st.label}
                    </p>
                    {st.source && (
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#88857E]">
                        FONTE · {st.source}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Dual Column: Macro Analysis + Structured Evidence */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left Column (5 Cols) — Overview & Macro Narrative */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#88857E] font-semibold block">
                    {currentTopic.tag}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-normal tracking-[-0.03em] leading-tight text-[#141414]">
                    {currentTopic.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#55524A] leading-relaxed font-light">
                  {currentTopic.summary}
                </p>

                {/* Micrographic Distribution Bar (Driessen Style) */}
                {activeTab === 0 && (
                  <div className="pt-6 border-t border-black/15 space-y-2.5">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#66635D]">
                      <span>Composição da Avenida</span>
                      <span>100% Mapeado</span>
                    </div>
                    <div className="h-2 w-full bg-[#E5E2D9] overflow-hidden flex">
                      <div className="h-full bg-[#141414]" style={{ width: "21.6%" }} title="Comercial (21.6%)" />
                      <div className="h-full bg-[#88857E]" style={{ width: "73.7%" }} title="Residencial (73.7%)" />
                      <div className="h-full bg-[#FFBB00]" style={{ width: "4.7%" }} title="Outros (4.7%)" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#55524A] pt-0.5">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 bg-[#141414] inline-block" /> 21,6% Comercial
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 bg-[#88857E] inline-block" /> 73,7% Residencial
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 bg-[#FFBB00] inline-block" /> 4,7% Outros
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column (7 Cols) — Structured Evidence & Insights */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {currentTopic.insights.map((insight, iIdx) => (
                  <div
                    key={iIdx}
                    className="pt-4 border-t border-black/15 space-y-2"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-[#88857E]">
                      <span className="text-[#141414] font-semibold">
                        0{iIdx + 1}
                      </span>
                      <span className="text-black/20">—</span>
                      <span className="uppercase tracking-widest text-[10px]">EIXO TÉCNICO</span>
                    </div>
                    <h4 className="font-heading text-base sm:text-lg font-medium tracking-tight text-[#141414] leading-snug">
                      {insight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#55524A] leading-relaxed font-light">
                      {insight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
