import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_40px_-18px_rgba(125,211,252,0.9)] hover:bg-cyan-50",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-cyan-200/40 hover:bg-white/[0.08]",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 disabled:cursor-not-allowed disabled:opacity-60";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

type NativeButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  className,
  type = "submit",
  disabled,
}: NativeButtonProps) {
  return (
    <button type={type} disabled={disabled} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}
