import { Marquee } from "@/components/animation/marquee";
import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "TypeScript",
  "Next.js 15",
  "cmd-f 2024 Winner",
  "React 19",
  "Tailwind CSS",
  "Python & Flask",
  "nwHacks 2025",
  "GSAP & Motion",
  "Human-Centered UX",
  "youCode 2024",
  "Accessible Design (WCAG)",
  "cmd-f 2025",
  "UBC Computer Science",
  "REST APIs",
];

export function TechMarquee() {
  return (
    <div className="py-6 border-y border-surface-border bg-surface/30 backdrop-blur-sm overflow-hidden select-none">
      <Marquee speed={32} pauseOnHover>
        {MARQUEE_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-sm font-mono text-muted hover:text-foreground transition-colors shrink-0 px-2"
          >
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 text-primary/60 shrink-0" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
