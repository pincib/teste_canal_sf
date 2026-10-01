"use client";

import * as React from "react";
import { ChevronDown, HelpCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/section";
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
      "Sim. É praxe comum nas locações comerciais da Avenida Presidente Roosevelt a concessão de carência proporcional ao escopo de obras, projetos e instalações necessárias para o início da operação da sua marca.",
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
 * FAQSection component with fluid AnimatePresence accordion and luxury charcoal #333333 styling
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section id="faq" variant="charcoal">
      <SectionHeader
        badge="Dúvidas Frequentes"
        title="Perguntas comuns sobre a locação comercial"
        description="Informações transparentes sobre prazos contratuais, garantias aceitas e carência para implantação da sua operação."
      />

      <div className="mx-auto max-w-3xl space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "rounded-2xl border transition-colors duration-300 overflow-hidden",
                isOpen
                  ? "border-[#FFBB00]/40 bg-[#282828] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  : "border-white/10 bg-[#242424]/80 hover:border-white/20 hover:bg-[#282828]/80"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
              >
                <span className="text-base sm:text-lg font-bold text-[#faf9f6] font-heading pr-4 group-hover:text-[#FFBB00] transition-colors duration-200">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                    isOpen
                      ? "text-[#FFBB00] border-[#FFBB00]/40 bg-[#FFBB00]/10"
                      : "text-[#999] border-white/10 bg-white/5 group-hover:text-white group-hover:border-white/25"
                  )}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#d0cbc1] leading-relaxed border-t border-white/8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
