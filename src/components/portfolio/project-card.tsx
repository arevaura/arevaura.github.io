import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Eye } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { trackProjectView } from "@/lib/analytics";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <Card
      onClick={() => {
        trackProjectView(project.title, project.category);
        onSelect?.(project);
      }}
      className="flex flex-col h-full overflow-hidden border-surface-border bg-surface hover:border-primary/50 transition-all duration-300 group cursor-pointer"
    >
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

        {/* Hover inspect overlay badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/40 backdrop-blur-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/90 text-foreground text-xs font-mono font-medium shadow-lg border border-surface-border">
            <Eye className="w-3.5 h-3.5 text-primary" />
            <span>Click to Inspect</span>
          </span>
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
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title} on Devpost`}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-xs font-mono text-muted">{project.subtitle}</p>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 pt-2">
          <span className="text-xs font-mono text-foreground/80 font-medium block">
            Key Highlights:
          </span>
          <ul className="space-y-1 text-xs text-muted">
            {project.keyFeatures.slice(0, 2).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      {/* Tech Stack & Links */}
      <CardFooter className="p-6 pt-4 border-t border-surface-border/60 flex flex-wrap items-center justify-between gap-3 bg-surface/50">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-muted text-muted border border-surface-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono text-muted self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <span className="text-xs font-medium text-primary inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform ml-auto">
          <span>Inspect Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </CardFooter>
    </Card>
  );
}
