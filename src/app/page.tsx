import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";
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
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container size="xl" className="relative z-10">
          <FadeIn direction="up">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="success">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Software Engineering Roles</span>
              </Badge>
              <Badge variant="secondary">UBC Computer Science</Badge>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Eva Jiang
                <span className="block text-xl sm:text-2xl lg:text-3xl font-mono font-normal text-muted mt-3">
                  Software Engineer & UX-Oriented Developer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted leading-relaxed font-light max-w-3xl">
                Computer science student at{" "}
                <strong className="text-foreground font-medium">
                  The University of British Columbia
                </strong>
                . Building performant, accessible digital tools and human-centered software that solve real human challenges.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href="#projects">
                  <Button variant="primary" size="lg" className="group">
                    <span>Explore Featured Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" size="lg">
                    <span>Get in Touch</span>
                  </Button>
                </Link>
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
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

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
