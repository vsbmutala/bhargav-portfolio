import Reveal from "@/components/ui/Reveal";

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl md:mb-20">
      <p className="mb-6 flex items-center gap-3 font-mono text-eyebrow uppercase text-subtle">
        <span className="text-accent">{index}</span>
        <span aria-hidden className="h-px w-8 bg-border-strong" />
        {eyebrow}
      </p>
      <h2 className="text-display-2 font-semibold text-foreground">{title}</h2>
      {description && (
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}
