"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface WhatsAppFloatProps {
  onClick: () => void;
  className?: string;
  label?: string;
}

export function WhatsAppFloat({
  onClick,
  className,
  label = "Falar com corretor",
}: WhatsAppFloatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("fixed bottom-6 right-6 z-40 flex items-center gap-3", className)}
    >
      {/* Label Tooltip */}
      <span className="hidden sm:inline-flex items-center gap-2 border border-white/10 bg-[#171717]/95 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#FAF9F6] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FFBB00]" />
        {label}
      </span>

      {/* Floating Trigger Button — Prominent Brand Gold with Spring Interaction (Clean Matte) */}
      <motion.button
        type="button"
        onClick={onClick}
        aria-label={label}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="flex h-13 w-13 items-center justify-center bg-[#FFBB00] text-[#121212] hover:bg-[#FFC82C] active:bg-[#E6A800] border border-[#FFBB00] shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-colors cursor-pointer select-none rounded-[2px]"
      >
        <MessageCircle className="h-6 w-6 text-[#121212]" />
      </motion.button>
    </motion.div>
  );
}
