import Link from "next/link";
import { useId } from "react";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const gradientId = `zenbyte-z-${useId().replace(/:/g, "")}`;

  return (
    <Link
      href="/"
      className={cn("group inline-flex min-w-0 items-center gap-2.5", className)}
      aria-label="Zenbyte Technologies, home"
    >
      <span
        aria-hidden="true"
        className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-cyan-200/30 bg-slate-950 shadow-[0_0_24px_-8px_rgba(125,211,252,0.9)]"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
          <path
            d="M7 8.5h18L13.5 16.2 25 23.5H7"
            stroke={`url(#${gradientId})`}
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id={gradientId} x1="7" y1="8" x2="25" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7DD3FC" />
              <stop offset="1" stopColor="#A78BFA" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-[13px] font-semibold tracking-[0.16em] text-white sm:text-sm">
          ZENBYTE
        </span>
        {compact ? null : (
          <span className="mt-1 block text-[9px] font-medium tracking-[0.22em] text-slate-400 sm:text-[10px]">
            TECHNOLOGIES
          </span>
        )}
      </span>
    </Link>
  );
}
