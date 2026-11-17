export interface Project {
  title: string;
  description: string;
  impact?: string;
  tech: string[];
  link: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
