"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "charcoal";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * Button component powered by Motion for React
 * Implements tactile spring micro-interactions:
 * whileHover={{ scale: 1.02, y: -1 }}
 * whileTap={{ scale: 0.98 }}
 * Uses official Pinciara Gold (#FFBB00) for primary & WhatsApp conversion
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-heading font-semibold transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none";

    const variantStyles = {
      // Signature Pinciara Gold (Pilar 1: Replaces green buttons with official gold)
      primary:
        "bg-primary text-black font-bold shadow-[0_4px_20px_rgba(255,187,0,0.25)] hover:bg-primary-hover hover:shadow-[0_6px_28px_rgba(255,187,0,0.4)]",
      whatsapp:
        "bg-primary text-black font-bold shadow-[0_4px_22px_rgba(255,187,0,0.28)] hover:bg-primary-hover hover:shadow-[0_6px_30px_rgba(255,187,0,0.45)] border border-primary-hover/40",
      secondary:
        "bg-charcoal text-foreground border border-charcoal-border hover:bg-charcoal-surface hover:border-primary/50",
      charcoal:
        "bg-charcoal text-foreground hover:bg-charcoal-surface border border-charcoal-border shadow-sm",
      outline:
        "border border-primary/60 text-primary bg-transparent hover:bg-primary/10 hover:border-primary shadow-sm",
      ghost:
        "text-foreground-muted hover:text-foreground hover:bg-charcoal-surface/60",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-12 px-7 text-base rounded-xl gap-2.5",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
