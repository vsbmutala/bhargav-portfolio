import Image from "next/image";
import { affiliations, profile, stats } from "@/constants/content";
import { ArrowRight, MapPin } from "@/components/ui/Icons";

const enter = (delay: number) => ({ animationDelay: `${delay}ms` });

export default function Hero() {
  return (
    <section
      id="top"
      data-theme="dark"
      className="theme-dark relative overflow-hidden bg-background px-6 pt-36 pb-20 md:px-8 md:pt-44 md:pb-28"
    >
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="enter mb-10" style={enter(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-tint/[0.03] py-1.5 pl-3 pr-4 text-meta font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="status-ping absolute inline-flex size-full rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                Available for new opportunities
              </span>
            </div>

            <h1 className="enter text-display-1 font-semibold text-foreground" style={enter(80)}>
              {profile.name.split(" ")[0]}
              <br />
              <span className="text-muted-foreground/90">{profile.name.split(" ")[1]}</span>
            </h1>

            <p className="enter mt-8 max-w-[38ch] text-lead text-muted-foreground" style={enter(180)}>
              Software engineer building{" "}
              <span className="serif-accent text-[1.12em] leading-none text-foreground">intelligent</span> products —
              from <span className="text-foreground">deep learning &amp; NLP models</span>{" "}
              to the full-stack systems that put them in users&apos; hands.
            </p>

            <div className="enter mt-10 flex flex-wrap items-center gap-3" style={enter(280)}>
              <a
                href="#work"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground pl-6 pr-5 text-body-sm font-medium text-background transition-all duration-300 hover:gap-3 hover:shadow-[0_0_0_4px_rgb(255_255_255/0.08)]"
              >
                View selected work
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-border-strong px-6 text-body-sm font-medium text-foreground transition-colors duration-300 hover:bg-tint/[0.05]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="enter lg:col-span-5" style={enter(220)}>
            <figure className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
              <div aria-hidden className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-surface">
                <Image
                  src="/images/profile.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover object-[42%_center]"
                  priority
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-background/60 p-4 backdrop-blur-xl">
                  <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-subtle">Currently</p>
                  <p className="mt-1.5 text-body-sm font-medium leading-snug text-foreground">
                    {profile.current.title} at {profile.current.company}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-meta text-muted-foreground">
                    <MapPin width={13} height={13} />
                    {profile.location}
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>

        <dl
          className="enter mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-28 md:grid-cols-4"
          style={enter(380)}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end bg-background/95 p-6 md:p-8">
              <dt className="mt-3 text-meta text-muted-foreground">{stat.label}</dt>
              <dd className="text-stat font-semibold text-foreground tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="enter mt-12 flex flex-col gap-5 md:flex-row md:items-center md:gap-10" style={enter(460)}>
          <p className="shrink-0 font-mono text-eyebrow uppercase text-subtle">Experience across</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {affiliations.map((name) => (
              <li key={name} className="text-body-sm font-medium text-muted-foreground/80">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
