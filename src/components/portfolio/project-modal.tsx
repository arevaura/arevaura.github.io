"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Layers, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-surface-border bg-surface shadow-2xl z-10 flex flex-col"
        >
          {/* Top Banner Image */}
          <div className="relative aspect-[16/9] w-full bg-surface-muted border-b border-surface-border overflow-hidden">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
            <Button
              variant="secondary"
              size="icon"
              onClick={onClose}
              aria-label="Close project modal"
              className="absolute top-4 right-4 rounded-full bg-surface/80 backdrop-blur-md shadow-lg"
            >
              <X className="w-5 h-5" />
            </Button>
            <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
              <Badge variant="default" className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                {project.event}
              </Badge>
              <Badge variant="secondary" className="bg-surface/90 backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2
                id="modal-title"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
              >
                {project.title}
              </h2>
              <p className="text-sm font-mono text-muted mt-1">
                {project.subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-primary flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Architecture & Overview</span>
              </h3>
              <p className="text-base text-muted leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-primary flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Engineering Highlights</span>
              </h3>
              <ul className="space-y-2 text-sm text-muted">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-primary flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-muted text-foreground border border-surface-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-6 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
              <Link
                href={project.devpostUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md">
                  <span>View Official Devpost Submission</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close Details
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
