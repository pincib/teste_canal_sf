import * as React from "react";
import { ShieldCheck, Award, Handshake, Users, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

/**
 * DifferentialsSection component communicating the authority and trust of Pinciara Imóveis Exclusivos
 */
export function DifferentialsSection() {
  const differentials = [
    {
      icon: Award,
      title: "Curadoria Exclusiva na Região",
      description:
        "Foco estrito em imóveis comerciais nobres na Avenida Presidente Roosevelt e orla de São Francisco, garantindo os melhores pontos para quem busca visibilidade.",
    },
    {
      icon: ShieldCheck,
      title: "Assessoria Jurídica Especializada",
      description:
        "Suporte completo na elaboração de contratos comerciais seguros, negociação de prazos de carência para reformas e adequações de fachada.",
    },
    {
      icon: Handshake,
      title: "Condução Direta com a Diretoria",
      description:
        `Negociações conduzidas diretamente com ${siteConfig.broker.name}, proporcionando agilidade, clareza e flexibilidade comercial para o seu negócio.`,
    },
  ];

  return (
    <Section id="diferenciais" variant="surface">
      <SectionHeader
        badge="Credibilidade Institucional"
        title="Por que fechar sua locação comercial com a Pinciara?"
        description="Especialização de mercado, segurança contratual e atendimento ágil para viabilizar a expansão da sua marca com solidez."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {differentials.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Card
              key={idx}
              className="p-6 sm:p-8 bg-surface/80 border-border/70 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
