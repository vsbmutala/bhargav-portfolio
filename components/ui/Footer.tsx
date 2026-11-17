import { profile } from "@/constants/content";
import { ArrowUp } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-border pt-10 text-sm text-subtle md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.legalName}. Designed &amp; engineered by hand.
        </p>
        <div className="flex items-center gap-6">
          <p className="font-mono text-xs">Next.js · TypeScript · Tailwind · Geist</p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top <ArrowUp width={14} height={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
