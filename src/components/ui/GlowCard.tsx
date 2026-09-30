import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.055] motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-70"
      />
      {children}
    </div>
  );
}
