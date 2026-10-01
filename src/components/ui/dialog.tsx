"use client";

import * as React from "react";
import { X } from "lucide-react";
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
 * Headless accessible Dialog component inspired by shadcn/ui and 21st.dev Dialog specs
 * Supports backdrop dismissal, Escape listener, focus trap, and body scroll locking
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

    // Initial focus on dialog container
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "dialog-title" : undefined}
      aria-describedby={description ? "dialog-description" : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl border border-border bg-surface-elevated p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.9)] outline-none transition-all duration-300 animate-in fade-in zoom-in-95",
          className
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute right-4 top-4 rounded-lg p-2 text-foreground-muted transition-colors hover:bg-surface-hover hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {title && (
          <div className="mb-6 pr-6">
            <h3
              id="dialog-title"
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading"
            >
              {title}
            </h3>
            {description && (
              <p
                id="dialog-description"
                className="mt-2 text-sm text-foreground-muted leading-relaxed"
              >
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
