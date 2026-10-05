import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "light" | "dark-deep";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

/**
 * Section component with alternating architectural backgrounds:
 * - dark (#141414): Architectural deep black/charcoal with light text and gold accents
 * - light (#FAF9F6): Warm alabaster off-white with dark charcoal text
 * - dark-deep (#101010): Hero / CTA / Footer surface
 */
export function Section({
  variant = "dark",
  containerSize = "wide",
  id,
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    dark: "bg-[#141414] text-[#FAF9F6] border-y border-white/5",
    light: "bg-[#FAF9F6] text-[#141414] border-y border-black/5",
    "dark-deep": "bg-[#101010] text-[#FAF9F6] border-y border-white/5",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-14 sm:py-18 lg:py-22 relative overflow-hidden transition-colors duration-300",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionNumber?: string;
  category?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}

export function SectionHeader({
  sectionNumber,
  category,
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
        "mb-8 sm:mb-12",
        align === "center" ? "text-center mx-auto max-w-4xl" : "max-w-4xl",
        className
      )}
      {...props}
    >
      {(category || sectionNumber) && (
        <div className="mb-4 sm:mb-6 flex items-center gap-3">
          {sectionNumber && (
            <span
              className={cn(
                "font-mono text-xs font-semibold tracking-wider",
                isLight ? "text-[#FFBB00]" : "text-[#FFBB00]"
              )}
            >
              {sectionNumber}
            </span>
          )}
          {sectionNumber && category && (
            <span className={cn("text-xs", isLight ? "text-black/20" : "text-white/20")}>
              —
            </span>
          )}
          {category && (
            <span
              className={cn(
                "font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em]",
                isLight ? "text-[#66635d]" : "text-[#88857E]"
              )}
            >
              {category}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.03em] leading-[1.12] font-heading",
          isLight ? "text-[#141414]" : "text-[#FAF9F6]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl font-light",
            isLight ? "text-[#66635d]" : "text-[#C7C4BC]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
