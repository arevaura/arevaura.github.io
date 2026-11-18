export interface Project {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  year: string;
  category: "Accessibility" | "UX & Web" | "HealthTech" | "Geospatial";
  description: string;
  keyFeatures: string[];
  technologies: string[];
  devpostUrl: string;
  githubUrl?: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SkillItem {
  name: string;
  level?: "Proficient" | "Familiar" | "Exploring";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}
