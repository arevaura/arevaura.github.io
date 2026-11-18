import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SOCIAL_LINKS } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-surface-border bg-surface/30 mt-auto">
      <Container size="xl" className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-lg font-bold font-mono tracking-tight text-foreground"
            >
              evaura
            </Link>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Software Engineer & UX developer focused on interactive, accessible, and high-performance digital systems.
            </p>
            <div className="text-xs text-muted font-mono">
              The University of British Columbia (UBC)
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/#about" className="hover:text-foreground transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-foreground transition-colors">
                  Hackathons & Projects
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Connections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {currentYear} Eva Jiang. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Static GitHub Pages Deployment</span>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
