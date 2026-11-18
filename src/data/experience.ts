import { ExperienceItem } from "@/types/portfolio";

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "hackathons",
    role: "Full-Stack & UX Developer (Hackathons)",
    organization: "UBC & Pacific Northwest Hackathons",
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
    id: "open-source",
    role: "Software Developer & Open Source Contributor",
    organization: "Independent & Community Projects",
    location: "Vancouver, BC",
    period: "2023 – Present",
    description: [
      "Building and maintaining modern web applications, interactive experiments, and open-source personal software architectures.",
      "Iterating on UX ergonomics, accessibility compliance, and performance profiling across modern JavaScript/TypeScript runtimes.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "GitHub Actions"],
    isCurrent: true,
  },
];
