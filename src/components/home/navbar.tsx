"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const navLinks = [
    { label: "A Região", href: "#regiao" },
    { label: "5 Imóveis", href: "#imoveis" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#222222]/95 backdrop-blur-md border-b border-[#444444] shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 border-b border-white/5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-12">
          {/* Logo Pinciara */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Pinciara Imóveis Exclusivos"
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
                className="text-xs font-semibold tracking-wider uppercase text-foreground-muted hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="whatsapp"
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
              className="rounded-lg p-2 text-foreground-muted hover:text-foreground focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 border-t border-[#444444] bg-[#222222]/98 backdrop-blur-2xl rounded-2xl p-5 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-[#444444]">
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
    </motion.header>
  );
}
