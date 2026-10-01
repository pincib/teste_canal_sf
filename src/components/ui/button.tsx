import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

/**
 * Button component inspired by 21st.dev interactive UI components
 * Includes micro-interactions, hardware-accelerated transitions, and luminous gold glows
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
      "relative inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.985] cursor-pointer select-none";

    const variantStyles = {
      primary:
        "bg-primary text-black hover:bg-primary-hover shadow-[0_4px_20px_rgba(255,187,0,0.2)] hover:shadow-[0_6px_28px_rgba(255,187,0,0.35)] hover:-translate-y-0.5",
      secondary:
        "bg-surface-elevated text-foreground border border-border hover:bg-surface-hover hover:border-border-gold/50",
      outline:
        "border border-primary/50 text-primary bg-transparent hover:bg-primary/10 hover:border-primary",
      ghost:
        "text-foreground-muted hover:text-foreground hover:bg-surface-hover/80",
      whatsapp:
        "bg-[#25D366] text-black hover:bg-[#22bf5b] shadow-[0_4px_20px_rgba(37,211,102,0.22)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.38)] hover:-translate-y-0.5",
    };

    const sizeStyles = {
      sm: "h-9 px-4 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-7 text-base rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
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
      </button>
    );
  }
);

Button.displayName = "Button";
