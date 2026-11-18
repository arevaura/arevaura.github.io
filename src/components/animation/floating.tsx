"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface FloatingProps {
  children: React.ReactNode;
  duration?: number;
  distance?: number;
  rotation?: number;
  delay?: number;
  className?: string;
}

export function Floating({
  children,
  duration = 6,
  distance = 12,
  rotation = 2,
  delay = 0,
  className,
}: FloatingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
        rotate: [-rotation, rotation, -rotation],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
