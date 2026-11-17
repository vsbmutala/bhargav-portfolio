export default function Highlight({ text }: { text: string }) {
  return text.split(/(\d+(?:\.\d+)?[%+]|\b\d\b(?=\s))/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-medium text-foreground tabular-nums">
        {part}
      </span>
    ) : (
      part
    )
  );
}
