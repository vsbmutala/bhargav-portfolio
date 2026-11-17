import { achievements, education } from "@/constants/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Spotlight from "@/components/ui/Spotlight";

export default function Achievements() {
  return (
    <section id="recognition" className="px-6 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="05"
          eyebrow="Recognition & Education"
          title={
            <>
              Recognized for <span className="serif-accent">excellence</span>
            </>
          }
        />

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:row-span-3">
            <Spotlight className="edge-highlight relative h-full overflow-hidden rounded-3xl bg-surface p-8 md:p-10">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-accent/10 blur-3xl" />
              <p className="font-mono text-eyebrow uppercase text-subtle">Education</p>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-foreground md:text-3xl">{education.degree}</h3>
              <p className="mt-2 text-[15px] font-medium text-accent">{education.school}</p>
              <p className="mt-1 font-mono text-[13px] text-subtle">{education.period}</p>

              <div className="mt-10 flex items-baseline gap-3 border-t border-border pt-8">
                <span className="text-5xl font-semibold tracking-[-0.04em] text-foreground tabular-nums">4.0</span>
                <span className="text-sm text-muted-foreground">Cumulative GPA, out of 4.0</span>
              </div>

              <dl className="mt-8 space-y-6 text-[15px]">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Thesis</dt>
                  <dd className="mt-2 text-foreground/90">{education.thesis}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle">Coursework</dt>
                  <dd className="mt-2 text-muted-foreground">{education.coursework.join(" · ")}</dd>
                </div>
              </dl>
            </Spotlight>
          </Reveal>

          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="lg:col-span-7">
              <Spotlight className="edge-highlight h-full rounded-3xl bg-surface p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-title font-semibold text-foreground">{item.title}</h3>
                  <p className="shrink-0 font-mono text-[13px] text-subtle">{item.date}</p>
                </div>
                <p className="mt-1 text-[15px] font-medium text-accent">{item.organization}</p>
                <p className="mt-4 max-w-[60ch] text-[15px] text-muted-foreground">{item.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
