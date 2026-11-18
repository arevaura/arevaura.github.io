import Link from "next/link";
import { ArrowUpRight, Code2, Compass, Layers, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto w-full py-24">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-surface w-fit text-xs font-mono text-muted mb-8 tracking-wide">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Available for Software Engineering & UX Roles</span>
      </div>

      {/* Main Title & Bio */}
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
          Eva Jiang
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted mt-2 font-mono">
            @arevaura
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted leading-relaxed font-light">
          Software Engineer & UX-oriented developer based at{" "}
          <span className="text-foreground font-medium">The University of British Columbia</span>.
          Building responsive, performant, and memorable digital experiences at the intersection of robust systems engineering and human-centered design.
        </p>

        {/* Foundation Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="https://github.com/arevaura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href="#foundation-status"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-border bg-surface hover:bg-surface-muted transition-colors text-foreground font-medium"
          >
            <span>Architecture Status</span>
          </a>
        </div>
      </div>

      {/* Modernization Foundation Overview */}
      <section id="foundation-status" className="mt-24 pt-12 border-t border-surface-border">
        <h2 className="text-xs uppercase font-mono tracking-widest text-muted mb-8">
          Next.js Foundation & Architecture Overview
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-surface-border bg-surface/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Next.js App Router</h3>
            <p className="text-xs text-muted leading-relaxed">
              Static export engine configured for GitHub Pages with strict TypeScript typing.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-surface-border bg-surface/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Motion & GSAP</h3>
            <p className="text-xs text-muted leading-relaxed">
              Dual-engine motion architecture for declarative UI and choreographed physics.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-surface-border bg-surface/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">React Bits Ready</h3>
            <p className="text-xs text-muted leading-relaxed">
              Tailwind CSS tokens, clean utility aliases, and modular component slots in place.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-surface-border bg-surface/50 backdrop-blur-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">Preserved Hackathons</h3>
            <p className="text-xs text-muted leading-relaxed">
              ColoRight, Treck&apos;teryx, HeartTalk, and MapMe assets staged for migration.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
