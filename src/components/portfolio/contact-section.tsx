import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/fade-in";
import { SOCIAL_LINKS } from "@/data/navigation";

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <Container size="xl">
        <FadeIn direction="up">
          <SectionHeader
            tag="Contact"
            title="Let's Build Something Exceptional"
            description="I am actively looking for software engineering internships, frontend developer positions, and innovative project collaborations."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <FadeIn direction="up" delay={0.1}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-primary/40 transition-colors">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Github className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">GitHub</CardTitle>
                <p className="text-xs text-muted">@arevaura</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4">
                  Explore source code, active repositories, and open source development.
                </p>
                <Link
                  href="https://github.com/arevaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <span>Visit GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-primary/40 transition-colors">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <Linkedin className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">LinkedIn</CardTitle>
                <p className="text-xs text-muted">Eva Jiang</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4">
                  Connect for professional networking, internships, and career opportunities.
                </p>
                <Link
                  href="https://linkedin.com/in/arevaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-primary/40 transition-colors">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Direct Email</CardTitle>
                <p className="text-xs text-muted">Get in touch directly</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4">
                  Have a question or opportunity? Feel free to reach out anytime.
                </p>
                <Link href="mailto:eva@example.com">
                  <Button variant="primary" size="sm" className="w-full">
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
