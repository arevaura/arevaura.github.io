import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Compass,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/animation/fade-in";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 lg:py-36 border-b border-surface-border overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="success">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Opportunities</span>
              </Badge>
              <Badge variant="secondary">UBC Computer Science</Badge>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Eva Jiang
                <span className="block text-xl sm:text-2xl lg:text-3xl font-mono font-normal text-muted mt-2">
                  Software Engineer & UX-Oriented Developer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed font-light max-w-2xl">
                Student at{" "}
                <span className="text-foreground font-medium">
                  The University of British Columbia
                </span>
                . Crafting high-performance digital systems, intuitive user interfaces, and award-winning hackathon software.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="#projects">
                  <Button variant="primary" size="lg" className="group">
                    <span>Explore Creations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link
                  href="https://github.com/arevaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <span>GitHub Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Design System & Architecture Preview */}
      <section className="py-20 bg-surface/20 border-b border-surface-border">
        <Container size="xl">
          <FadeIn direction="up">
            <SectionHeader
              tag="Design System"
              title="Architecture & Component Primitives"
              description="A token-based design system built with CSS variables, Tailwind CSS, Motion, and GSAP — engineered for extreme responsiveness, accessibility, and future React Bits integration."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn direction="up" delay={0.05}>
              <Card interactive className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <CardTitle>Next.js 15 App Router</CardTitle>
                  <CardDescription>
                    Fully static export pipeline configured for zero-runtime hosting on GitHub Pages with strict TypeScript typing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Static Export</Badge>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <Card interactive className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-2">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <CardTitle>Coordinated Motion</CardTitle>
                  <CardDescription>
                    Dual-engine motion architecture: Motion for UI transitions and GSAP for timelines, physical drags, and marquees.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Reduced-Motion Safe</Badge>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <Card interactive className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-2">
                    <Layers className="w-5 h-5" />
                  </div>
                  <CardTitle>React Bits Ready</CardTitle>
                  <CardDescription>
                    Modular components and design tokens pre-configured to drop in React Bits interactive components without friction.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">Extensible Primitives</Badge>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <Card interactive className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <CardTitle>UBC & Hackathons</CardTitle>
                  <CardDescription>
                    Real engineering projects from cmd-f, nwHacks, and youCode preserved and staged for structured presentation in Batch 3.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">4 Featured Builds</Badge>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Anchor Staging for Next Batches */}
      <section id="about" className="py-20 border-b border-surface-border">
        <Container size="xl">
          <FadeIn direction="up">
            <SectionHeader
              tag="Profile"
              title="About Eva Jiang"
              description="Passionate about the convergence of systems engineering, frontend architecture, and delightful human interaction."
            />
          </FadeIn>
          <div className="p-8 rounded-2xl border border-surface-border bg-surface text-muted leading-relaxed max-w-3xl">
            <p>
              Undergraduate student at The University of British Columbia specializing in software development, human-computer interaction, and full-stack web applications. Content and comprehensive experience timeline will be fully populated in Batch 3.
            </p>
          </div>
        </Container>
      </section>

      <section id="projects" className="py-20 border-b border-surface-border">
        <Container size="xl">
          <FadeIn direction="up">
            <SectionHeader
              tag="Creations"
              title="Featured Hackathon Projects"
              description="A preview of the award-winning projects staged for interactive case study migration in Batch 3."
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["ColoRight (@cmd-f 2024)", "Treck'teryx (@youCode 2024)", "HeartTalk (@nwHacks 2025)", "MapMe (@cmd-f 2025)"].map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-surface-border bg-surface/50 font-mono text-sm text-foreground flex items-center justify-between"
              >
                <span>{proj}</span>
                <Compass className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-20">
        <Container size="xl">
          <FadeIn direction="up">
            <SectionHeader
              tag="Get In Touch"
              title="Let's Build Something Exceptional"
              description="Open for software engineering internships, frontend developer roles, and collaborative projects."
            />
          </FadeIn>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/arevaura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/arevaura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
