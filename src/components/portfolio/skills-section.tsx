import { Code, Database, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { SKILL_CATEGORIES } from "@/data/skills";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animation/fade-in";

const CATEGORY_ICONS = [
  <Code key="frontend" className="w-5 h-5 text-primary" />,
  <Database key="backend" className="w-5 h-5 text-secondary" />,
  <Wrench key="tools" className="w-5 h-5 text-accent" />,
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-b border-surface-border bg-surface/10">
      <Container size="xl">
        <FadeIn direction="up">
          <SectionHeader
            tag="Skills & Tooling"
            title="Technical Arsenal & UX Capabilities"
            description="The technologies, languages, and frameworks I leverage to design and engineer production-grade web systems."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <FadeIn key={category.title} direction="up" delay={idx * 0.1}>
              <Card className="h-full border-surface-border bg-surface/60 flex flex-col justify-between">
                <CardHeader className="p-6 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center mb-3 border border-surface-border">
                    {CATEGORY_ICONS[idx % CATEGORY_ICONS.length]}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-xs">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={skill.level === "Proficient" ? "default" : "secondary"}
                        className="text-xs py-1 px-3"
                      >
                        {skill.name}
                      </Badge>
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
