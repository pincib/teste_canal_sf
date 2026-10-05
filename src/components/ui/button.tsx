"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "link" | "whatsapp";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

/**
 * Button component aligned with Thirdway & ERA Residence guidelines:
 * - Rectangular / minimal radius (rounded-none or 2px)
 * - Clear typographic hierarchy, comfortable padding
 * - Discreet, slow hover transitions without SaaS bounce
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
      "relative inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBB00] disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none rounded-[2px]";

    const variantStyles = {
      // Primary in vibrant brand gold (#FFBB00) - clean architectural matte styling without glow
      primary:
        "bg-[#FFBB00] text-[#121212] font-semibold hover:bg-[#FFC82C] active:bg-[#E6A800] border border-[#FFBB00]",
      gold:
        "bg-[#FFBB00] text-[#121212] font-semibold hover:bg-[#FFC82C] active:bg-[#E6A800] border border-[#FFBB00]",
      whatsapp:
        "bg-[#FFBB00] text-[#121212] font-semibold hover:bg-[#FFC82C] active:bg-[#E6A800] border border-[#FFBB00]",
      secondary:
        "bg-transparent text-[#FAF9F6] border border-white/30 hover:border-[#FFBB00] hover:text-[#FFBB00] hover:bg-[#FFBB00]/10",
      outline:
        "bg-transparent text-[#141414] border-2 border-[#141414] hover:bg-[#141414] hover:text-[#FAF9F6]",
      ghost:
        "text-inherit hover:text-[#FFBB00] hover:bg-white/5",
      link:
        "text-inherit hover:text-[#FFBB00] p-0 h-auto font-normal underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs tracking-wider uppercase gap-2 font-mono",
      md: "h-11 px-6 text-xs sm:text-sm tracking-wider uppercase gap-2.5 font-mono",
      lg: "h-13 px-8 text-sm tracking-wider uppercase gap-3 font-mono",
    };

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}
        transition={{ type: "spring", stiffness: 450, damping: 24 }}
        className={cn(baseStyles, variantStyles[variant], variant !== "link" ? sizeStyles[size] : "", className)}
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
