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

/**
 * WhatsAppFloat component with Motion spring physics and official Pinciara Gold (#FFBB00)
 * Fixed on bottom-right with luxury pulse indicator and high conversion affordance
 */
export function WhatsAppFloat({
  onClick,
  className,
  label = "Falar com corretor",
}: WhatsAppFloatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("fixed bottom-6 right-6 z-40 flex items-center gap-3", className)}
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/12 bg-[#222222]/95 px-3.5 py-1.5 text-xs font-semibold text-[#faf9f6] shadow-xl backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#FFBB00]" />
        {label}
      </span>

      {/* Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={onClick}
        aria-label={label}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#FFBB00] text-black shadow-[0_6px_24px_rgba(255,187,0,0.4)] hover:bg-[#ffc833] hover:shadow-[0_8px_30px_rgba(255,187,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] cursor-pointer"
      >
        <MessageCircle className="h-7 w-7 text-black transition-transform duration-200 group-hover:scale-105" />
      </motion.button>
    </motion.div>
  );
}
