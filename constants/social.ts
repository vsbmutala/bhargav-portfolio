export const socialLinks = [
  {
    name: "Email",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    icon: "email",
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN || "",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB || "",
    icon: "github",
  },
];
