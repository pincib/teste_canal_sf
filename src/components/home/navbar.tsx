"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  onContactClick: () => void;
}

/**
 * Navbar component inspired by Awwwards Corporate header architectures
 * Adheres strictly to Hero Discipline: max height <= 72px, single desktop line, blur backdrop
 */
export function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "A Região", href: "#regiao" },
    { label: "Imóveis Disponíveis", href: "#imoveis" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Dúvidas Frequentes", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Pinciara Imóveis Exclusivos - Página Inicial"
          >
            <div className="relative h-9 w-40 sm:h-10 sm:w-44 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="/images/logo-pinciara.svg"
                alt="Pinciara Imóveis Exclusivos"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide uppercase text-foreground-muted hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onContactClick}
              className="text-xs uppercase tracking-wider"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Falar com Luiz Pinciara</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-foreground-muted hover:text-foreground focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 border-t border-border bg-surface-elevated/95 backdrop-blur-xl rounded-2xl p-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-foreground hover:text-primary py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-border">
              <Button
                variant="whatsapp"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-xs"
              >
                <Phone className="h-4 w-4" />
                Falar com Luiz Pinciara ({siteConfig.broker.phoneDisplay})
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
