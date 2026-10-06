"use client";

import * as React from "react";
import { MessageCircle, User, Phone, ShieldCheck, Building2, ExternalLink } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { formatBrazilianPhone, isValidBrazilianPhone } from "@/lib/phone";

export interface LeadModalTarget {
  id: string;
  title: string;
  badge?: string;
}

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  property?: LeadModalTarget | null;
}

/**
 * LeadModal component meeting all requirements of Section 11.2 & Section 14:
 * - Real-time validation of Name (>= 2 chars) and Phone (BR mask + valid DDD)
 * - Zero persistence: no localStorage, no cookies, no database
 * - Injects data into wa.me / api.whatsapp.com link with encoded prefilled message
 * - Bulletproof redirect with popup blocker fallback (window.location.href)
 * - Key-based pristine state reset on open/property change (no cascading renders)
 */
function LeadFormContent({
  onClose,
  property,
}: {
  onClose: () => void;
  property?: LeadModalTarget | null;
}) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [touchedName, setTouchedName] = React.useState(false);
  const [touchedPhone, setTouchedPhone] = React.useState(false);
  const [isRedirecting, setIsRedirecting] = React.useState(false);
  const [redirectUrl, setRedirectUrl] = React.useState<string | null>(null);

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const phoneInputRef = React.useRef<HTMLInputElement>(null);

  const isNameValid = name.trim().length >= 2;
  const isPhoneValid = isValidBrazilianPhone(phone);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBrazilianPhone(e.target.value);
    setPhone(formatted);
  };

  const executeRedirect = (url: string) => {
    setRedirectUrl(url);
    setIsRedirecting(true);

    let popupOpened = false;
    try {
      const win = window.open(url, "_blank");
      if (win && !win.closed && typeof win.closed !== "undefined") {
        popupOpened = true;
        win.focus();
      }
    } catch {
      popupOpened = false;
    }

    if (!popupOpened) {
      // Direct redirection fallback when popup blocker blocks window.open or on mobile devices
      window.location.href = url;
    } else {
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouchedName(true);
    setTouchedPhone(true);

    if (!isNameValid) {
      nameInputRef.current?.focus();
      return;
    }

    if (!isPhoneValid) {
      phoneInputRef.current?.focus();
      return;
    }

    // Generate WhatsApp prefilled message
    let message = "";
    if (property) {
      message = `Olá ${siteConfig.broker.name}! Meu nome é ${name.trim()}, meu telefone é ${phone.trim()}.\nTenho interesse no imóvel "${property.title}" (${property.id}) na avenida principal de São Francisco.`;
    } else {
      message = `Olá ${siteConfig.broker.name}! Meu nome é ${name.trim()}, meu telefone é ${phone.trim()}.\nTenho interesse em conhecer os imóveis comerciais disponíveis na avenida principal de São Francisco.`;
    }

    const targetUrl = `https://api.whatsapp.com/send?phone=${siteConfig.broker.phoneRaw}&text=${encodeURIComponent(message)}`;
    executeRedirect(targetUrl);
  };

  if (isRedirecting) {
    return (
      <div className="py-6 text-center space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FFBB00]/20 text-[#FFBB00] mx-auto animate-pulse">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <p className="font-heading text-base font-medium text-[#FAF9F6]">
            Redirecionando para o WhatsApp...
          </p>
          <p className="text-xs text-[#88857E] max-w-xs mx-auto">
            Se a conversa não abrir automaticamente, clique no botão abaixo para continuar:
          </p>
        </div>
        {redirectUrl && (
          <div className="pt-2">
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FFBB00] text-[#121212] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#FFC82C] transition-colors rounded-[2px]"
            >
              <span>Abrir WhatsApp Agora</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Contextual Property Card (if triggered from a specific property) */}
      {property && (
        <div className="rounded-[2px] border border-white/10 bg-[#121212] p-3.5 flex items-start gap-3">
          <div className="rounded-none bg-[#FFBB00]/15 p-2 text-[#FFBB00] mt-0.5">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#FFBB00]">
              <span>Imóvel Selecionado</span>
            </div>
            <p className="text-sm font-normal text-[#FAF9F6] truncate mt-0.5">
              {property.title}
            </p>
            <p className="text-xs text-[#88857E] font-mono">
              Cód: {property.id}
            </p>
          </div>
        </div>
      )}

      {/* Input: Nome Completo */}
      <div>
        <label
          htmlFor="lead-name"
          className="block text-xs font-mono uppercase tracking-wider text-[#88857E] mb-1.5"
        >
          Seu Nome Completo <span className="text-[#FFBB00]">*</span>
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#777]">
            <User className="h-4 w-4" />
          </div>
          <input
            ref={nameInputRef}
            id="lead-name"
            type="text"
            required
            autoFocus
            placeholder="Ex: Carlos Eduardo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouchedName(true)}
            className={`w-full rounded-[2px] border bg-[#141414] py-3 pl-10 pr-4 text-sm text-[#FAF9F6] placeholder:text-white/20 focus:outline-none transition-colors ${
              touchedName && !isNameValid
                ? "border-red-500 focus:border-red-500"
                : "border-white/15 focus:border-[#FFBB00]"
            }`}
          />
        </div>
        {touchedName && !isNameValid && (
          <p className="mt-1 text-xs text-red-400 font-mono">
            Por favor, informe seu nome com pelo menos 2 caracteres.
          </p>
        )}
      </div>

      {/* Input: Telefone / WhatsApp */}
      <div>
        <label
          htmlFor="lead-phone"
          className="block text-xs font-mono uppercase tracking-wider text-[#88857E] mb-1.5"
        >
          Seu Telefone / WhatsApp <span className="text-[#FFBB00]">*</span>
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#777]">
            <Phone className="h-4 w-4" />
          </div>
          <input
            ref={phoneInputRef}
            id="lead-phone"
            type="tel"
            required
            placeholder="(21) 99999-9999"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => setTouchedPhone(true)}
            className={`w-full rounded-[2px] border bg-[#141414] py-3 pl-10 pr-4 text-sm text-[#FAF9F6] placeholder:text-white/20 focus:outline-none font-mono transition-colors ${
              touchedPhone && !isPhoneValid
                ? "border-red-500 focus:border-red-500"
                : "border-white/15 focus:border-[#FFBB00]"
            }`}
          />
        </div>
        {touchedPhone && !isPhoneValid && (
          <p className="mt-1 text-xs text-red-400 font-mono">
            Informe um número de telefone válido com DDD (10 ou 11 dígitos).
          </p>
        )}
      </div>

      {/* Short LGPD Notice */}
      <div className="flex items-start gap-2 pt-1 text-[11px] text-[#88857E]">
        <ShieldCheck className="h-4 w-4 shrink-0 text-[#FFBB00]/80 mt-0.5" />
        <span>
          Ao enviar, você será redirecionado ao WhatsApp de {siteConfig.broker.name} com seus dados preenchidos. Seus dados não são armazenados em servidor.
        </span>
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="w-full font-mono text-xs tracking-widest uppercase font-semibold"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Continuar para o WhatsApp
        </Button>
      </div>
    </form>
  );
}

export function LeadModal({ isOpen, onClose, property }: LeadModalProps) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Falar no WhatsApp"
      description={`Atendimento direto com ${siteConfig.broker.name}, corretor responsável.`}
    >
      <LeadFormContent
        key={`${isOpen ? "open" : "closed"}-${property?.id || "general"}`}
        onClose={onClose}
        property={property}
      />
    </Dialog>
  );
}
