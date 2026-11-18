import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Compass, Layers, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";
import { Magnetic } from "@/components/animation/magnetic";
import { Floating } from "@/components/animation/floating";
import { TechMarquee } from "@/components/portfolio/tech-marquee";
import { AboutSection } from "@/components/portfolio/about-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 border-b border-surface-border overflow-hidden">
        {/* Subtle luminous ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <FadeIn direction="up">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="success">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available for Software Engineering Roles</span>
                  </Badge>
                  <Badge variant="secondary">UBC Computer Science</Badge>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                    Eva Jiang
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-mono font-normal text-muted mt-3">
                      Software Engineer & UX-Oriented Developer
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl text-muted leading-relaxed font-light max-w-2xl">
                    Computer science student at{" "}
                    <strong className="text-foreground font-medium">
                      The University of British Columbia
                    </strong>
                    . Building performant, accessible digital tools and human-centered software that solve real human challenges.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Magnetic strength={0.25}>
                    <Link href="#projects">
                      <Button variant="primary" size="lg" className="group">
                        <span>Explore Featured Projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <Link href="#contact">
                      <Button variant="outline" size="lg">
                        <span>Get in Touch</span>
                      </Button>
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.25}>
                    <Link
                      href="https://github.com/arevaura"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="lg" className="gap-2">
                        <span>GitHub (@arevaura)</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </FadeIn>
            </div>

            {/* Right Interactive Ambient Element (4 cols) */}
            <div className="hidden lg:flex lg:col-span-4 justify-center relative">
              <Floating duration={7} distance={16} rotation={3}>
                <div className="w-64 p-6 rounded-2xl border border-surface-border bg-surface/80 backdrop-blur-md shadow-2xl shadow-primary/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-muted tracking-wider">
                      Quick Status
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-foreground">
                      4 Hackathon Builds
                    </div>
                    <div className="text-xs text-muted">
                      ColoRight, Treck&apos;teryx, HeartTalk, MapMe
                    </div>
                  </div>
                  <div className="pt-2 border-t border-surface-border flex items-center justify-between text-xs font-mono text-muted">
                    <span>UBC B.Sc.</span>
                    <span className="text-primary">Vancouver, BC</span>
                  </div>
                </div>
              </Floating>
            </div>
          </div>
        </Container>
      </section>

      {/* Continuous Marquee */}
      <TechMarquee />

      {/* About Section */}
      <AboutSection />

      {/* Featured Projects Section (ColoRight, Treck'teryx, HeartTalk, MapMe) */}
      <ProjectsSection />

      {/* Technical Skills & Capabilities */}
      <SkillsSection />

      {/* Experience & Hackathons */}
      <ExperienceSection />

      {/* Contact & Connect */}
      <ContactSection />
    </main>
  );
}
