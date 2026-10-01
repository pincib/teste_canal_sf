"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppFloatProps {
  onClick: () => void;
  className?: string;
  label?: string;
}

/**
 * WhatsAppFloat component inspired by Awwwards conversion patterns & 21st.dev floating actions
 * Fixed on bottom-right with subtle pulse indicator and accessible button role
 */
export function WhatsAppFloat({
  onClick,
  className,
  label = "Falar com corretor",
}: WhatsAppFloatProps) {
  return (
    <div className={cn("fixed bottom-6 right-6 z-40 flex items-center gap-3", className)}>
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block rounded-xl border border-border bg-surface-elevated/95 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xl backdrop-blur-sm transition-all duration-200">
        {label}
      </span>

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-50" />

        <MessageCircle className="relative h-7 w-7 text-black transition-transform duration-200 group-hover:rotate-6" />
      </button>
    </div>
  );
}
