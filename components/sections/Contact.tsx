import { email, socialLinks } from "@/constants/social";
import Reveal from "@/components/ui/Reveal";
import CopyEmail from "@/components/ui/CopyEmail";
import { ArrowUpRight, GitHub, LinkedIn, Mail } from "@/components/ui/Icons";

const icons = { email: Mail, linkedin: LinkedIn, github: GitHub };

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="edge-highlight relative overflow-hidden rounded-[2rem] bg-surface px-6 py-20 text-center md:px-16 md:py-28">
            <div aria-hidden className="hero-glow pointer-events-none absolute inset-0 opacity-80" />
            <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-60" />

            <div className="relative">
              <p className="flex items-center justify-center gap-3 font-mono text-eyebrow uppercase text-subtle">
                <span className="text-accent">06</span>
                <span aria-hidden className="h-px w-8 bg-border-strong" />
                Contact
              </p>
              <h2 className="mx-auto mt-8 max-w-[16ch] text-display-2 font-semibold text-foreground md:text-[4rem]">
                Let&apos;s build something <span className="serif-accent">remarkable</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-[52ch] text-lg text-muted-foreground">
                Open to AI/ML engineering, applied data science and full-stack roles. If you&apos;re building something
                ambitious, I&apos;d love to hear about it.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${email}`}
                  className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground pl-6 pr-5 text-[15px] font-medium text-background transition-all duration-300 hover:gap-3 hover:shadow-[0_0_0_4px_rgb(255_255_255/0.08)]"
                >
                  Start a conversation
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <CopyEmail />
              </div>

              <ul className="mt-12 flex items-center justify-center gap-2">
                {socialLinks.map((link) => {
                  const Icon = icons[link.icon];
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        aria-label={link.name}
                        className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground"
                      >
                        <Icon width={17} height={17} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
