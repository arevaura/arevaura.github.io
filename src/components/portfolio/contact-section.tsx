import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animation/fade-in";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {/* GitHub Card */}
          <FadeIn direction="up" delay={0.05}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-primary/40 transition-colors flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Github className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">GitHub</CardTitle>
                <p className="text-xs text-muted font-mono">@arevaura</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4 leading-relaxed">
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

          {/* Devpost Card */}
          <FadeIn direction="up" delay={0.1}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-accent/40 transition-colors flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Devpost</CardTitle>
                <p className="text-xs text-muted font-mono">@arevaura</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  View hackathon project submissions, demos, and event achievements.
                </p>
                <Link
                  href="https://devpost.com/arevaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <span>View Devpost</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          {/* LinkedIn Card */}
          <FadeIn direction="up" delay={0.15}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-secondary/40 transition-colors flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  <Linkedin className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">LinkedIn</CardTitle>
                <p className="text-xs text-muted font-mono">Eva Jiang</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  Connect for professional networking, internships, and opportunities.
                </p>
                <Link
                  href="https://linkedin.com/in/evajiangvc"
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

          {/* Direct Email Card */}
          <FadeIn direction="up" delay={0.2}>
            <Card className="h-full border-surface-border bg-surface/60 hover:border-primary/40 transition-colors flex flex-col justify-between">
              <CardHeader className="p-6 pb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Direct Email</CardTitle>
                <p className="text-xs text-muted font-mono">Get in touch directly</p>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <p className="text-xs text-muted mb-4 leading-relaxed">
                  Have a question or role? Feel free to send a message anytime.
                </p>
                <Link href="mailto:evajiangvc+contact@gmail.com">
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
