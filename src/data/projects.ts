import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "coloright",
    title: "ColoRight",
    subtitle: "Color Blindness Awareness & Choropleth Recoloring Engine",
    event: "cmd-f 2024",
    year: "2024",
    category: "Accessibility",
    description:
      "A smart accessibility platform built to dismantle misconceptions around color vision deficiencies. Features an interactive Ishihara color plate test and an algorithmic image-recoloring engine for data visualizations and choropleth maps.",
    keyFeatures: [
      "Algorithmic choropleth map recoloring for accessible data presentation",
      "Interactive Ishihara vision deficiency diagnostic quiz in JavaScript",
      "Educational chatbot integration providing real-time accessibility insights",
    ],
    technologies: ["JavaScript", "Python", "Flask", "Cohere API", "CSS3", "HTML5"],
    devpostUrl: "https://devpost.com/software/coloright",
    imageSrc: "/assets/projects/project_1.png",
    imageAlt: "ColoRight project preview showing accessibility dashboard and map visualization",
  },
  {
    id: "treck-teryx",
    title: "Treck'teryx",
    subtitle: "Tailored Outdoor Adventure & Trail Recommendation Platform",
    event: "youCode 2024",
    year: "2024",
    category: "UX & Web",
    description:
      "A tailored adventure recommendation service built to assist outdoor enthusiasts of all skill levels in discovering, planning, and preparing for hikes and backcountry excursions in the Pacific Northwest.",
    keyFeatures: [
      "Personalized trail matching based on hiker experience, elevation, and terrain",
      "Intuitive gear checklist generator and weather-responsive trip planning",
      "Accessible, responsive mobile-first UI for outdoor on-the-go exploration",
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Node.js"],
    devpostUrl: "https://devpost.com/software/trek-teryx",
    imageSrc: "/assets/projects/project_2.png",
    imageAlt: "Treck'teryx trail recommendation and outdoor gear planner interface",
  },
  {
    id: "hearttalk",
    title: "HeartTalk",
    subtitle: "Empathetic Senior Care Companion & Health Monitoring Suite",
    event: "nwHacks 2025",
    year: "2025",
    category: "HealthTech",
    description:
      "A senior care companion application merging compassionate AI conversational support with health monitoring. Keeps older adults socially engaged while tracking health metrics and giving remote caregivers continuous peace of mind.",
    keyFeatures: [
      "Conversational companion designed specifically for elder accessibility and comfort",
      "Health metric observation and non-intrusive remote caregiver alerting",
      "High-contrast, large-touch-target interface tailored for older adults",
    ],
    technologies: ["TypeScript", "React", "Node.js", "AI/LLM APIs", "Web Audio"],
    devpostUrl: "https://devpost.com/software/hearttalk",
    imageSrc: "/assets/projects/project_3.png",
    imageAlt: "HeartTalk senior care companion app dashboard and conversational interface",
  },
  {
    id: "mapme",
    title: "MapMe",
    subtitle: "Interactive Geospatial Memory Journal & Route Tracker",
    event: "cmd-f 2025",
    year: "2025",
    category: "Geospatial",
    description:
      "A location-based personal journal that connects memories with geographic journeys. Integrates real-time GPS tracking with customizable storytelling, enabling users to pin photos, reflections, and route milestones onto an interactive map.",
    keyFeatures: [
      "Interactive map canvas with route playback and milestone pins",
      "Rich media journaling linking photos and memories to exact geographic coordinates",
      "Private by default with exportable journey recaps",
    ],
    technologies: ["TypeScript", "React", "Mapbox / Leaflet", "Geolocation API", "Tailwind CSS"],
    devpostUrl: "https://devpost.com/software/mapme-jnvg53",
    imageSrc: "/assets/projects/project_4.png",
    imageAlt: "MapMe interactive geospatial memory journal with mapped route highlights",
  },
];
