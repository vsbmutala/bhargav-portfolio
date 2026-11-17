import { projects } from "@/constants/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";
import Highlight from "@/components/ui/Highlight";
import { ArrowUpRight } from "@/components/ui/Icons";
import { cn } from "@/utils/cn";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          eyebrow="Selected Work"
          title={
            <>
              Projects with <span className="serif-accent">real</span> impact
            </>
          }
          description="Machine learning research and full-stack products that show how I think — model design, system design, and outcomes you can measure."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => {
            const hasLink = project.link && project.link !== "#";
            const featured = index === 0;
            return (
              <Reveal key={project.title} delay={index * 80} className={cn(featured && "lg:col-span-2")}>
                <Spotlight className="edge-highlight group relative h-full overflow-hidden rounded-3xl bg-surface">
                  <div className={cn("flex h-full flex-col p-8 md:p-10", featured && "lg:grid lg:grid-cols-12 lg:gap-12")}>
                    <div className={cn(featured && "lg:col-span-7")}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-subtle">
                          {String(index + 1).padStart(2, "0")} {featured && <span className="ml-2 text-accent">Featured</span>}
                        </span>
                        {hasLink && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title}`}
                            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-border-strong group-hover:text-foreground"
                          >
                            <ArrowUpRight />
                          </a>
                        )}
                      </div>
                      <h3 className={cn("mt-8 font-semibold tracking-[-0.025em] text-foreground", featured ? "text-3xl md:text-4xl" : "text-2xl")}>
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-[58ch] text-muted-foreground">{project.description}</p>
                    </div>

                    <div className={cn("mt-8 flex flex-1 flex-col justify-end", featured && "lg:col-span-5 lg:mt-0")}>
                      {project.impact && (
                        <blockquote className="border-l border-accent/60 pl-5 text-[15px] leading-relaxed text-muted-foreground">
                          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Impact</p>
                          <Highlight text={project.impact} />
                        </blockquote>
                      )}
                      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                        {project.tech.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
