import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "charcoal" | "alabaster" | "charcoal-dark";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

/**
 * Section component with alternating luxury backgrounds:
 * - charcoal (#333333): Deep warm charcoal with light text and gold accents
 * - alabaster (#FAF9F6): Warm off-white with dark charcoal text and gold accents
 * - charcoal-dark (#222222): Deep contrast footer/hero surface
 */
export function Section({
  variant = "charcoal",
  containerSize = "default",
  id,
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    charcoal: "bg-[#333333] text-[#FAF9F6] border-y border-[#444444]/60",
    alabaster: "bg-[#FAF9F6] text-[#1a1a1a] border-y border-[#e6e3da]",
    "charcoal-dark": "bg-[#222222] text-[#FAF9F6] border-y border-[#3a3a3a]",
  };

  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28 relative overflow-hidden transition-colors duration-300", variantClasses[variant], className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  theme = "dark",
  className,
  ...props
}: SectionHeaderProps) {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
      {...props}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span
            className={cn(
              "font-mono text-xs uppercase tracking-[0.2em] font-semibold",
              isLight ? "text-primary-dark" : "text-primary"
            )}
          >
            {badge}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] font-heading",
          isLight ? "text-[#1a1a1a]" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isLight ? "text-[#555555]" : "text-foreground-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
