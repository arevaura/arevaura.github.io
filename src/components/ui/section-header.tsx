import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-12",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
      {...props}
    >
      {tag && (
        <span className="inline-block text-xs font-mono uppercase tracking-widest text-primary font-semibold">
          {"//"} {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
