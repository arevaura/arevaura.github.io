export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  iconName: "github" | "linkedin" | "mail" | "devpost";
}
