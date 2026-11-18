"use client";

import * as React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animation/fade-in";

const CATEGORIES = ["All", "Accessibility", "UX & Web", "HealthTech", "Geospatial"] as const;
type Category = (typeof CATEGORIES)[number];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("All");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 border-b border-surface-border">
      <Container size="xl">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              tag="Creations"
              title="Featured Hackathon Projects"
              description="Real software applications built, designed, and shipped during 24–48 hour collaborative hackathon sprints."
              className="mb-0"
            />

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full text-xs font-mono"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
