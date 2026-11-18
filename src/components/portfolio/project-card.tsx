import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-surface-border bg-surface hover:border-primary/40 transition-all duration-300 group">
      {/* Visual Header / Image Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-muted border-b border-surface-border/60">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <Badge variant="default" className="backdrop-blur-md bg-background/80">
            {project.event}
          </Badge>
          <Badge variant="secondary" className="backdrop-blur-md bg-surface/80">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="p-6 pb-3 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <Link
            href={project.devpostUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on Devpost`}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-xs font-mono text-muted">{project.subtitle}</p>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-sm text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 pt-2">
          <span className="text-xs font-mono text-foreground/80 font-medium block">
            Key Highlights:
          </span>
          <ul className="space-y-1 text-xs text-muted">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      {/* Tech Stack & Links */}
      <CardFooter className="p-6 pt-4 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-3 bg-surface/50">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-muted text-muted border border-surface-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.devpostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline ml-auto"
        >
          <span>Devpost Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
