import { capabilities } from "@/constants/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function Skills() {
  return (
    <section id="expertise" className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          eyebrow="Expertise"
          title={
            <>
              From models to <span className="serif-accent">interfaces</span>
            </>
          }
          description="Applied machine learning and data science on one side, production-grade full-stack engineering on the other — and the rare ability to ship both."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <Spotlight className="edge-highlight h-full rounded-3xl bg-surface p-8 md:p-10">
                <p className="font-mono text-tag text-subtle">0{index + 1}</p>
                <h3 className="mt-6 text-title font-semibold text-foreground">{group.title}</h3>
                <p className="mt-2 max-w-[44ch] text-body-sm text-muted-foreground">{group.description}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-meta font-medium text-foreground/90"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
