import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex min-w-0 items-center gap-2.5", className)}
      aria-label="Zenbyte Technologies, home"
    >
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#070B14" />
        <rect
          x="1"
          y="1"
          width="62"
          height="62"
          rx="15"
          fill="none"
          stroke="#7DD3FC"
          strokeOpacity="0.55"
        />
        <path fill="#7DD3FC" d="M15 15H49V22L29 38H49V49H15V42L35 26H15V15Z" />
      </svg>
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
