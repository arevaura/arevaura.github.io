import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { EXPERIENCE_ITEMS } from "@/data/experience";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-b border-surface-border">
      <Container size="xl">
        <FadeIn direction="up">
          <SectionHeader
            tag="Trajectory"
            title="Experience & Hackathon Delivery"
            description="Proven track record of designing, building, and delivering software within high-stakes, fast-paced technical sprints."
          />
        </FadeIn>

        <div className="space-y-6 max-w-4xl">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <FadeIn key={item.id} direction="up" delay={idx * 0.1}>
              <Card className="border-surface-border bg-surface/50 hover:border-primary/40 transition-colors">
                <CardHeader className="p-6 pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary shrink-0" />
                      <span>{item.role}</span>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      {item.isCurrent && (
                        <Badge variant="success">Current</Badge>
                      )}
                      <span className="text-xs font-mono text-muted flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground flex items-center gap-2">
                    <span>{item.organization}</span>
                    <span className="text-muted">•</span>
                    <span className="text-xs font-mono text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-2 space-y-4">
                  <ul className="space-y-2 text-sm text-muted">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-2" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-surface-muted text-muted border border-surface-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
