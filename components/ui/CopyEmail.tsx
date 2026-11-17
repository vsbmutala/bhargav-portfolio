"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/ui/Icons";
import { email } from "@/constants/social";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-border-strong bg-tint/[0.02] px-5 text-body-sm font-medium text-foreground transition-colors duration-300 hover:bg-tint/[0.06]"
    >
      {copied ? <Check className="text-success" /> : <Copy className="text-muted-foreground transition-colors group-hover:text-foreground" />}
      <span className="font-mono text-meta">{copied ? "Copied to clipboard" : email}</span>
      <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
    </button>
  );
}
