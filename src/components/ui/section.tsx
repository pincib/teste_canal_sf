import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "surface" | "gradient";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

/**
 * Section component inspired by Awwwards Corporate & Promotional sites
 * Enforces generous vertical breathing room and unified typography hierarchy
 */
export function Section({
  variant = "default",
  containerSize = "default",
  id,
  className,
  children,
  ...props
}: SectionProps) {
  const variantClasses = {
    default: "bg-background",
    surface: "bg-surface/50 border-y border-border-subtle",
    gradient:
      "bg-gradient-to-b from-background via-surface/40 to-background border-y border-border-subtle/60",
  };

  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24 lg:py-28 relative overflow-hidden", variantClasses[variant], className)}
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
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
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
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-medium">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] font-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted">
          {description}
        </p>
      )}
    </div>
  );
}
