import * as React from "react";
import { CheckCircle2, FileText, TrendingUp, Sparkles, Navigation } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { regionTopics } from "@/data/region";

/**
 * RegionSection component presenting the market analysis of São Francisco, Niterói
 * Integrates research from pesquisas/Diferencas_da_Localizacao.md and leaves explicit slots
 * for the upcoming markdown research files.
 */
export function RegionSection() {
  return (
    <Section id="regiao" variant="surface">
      <SectionHeader
        badge="Estudo de Mercado & Localização"
        title="Por que instalar sua operação na Av. Presidente Roosevelt?"
        description="São Francisco é um dos bairros de maior renda de Niterói, unindo polo gastronômico consolidado, conexão estratégica e circulação diária qualificada."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {regionTopics.map((topic) => {
          const isCompleted = topic.status === "completed";

          return (
            <Card
              key={topic.id}
              className={`flex flex-col h-full border ${
                isCompleted
                  ? "border-primary/30 bg-surface-elevated/80 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  : "border-border-subtle bg-surface/60 opacity-95"
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={isCompleted ? "gold" : "outline"} className="text-[11px]">
                    {topic.tag}
                  </Badge>

                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-primary font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Pesquisa Ativa
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-foreground-dim font-mono">
                      <FileText className="h-3.5 w-3.5" />
                      Espaço Reservado
                    </span>
                  )}
                </div>

                <CardTitle className="text-xl sm:text-2xl leading-snug">
                  {topic.title}
                </CardTitle>
                <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                  {topic.summary}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                {/* Highlight Stats Strip */}
                {topic.stats && (
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-background/60 border border-border-subtle text-center">
                    {topic.stats.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <p className="text-base sm:text-lg font-bold text-primary font-heading">
                          {st.value}
                        </p>
                        <p className="text-[10px] text-foreground-dim uppercase font-mono leading-tight">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Insights List */}
                <div className="space-y-2.5 pt-2 border-t border-border-subtle">
                  {topic.bulletPoints.map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-foreground-muted leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Reference Source Note */}
                <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between text-[11px] text-foreground-dim font-mono">
                  <span>Fonte:</span>
                  <span className="text-foreground-muted truncate max-w-[200px]">
                    {topic.sourceDoc}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
