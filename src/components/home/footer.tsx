import * as React from "react";
import Image from "next/image";
import { Phone, MapPin, ExternalLink, ShieldCheck, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#222222] text-[#d4d0c7] pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="relative h-10 w-48">
              <Image
                src="/images/logo-pinciara.svg"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-[#b8b4aa] leading-relaxed max-w-md">
              Especialistas em locação de imóveis comerciais de alto padrão em São Francisco, Niterói. Conectando marcas consolidadas e franquias em expansão aos melhores pontos da Avenida Presidente Roosevelt.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#999488] font-mono">
              <ShieldCheck className="h-4 w-4 text-[#FFBB00]" />
              <span>Intermediação imobiliária com credibilidade e segurança jurídica</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#faf9f6] font-mono">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-[#b8b4aa]">
              <li>
                <a href="#regiao" className="hover:text-[#FFBB00] transition-colors">
                  A Região de São Francisco
                </a>
              </li>
              <li>
                <a href="#imoveis" className="hover:text-[#FFBB00] transition-colors">
                  5 Imóveis Disponíveis
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#FFBB00] transition-colors">
                  Diferenciais Pinciara
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFBB00] transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FFBB00] hover:underline"
                >
                  Portal da Imobiliária
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#faf9f6] font-mono">
              Atendimento Direto
            </p>
            <div className="space-y-2.5 text-sm text-[#b8b4aa]">
              <p className="font-semibold text-[#faf9f6]">
                {siteConfig.broker.name}
              </p>
              <p className="text-xs text-[#999488]">
                {siteConfig.broker.role}
              </p>
              <div className="flex items-center gap-2 pt-1 text-[#FFBB00] font-mono text-sm font-bold">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.broker.phoneDisplay}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-[#999488]">
                <MapPin className="h-4 w-4 shrink-0 text-[#FFBB00] mt-0.5" />
                <span>{siteConfig.location.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a857a]">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            Valores, disponibilidade e condições comerciais sujeitos a confirmação.
          </p>
        </div>
      </Container>
    </footer>
  );
}
