import { SkillCategory } from "@/types/portfolio";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & UX Engineering",
    description: "Building responsive, accessible, high-performance interfaces and design systems.",
    skills: [
      { name: "React / Next.js", level: "Proficient" },
      { name: "TypeScript / JavaScript", level: "Proficient" },
      { name: "Tailwind CSS & CSS Modules", level: "Proficient" },
      { name: "HTML5 & Web Accessibility (WCAG)", level: "Proficient" },
      { name: "Framer Motion & GSAP", level: "Familiar" },
      { name: "UI Prototyping & Figma", level: "Proficient" },
    ],
  },
  {
    title: "Systems & Backend",
    description: "Developing robust data pipelines, REST APIs, and algorithmic logic.",
    skills: [
      { name: "Python & Flask", level: "Proficient" },
      { name: "Node.js & Express", level: "Familiar" },
      { name: "Java & C/C++", level: "Familiar" },
      { name: "RESTful API Integration", level: "Proficient" },
      { name: "Relational & NoSQL Databases", level: "Familiar" },
      { name: "AI / LLM API Orchestration", level: "Familiar" },
    ],
  },
  {
    title: "Workflow & Developer Tools",
    description: "Modern developer environment, version control, and production practices.",
    skills: [
      { name: "Git & GitHub Collaboration", level: "Proficient" },
      { name: "GitHub Actions & CI/CD", level: "Familiar" },
      { name: "VS Code & Debugging Tooling", level: "Proficient" },
      { name: "Performance Optimization & SEO", level: "Proficient" },
      { name: "User Research & Usability Testing", level: "Proficient" },
    ],
  },
];
