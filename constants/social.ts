export const email = process.env.NEXT_PUBLIC_EMAIL || "bhargavmutala2002@gmail.com";

export const socialLinks = [
  {
    name: "Email",
    href: `mailto:${email}`,
    icon: "email",
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/bhargavmutala/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/vsbmutala",
    icon: "github",
  },
] as const;
