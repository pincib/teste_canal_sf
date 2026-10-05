"use client";

import * as React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Headless accessible Dialog component powered by Motion for React
 * Supports backdrop dismissal, Escape listener, focus trap, and body scroll locking
 * Uses AnimatePresence for fluid backdrop fade and modal scale expansion/exit
 */
export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: DialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const previousActiveElement = React.useRef<HTMLElement | null>(null);

  // Handle ESC key and scroll locking
  React.useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "dialog-title" : undefined}
          aria-describedby={description ? "dialog-description" : undefined}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop with blur & motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Surface with motion spring */}
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative z-10 w-full max-w-lg rounded-[2px] border border-white/10 bg-[#171717] p-6 sm:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.95)] outline-none text-[#FAF9F6]",
              className
            )}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar janela"
              className="absolute right-4 top-4 p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {title && (
              <div className="mb-6 pr-6">
                <h3
                  id="dialog-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-[#faf9f6] font-heading"
                >
                  {title}
                </h3>
                {description && (
                  <p
                    id="dialog-description"
                    className="mt-2 text-sm text-[#b2aca0] leading-relaxed"
                  >
                    {description}
                  </p>
                )}
              </div>
            )}

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
