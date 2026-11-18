"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

// Register plugins once in client environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

export { gsap, ScrollTrigger, Draggable };

/**
 * Helper to run GSAP animations with proper cleanup using gsap.context
 * @param scope React ref or DOM element scoping the selectors
 * @param callback Animation definition callback receiving the context
 */
export function createGsapContext(
  scope: React.RefObject<HTMLElement | null> | HTMLElement,
  callback: (context: gsap.Context) => void
) {
  const target = "current" in scope ? scope.current : scope;
  if (!target) return () => {};

  const ctx = gsap.context(callback, target);
  return () => ctx.revert();
}
