import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card family inspired by Awwwards Business/Corporate & Refero Design Systems
 * Implements refined dark glass surfaces, subtle edge lighting, and generous padding
 */
export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group relative rounded-[2px] border border-border bg-surface/90 backdrop-blur-sm transition-all duration-300 ease-out hover:border-border-gold/50 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-2 p-6 sm:p-7", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-foreground font-heading",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm sm:text-base text-foreground-muted leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-7 pt-0", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center p-6 sm:p-7 pt-0 border-t border-border-subtle mt-4",
        className
      )}
      {...props}
    />
  );
}
