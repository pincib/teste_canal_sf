"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section";

interface FAQItem {
  num: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    num: "01",
    question: "Quais as modalidades de garantia aceitas para locação comercial?",
    answer:
      "Trabalhamos com Seguro Fiança (Porto Seguro, Too Seguros), Fiador idôneo com imóvel quitado no Estado do Rio de Janeiro, Título de Capitalização ou Fiança Bancária, garantindo agilidade e segurança jurídica na aprovação cadastral para Pessoa Jurídica.",
  },
  {
    num: "02",
    question: "É possível negociar período de carência para obras e adequação de fachada?",
    answer:
      "Sim. É prática comum nas locações comerciais da Avenida Presidente Roosevelt a concessão de carência proporcional ao cronograma de obras, adequação estrutural e reformas necessárias para a inauguração da sua marca.",
  },
  {
    num: "03",
    question: "Franquias ou empresas em fase de abertura podem locar?",
    answer:
      "Sim. Realizamos a análise combinada do plano de negócio da franquia e dos dados dos sócios/garantidores, permitindo a reserva e validação da locação antes da emissão definitiva do CNPJ local.",
  },
  {
    num: "04",
    question: "Qual é o prazo habitual dos contratos de locação comercial na região?",
    answer:
      "Os contratos são habitualmente formalizados por prazos de 36 a 60 meses (3 a 5 anos), proporcionando a amortização do investimento de implantação e a segurança jurídica assegurada pela Lei do Inquilinato.",
  },
  {
    num: "05",
    question: "Como funciona o agendamento de visita técnica aos imóveis?",
    answer:
      "O agendamento é realizado diretamente com Luiz Pinciara via WhatsApp. As visitas são acompanhadas e os imóveis estão disponíveis para avaliação de arquitetos, decoradores e engenheiros da sua empresa.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-18 lg:py-22 bg-[#FAF9F6] text-[#141414] border-b border-black/10">
      <Container size="wide">
        {/* Editorial Section Header */}
        <SectionHeader
          theme="light"
          sectionNumber="04"
          category="Esclarecimentos"
          title="Perguntas Frequentes sobre a Locação"
          description="Diretrizes objetivas sobre garantias contratuais, prazos de carência e etapas de implantação da sua empresa no Canal de São Francisco."
        />

        {/* Ultra-Dry Minimalist Linear Accordion (Item 5) */}
        <div className="border-t border-black/15 max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="border-b border-black/15">
                <button
                  type="button"
                  id={`faq-question-${idx}`}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="flex w-full items-baseline justify-between py-4 sm:py-5 text-left cursor-pointer group focus:outline-none"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6 pr-6">
                    <span className="font-mono text-xs sm:text-sm text-[#88857E] font-medium shrink-0">
                      {faq.num}
                    </span>
                    <span className="font-heading text-base sm:text-lg md:text-xl font-normal text-[#141414] transition-opacity group-hover:opacity-75">
                      {faq.question}
                    </span>
                  </div>

                  {/* Dry Minimalist Hairline Cross Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 text-[#141414]/60 group-hover:text-[#141414] mt-0.5 text-lg font-light select-none font-mono"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 sm:pl-12 pb-5 pt-0.5 max-w-2xl">
                        <p className="text-xs sm:text-sm text-[#55524A] leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
