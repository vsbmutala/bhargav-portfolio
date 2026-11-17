import { publications, researchFocus } from "@/constants/content";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";

export default function Research() {
  return (
    <section id="research" className="px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          eyebrow="AI Research"
          title={
            <>
              Published, <span className="serif-accent">peer-reviewed</span>
            </>
          }
          description="My research investigates how speech, language and machine learning can support early detection of neurodegenerative disease — combining deep learning, language embeddings and synthetic data for scalable cognitive screening."
        />

        <Reveal className="mb-12">
          <ul className="flex flex-wrap gap-2" aria-label="Research areas">
            {researchFocus.map((area) => (
              <li key={area} className="rounded-full border border-border px-3.5 py-1.5 text-meta font-medium text-muted-foreground">
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        <ol className="border-t border-border">
          {publications.map((pub, index) => (
            <li key={pub.doi} className="border-b border-border">
              <Reveal delay={index * 80}>
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group -mx-4 grid gap-6 rounded-2xl px-4 py-10 transition-colors duration-500 hover:bg-tint/[0.02] md:grid-cols-12 md:gap-10"
                >
                  <div className="md:col-span-3">
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-tag font-medium text-accent">
                      {pub.venue}
                    </span>
                    {pub.location && <p className="mt-3 text-meta text-muted-foreground">{pub.location}</p>}
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-title font-medium text-foreground transition-colors">
                      {pub.title}
                    </h3>
                    <p className="mt-4 max-w-[62ch] text-body text-muted-foreground">{pub.summary}</p>
                    <p className="mt-5 font-mono text-tag text-subtle">DOI {pub.doi}</p>
                  </div>
                  <div className="hidden md:col-span-1 md:flex md:justify-end">
                    <span className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-accent/50 group-hover:text-accent">
                      <ArrowUpRight />
                    </span>
                  </div>
                  <span className="sr-only">(opens IEEE Xplore in a new tab)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
