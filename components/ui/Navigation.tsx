"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { profile } from "@/constants/content";
import { Close, Menu } from "@/components/ui/Icons";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
  { name: "Work", href: "#work" },
  { name: "Research", href: "#research" },
  { name: "Recognition", href: "#recognition" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [overDark, setOverDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const probe = 40;
      setOverDark(
        [...document.querySelectorAll("[data-theme='dark']")].some((el) => {
          const r = el.getBoundingClientRect();
          return r.top <= probe && r.bottom >= probe;
        })
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    [...navItems.map((i) => i.href), "#contact"].forEach((href) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6", overDark && "theme-dark")}>
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled || isMobileMenuOpen
            ? "border border-border bg-background/70 shadow-[0_8px_32px_-16px_rgb(11_11_12/0.3)] backdrop-blur-xl"
            : "border border-transparent"
        )}
      >
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <span className="grid size-8 place-items-center rounded-full bg-foreground font-mono text-eyebrow font-semibold tracking-tight text-background transition-transform duration-500 group-hover:rotate-[-8deg]">
            {profile.initials}
          </span>
          <span className="hidden text-body-sm font-medium sm:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-meta font-medium transition-colors duration-300",
                  active === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active === item.href && (
                  <span aria-hidden className="absolute inset-0 -z-10 rounded-full bg-tint/[0.06]" />
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-meta font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            className="grid size-9 place-items-center rounded-full text-foreground hover:bg-tint/[0.06] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <Close width={18} height={18} /> : <Menu width={18} height={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/90 p-2 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {[...navItems, { name: "Contact", href: "#contact" }].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-body-sm font-medium text-muted-foreground transition-colors hover:bg-tint/[0.04] hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
