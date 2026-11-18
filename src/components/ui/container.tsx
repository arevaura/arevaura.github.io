import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
          size === "sm" && "max-w-3xl",
          size === "md" && "max-w-5xl",
          size === "lg" && "max-w-6xl",
          size === "xl" && "max-w-7xl",
          size === "full" && "max-w-none",
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";
