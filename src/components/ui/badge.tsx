import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "accent" | "success";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium transition-colors",
        variant === "default" && "bg-primary/10 text-primary border border-primary/20",
        variant === "secondary" && "bg-surface-muted text-muted border border-surface-border",
        variant === "outline" && "border border-surface-border text-foreground",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/20",
        variant === "success" && "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
        className
      )}
      {...props}
    />
  );
}
