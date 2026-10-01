import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "outline" | "surface" | "accent";
}

/**
 * Badge component inspired by Refero Styles DESIGN.md standards
 * Clean, legible status and property feature indicators
 */
export function Badge({
  className,
  variant = "gold",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-primary/10 text-primary border border-primary/25",
    outline: "bg-transparent text-foreground-muted border border-border",
    surface: "bg-surface-elevated text-foreground border border-border-subtle",
    accent: "bg-primary text-black font-semibold shadow-[0_2px_10px_rgba(255,187,0,0.25)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide font-sans select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
