"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
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
    { num: "01", label: "Ativos Comerciais", href: "/#imoveis" },
    { num: "02", label: "Região", href: "/#regiao" },
    { num: "03", label: "Consultoria", href: "/#diferenciais" },
    { num: "04", label: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#141414]/95 backdrop-blur-md border-b border-white/10 py-3.5"
          : "bg-[#141414]/80 backdrop-blur-sm py-4 sm:py-5 border-b border-white/5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-11">
          {/* Logo Pinciara */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Pinciara Imóveis Exclusivos"
          >
            <div className="relative h-8 w-36 sm:h-9 sm:w-44 transition-opacity duration-200 group-hover:opacity-90">
              <Image
                src="/images/logo-pinciara.svg"
                alt="Pinciara Imóveis Exclusivos"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links — Thirdway Editorial Style */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C7C4BC] hover:text-[#FAF9F6] transition-colors py-1 font-mono"
              >
                <span className="text-[#FFBB00] text-[10px] opacity-75 group-hover:opacity-100 transition-opacity">
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Action — Clean & Controlled */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={onContactClick}
              className="text-[11px] font-mono tracking-widest uppercase"
            >
              <span>Falar com Luiz Pinciara</span>
              <ArrowUpRight className="h-3.5 w-3.5 ml-1 text-black/70" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#C7C4BC] hover:text-[#FAF9F6] focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown — Minimalist Architectural Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-5 pb-6 border-t border-white/10 bg-[#171717] px-5 space-y-5">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#C7C4BC] hover:text-[#FAF9F6] py-2 border-b border-white/5 transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-[#FFBB00]">{link.num}</span>
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-xs font-mono"
              >
                <Phone className="h-3.5 w-3.5 mr-2" />
                Falar com Corretor ({siteConfig.broker.phoneDisplay})
              </Button>
            </div>
          </div>
        )}
      </Container>
    </motion.header>
  );
}
