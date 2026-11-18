import { GraduationCap, MapPin, Sparkles, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { EDUCATION_DATA } from "@/data/education";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-surface-border">
      <Container size="xl">
        <FadeIn direction="up">
          <SectionHeader
            tag="About"
            title="Bridging Systems Engineering & Human Experience"
            description="Software engineer and UX developer driven by creating accessible, delightful, and resilient digital tools."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-8 rounded-2xl border border-surface-border bg-surface/50 backdrop-blur-sm space-y-4 text-base text-muted leading-relaxed">
                <p>
                  I am a computer science student at{" "}
                  <strong className="text-foreground font-semibold">
                    The University of British Columbia (UBC)
                  </strong>{" "}
                  in Vancouver, BC. My passion lies at the intersection of technical software engineering and thoughtful user experience design.
                </p>
                <p>
                  Whether engineering algorithmic recoloring engines for color-blind accessibility (
                  <span className="text-foreground font-medium">ColoRight</span>) or architecting conversational eldercare companions (
                  <span className="text-foreground font-medium">HeartTalk</span>), I believe the most impactful technology is deeply accessible, intuitive, and performant.
                </p>
                <p>
                  When I am not writing code, you will find me participating in hackathons, exploring novel interaction paradigms, and testing web ergonomics.
                </p>
              </div>
            </FadeIn>

            {/* Core Values */}
            <FadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-surface-border bg-surface/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">UX-Oriented</h4>
                  <p className="text-xs text-muted">
                    Prioritizing intuitive flows, accessible contrast, and ergonomic interaction.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-surface-border bg-surface/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Clean Architecture</h4>
                  <p className="text-xs text-muted">
                    Writing typed, modular, and maintainable software designed to scale smoothly.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-surface-border bg-surface/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">Vancouver & Remote</h4>
                  <p className="text-xs text-muted">
                    Based at UBC with strong distributed and collaborative hackathon experience.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Education & Academic Card (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.15}>
              <Card className="border-surface-border bg-surface/60">
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <Badge variant="outline">{EDUCATION_DATA.period}</Badge>
                  </div>
                  <CardTitle className="text-lg">
                    {EDUCATION_DATA.institution}
                  </CardTitle>
                  <p className="text-sm font-medium text-foreground">
                    {EDUCATION_DATA.degree}
                  </p>
                  <p className="text-xs font-mono text-muted flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{EDUCATION_DATA.location}</span>
                  </p>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4">
                  <p className="text-xs text-muted leading-relaxed">
                    {EDUCATION_DATA.description}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-surface-border/60">
                    <span className="text-xs font-mono text-foreground font-medium block">
                      Academic Focus Areas:
                    </span>
                    <ul className="space-y-1.5 text-xs text-muted">
                      {EDUCATION_DATA.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
