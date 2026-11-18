import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "hackathons",
    role: "Full-Stack & UX Developer (Hackathons)",
    organization: "UBC Hackathons",
    location: "Vancouver, BC",
    period: "2024 – Present",
    description: [
      "Designed and developed end-to-end full-stack web applications within intensive 24–48 hour collaborative hackathon sprints.",
      "Engineered award-winning and published accessibility solutions (ColoRight at cmd-f 2024) and health monitoring companions (HeartTalk at nwHacks 2025).",
      "Led design systems, UX workflows, and responsive frontend architectures while collaborating tightly with multidisciplinary teams.",
    ],
    technologies: ["React", "TypeScript", "Python", "Tailwind CSS", "REST APIs", "Git"],
    isCurrent: true,
  },
  {
    id: "independent-projects",
    role: "Software Developer (Independent Projects)",
    organization: "Independent Development",
    location: "Vancouver, BC",
    period: "2026 – Present",
    description: [
      "Architecting and developing full-stack web applications and interactive software, including smart home automation dashboards and animal shelter management systems.",
      "Designing responsive, human-centered user interfaces focused on clear data workflows, component ergonomics, and accessible web standards.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "GitHub Actions"],
    isCurrent: true,
  },
];
