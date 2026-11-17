import { experiences } from "@/constants/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Highlight from "@/components/ui/Highlight";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          eyebrow="Experience"
          title={
            <>
              Where I&apos;ve <span className="serif-accent">shipped</span> work
            </>
          }
          description="From founding a product's architecture to publishing machine learning research — a track record of taking ownership and delivering measurable outcomes."
        />

        <ol className="border-t border-border">
          {experiences.map((exp, index) => (
            <li key={exp.title} className="border-b border-border">
              <Reveal delay={index * 60}>
                <article className="group grid gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-14">
                  <div className="self-start md:sticky md:top-28 md:col-span-4">
                    <p className="font-mono text-meta text-subtle">{exp.period}</p>
                    <p className="mt-2 text-meta text-muted-foreground">{exp.location}</p>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="text-title font-semibold text-foreground">{exp.title}</h3>
                    <p className="mt-1.5 text-body-sm font-medium text-accent">{exp.company}</p>
                    <p className="mt-5 max-w-[62ch] text-muted-foreground">{exp.description}</p>

                    <ul className="mt-6 space-y-3">
                      {exp.achievements.map((item) => (
                        <li key={item} className="flex gap-4 text-body text-muted-foreground">
                          <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-border-strong transition-all duration-500 group-hover:w-4 group-hover:bg-accent" />
                          <span className="max-w-[60ch]">
                            <Highlight text={item} />
                          </span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                      {exp.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border bg-tint/[0.02] px-3 py-1 font-mono text-tag text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
