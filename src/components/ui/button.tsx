import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          // Variants
          variant === "primary" &&
            "bg-foreground text-background hover:opacity-90 shadow-sm",
          variant === "secondary" &&
            "bg-surface text-foreground border border-surface-border hover:bg-surface-muted",
          variant === "outline" &&
            "border border-surface-border text-foreground hover:bg-surface-muted hover:border-muted",
          variant === "ghost" &&
            "text-muted hover:text-foreground hover:bg-surface-muted",
          variant === "link" &&
            "text-primary underline-offset-4 hover:underline p-0 h-auto",
          // Sizes
          size === "sm" && "h-8 px-3 text-xs rounded-md gap-1.5",
          size === "md" && "h-10 px-4 text-sm rounded-lg gap-2",
          size === "lg" && "h-12 px-6 text-base rounded-xl gap-2.5",
          size === "icon" && "h-10 w-10 rounded-lg p-0",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
