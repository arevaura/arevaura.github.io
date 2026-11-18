import { NavItem, SocialLink } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/arevaura",
    iconName: "github",
  },
  {
    name: "Devpost",
    href: "https://devpost.com/arevaura",
    iconName: "devpost",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/evajiangvc",
    iconName: "linkedin",
  },
  {
    name: "Email",
    href: "mailto:evajiangvc+contact@gmail.com",
    iconName: "mail",
  },
];
