"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quais as modalidades de garantia aceitas para locação comercial?",
    answer:
      "Trabalhamos com Seguro Fiança (Porto Seguro, Too Seguros), Fiador idôneo com imóvel quitado no Estado do Rio de Janeiro, Título de Capitalização ou Fiança Bancária, garantindo agilidade na análise cadastral para Pessoa Jurídica.",
  },
  {
    question: "É possível negociar período de carência para obras e adequação?",
    answer:
      "Sim. É padrão nas locações comerciais da Avenida Presidente Roosevelt a concessão de carência proporcional ao escopo de obras, projetos e instalações necessárias para o início da operação da sua marca.",
  },
  {
    question: "Franquias ou empresas em fase de constituição podem locar?",
    answer:
      "Sim. Realizamos a análise combinada do plano de negócio da franquia e dos dados dos sócios/garantidores, facilitando a reserva e aprovação da locação antes da emissão definitiva do CNPJ local.",
  },
  {
    question: "Qual é o prazo habitual dos contratos de locação comercial?",
    answer:
      "Os contratos costumam ser formalizados por prazos de 36 a 60 meses (3 a 5 anos), proporcionando a estabilidade necessária para amortização dos investimentos e segurança jurídica do ponto comercial conforme a Lei do Inquilinato.",
  },
  {
    question: "Como funciona o agendamento de visita técnica aos imóveis?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp com Luiz Pinciara. As visitas são acompanhadas e você poderá levar arquitetos e engenheiros para avaliar as instalações e projetos no local.",
  },
];

/**
 * FAQSection component with accessible accordion pattern
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" variant="default">
      <SectionHeader
        badge="Dúvidas Frequentes"
        title="Perguntas comuns sobre a locação comercial"
        description="Informações transparentes sobre prazos contratuais, garantias aceitas e carência para implantação da sua operação."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={cn(
                "rounded-2xl border transition-all duration-200 overflow-hidden",
                isOpen
                  ? "border-primary/40 bg-surface-elevated/90 shadow-lg"
                  : "border-border-subtle bg-surface/60 hover:border-border"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-base sm:text-lg font-bold text-foreground font-heading pr-4">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface border border-border text-foreground-muted transition-transform duration-300",
                    isOpen && "rotate-180 text-primary border-primary/40 bg-primary/10"
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-foreground-muted leading-relaxed border-t border-border-subtle/60 animate-in fade-in slide-in-from-top-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
