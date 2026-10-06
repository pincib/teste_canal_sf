import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

interface FooterProps {
  onContactClick?: () => void;
}

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer({ onContactClick }: FooterProps = {}) {
  return (
    <footer className="bg-[#0c0c0c] text-[#FAF9F6] border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <Container size="wide">
        {/* Main Footer Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand, Tagline & Social Networks (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative h-9 w-48">
              <Image
                src="/images/logo-pinciara.svg"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFBB00]">
              {siteConfig.tagline}
            </p>

            <p className="text-xs sm:text-sm text-[#88857E] max-w-sm">
              Intermediação de alto padrão, inteligência territorial e curadoria de ativos no Canal de São Francisco, Niterói/RJ.
            </p>

            <div className="pt-1">
              <span className="inline-block font-mono text-[11px] text-[#C7C4BC] border border-white/15 px-2.5 py-1">
                {siteConfig.broker.creci}
              </span>
            </div>

            {/* Official Social Media Links */}
            <div className="pt-2 flex items-center gap-3 text-[#88857E]">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Pinciara Imóveis"
                className="p-2 border border-white/10 hover:border-[#FFBB00] hover:text-[#FAF9F6] transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Pinciara Imóveis"
                className="p-2 border border-white/10 hover:border-[#FFBB00] hover:text-[#FAF9F6] transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Pinciara Imóveis"
                className="p-2 border border-white/10 hover:border-[#FFBB00] hover:text-[#FAF9F6] transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Pinciara Imóveis"
                className="p-2 border border-white/10 hover:border-[#FFBB00] hover:text-[#FAF9F6] transition-colors"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Pinciara Headquarters & Official Google Maps Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FAF9F6]">
              Sede São Francisco
            </p>

            <div className="space-y-3 text-xs text-[#88857E]">
              <div className="space-y-1">
                <p className="font-medium text-[#FAF9F6] font-mono text-xs">
                  {siteConfig.headquarters.address}, {siteConfig.headquarters.complement}
                </p>
                <p>
                  {siteConfig.headquarters.neighborhood} — {siteConfig.headquarters.city}/{siteConfig.headquarters.state}
                </p>
                <p className="font-mono text-[11px] text-[#66635D]">
                  CEP {siteConfig.headquarters.zip}
                </p>
              </div>

              {/* Direct Pinciara Imóveis Google Maps Link — Clean Solid Primary Button */}
              <div className="pt-2">
                <a
                  href={siteConfig.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFBB00] hover:bg-[#FFC82C] text-[#121212] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#FFBB00] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </a>
              </div>

              {/* Operating Hours */}
              <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] font-mono">
                <div className="flex items-center gap-1.5 text-[#C7C4BC]">
                  <Clock className="h-3 w-3 text-[#FFBB00]" />
                  <span>Horários de Atendimento:</span>
                </div>
                <p className="text-[#88857E]">
                  Comercial: 08h às 19h (todos os dias)
                </p>
                <p className="text-[#88857E]">
                  Administrativo: Seg a Sex, 09h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FAF9F6]">
              Atendimento Executivo
            </p>

            <div className="space-y-3 text-xs text-[#88857E]">
              <div>
                <p className="font-heading font-medium text-sm text-[#FAF9F6]">
                  {siteConfig.broker.name}
                </p>
                <p className="text-[11px] font-mono text-[#88857E]">
                  {siteConfig.broker.role}
                </p>
              </div>

              <div className="space-y-2.5 pt-1 font-mono text-xs">
                {/* WhatsApp Action */}
                <div>
                  {onContactClick ? (
                    <button
                      type="button"
                      onClick={onContactClick}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FFBB00] hover:bg-[#FFC82C] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider transition-all border border-[#FFBB00] cursor-pointer"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-[#121212]" />
                      <span>Falar no WhatsApp</span>
                    </button>
                  ) : (
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#FFBB00] hover:bg-[#FFC82C] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider transition-all border border-[#FFBB00]"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-[#121212]" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  )}
                </div>

                <div className="pt-1 space-y-1.5">
                  <a
                    href={`tel:+${siteConfig.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-[#C7C4BC] hover:text-[#FAF9F6] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#FFBB00]" />
                    <span>{siteConfig.contact.phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-[#C7C4BC] hover:text-[#FAF9F6] transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#88857E]" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: On-Page Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FAF9F6]">
              Corredor
            </p>
            <ul className="space-y-2.5 font-mono text-xs text-[#88857E]">
              <li>
                <Link href="/#imoveis" className="hover:text-[#FAF9F6] transition-colors flex items-center gap-2">
                  <span className="text-[#FFBB00]">01</span>
                  <span>Portfólio de Ativos</span>
                </Link>
              </li>
              <li>
                <Link href="/#regiao" className="hover:text-[#FAF9F6] transition-colors flex items-center gap-2">
                  <span className="text-[#FFBB00]">02</span>
                  <span>A Região</span>
                </Link>
              </li>
              <li>
                <Link href="/#diferenciais" className="hover:text-[#FAF9F6] transition-colors flex items-center gap-2">
                  <span className="text-[#FFBB00]">03</span>
                  <span>Consultoria</span>
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#FAF9F6] transition-colors flex items-center gap-2">
                  <span className="text-[#FFBB00]">04</span>
                  <span>Dúvidas</span>
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href={siteConfig.links.agencySite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#C7C4BC] hover:text-[#FAF9F6] transition-colors text-[11px]"
                >
                  <span>Ver Mais Imóveis</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Intellectual Property Notice */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[11px] text-[#66635D]">
          <div className="space-y-1">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados. {siteConfig.broker.creci}
            </p>
            <p className="text-[10px] text-[#55524A]">
              {siteConfig.legal.copyright}
            </p>
          </div>
          <div className="text-left md:text-right space-y-0.5">
            <p className="text-[#88857E]">
              São Francisco · Niterói — RJ
            </p>
            <p className="text-[10px] text-[#55524A]">
              Eixo Comercial Presidente Roosevelt
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
