"use client";

import * as React from "react";
import { MessageCircle, User, Phone, ShieldCheck, Building2 } from "lucide-react";
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
 * - Injects data into wa.me link with encoded prefilled message
 * - Accessible Dialog wrapper with Escape, focus trap, and backdrop dismissal
 */
export function LeadModal({ isOpen, onClose, property }: LeadModalProps) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [touchedName, setTouchedName] = React.useState(false);
  const [touchedPhone, setTouchedPhone] = React.useState(false);

  // Reset fields when modal opens or target changes
  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setPhone("");
      setTouchedName(false);
      setTouchedPhone(false);
    }
  }, [isOpen, property]);

  const isNameValid = name.trim().length >= 2;
  const isPhoneValid = isValidBrazilianPhone(phone);
  const isFormValid = isNameValid && isPhoneValid;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBrazilianPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Generate WhatsApp prefilled message
    let message = "";
    if (property) {
      message = `Olá ${siteConfig.broker.name}! Meu nome é ${name.trim()}, meu telefone é ${phone.trim()}.\nTenho interesse no imóvel "${property.title}" (${property.id}) na avenida principal de São Francisco.`;
    } else {
      message = `Olá ${siteConfig.broker.name}! Meu nome é ${name.trim()}, meu telefone é ${phone.trim()}.\nTenho interesse em conhecer os imóveis comerciais disponíveis na avenida principal de São Francisco.`;
    }

    const whatsappUrl = `https://wa.me/${siteConfig.broker.phoneRaw}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Close modal and clear state from memory (zero persistence)
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Falar no WhatsApp"
      description={`Atendimento direto com ${siteConfig.broker.name}, corretor responsável.`}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Contextual Property Card (if triggered from a specific property) */}
        {property && (
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2 text-primary mt-0.5">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold">
                  Imóvel Selecionado
                </span>
                {property.badge && (
                  <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-foreground-muted border border-border">
                    {property.badge}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-foreground truncate mt-0.5">
                {property.title}
              </p>
              <p className="text-xs text-foreground-muted font-mono">
                Cód: {property.id}
              </p>
            </div>
          </div>
        )}

        {/* Input: Nome Completo */}
        <div>
          <label
            htmlFor="lead-name"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-1.5"
          >
            Seu Nome Completo <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-foreground-muted">
              <User className="h-4 w-4" />
            </div>
            <input
              id="lead-name"
              type="text"
              required
              autoFocus
              placeholder="Ex: Carlos Eduardo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouchedName(true)}
              className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>
          {touchedName && !isNameValid && (
            <p className="mt-1 text-xs text-red-400">
              Por favor, informe seu nome com pelo menos 2 caracteres.
            </p>
          )}
        </div>

        {/* Input: Telefone / WhatsApp */}
        <div>
          <label
            htmlFor="lead-phone"
            className="block text-xs font-semibold uppercase tracking-wider text-foreground-muted mb-1.5"
          >
            Seu Telefone / WhatsApp <span className="text-primary">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-foreground-muted">
              <Phone className="h-4 w-4" />
            </div>
            <input
              id="lead-phone"
              type="tel"
              required
              placeholder="(21) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={() => setTouchedPhone(true)}
              className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-dim focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-mono transition-colors"
            />
          </div>
          {touchedPhone && !isPhoneValid && (
            <p className="mt-1 text-xs text-red-400">
              Informe um número de telefone válido com DDD (10 ou 11 dígitos).
            </p>
          )}
        </div>

        {/* Short LGPD Notice */}
        <div className="flex items-start gap-2 pt-1 text-[11px] text-foreground-dim leading-relaxed">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary/70 mt-0.5" />
          <span>
            Ao enviar, você será redirecionado ao WhatsApp de {siteConfig.broker.name} com seus dados preenchidos. Seus dados não são armazenados em servidor.
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            disabled={!isFormValid}
            className="w-full"
          >
            <MessageCircle className="h-5 w-5" />
            Continuar para o WhatsApp
          </Button>
        </div>
      </form>
    </Dialog>
  );
}
