"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";
import { useFinePointer } from "@/components/motion/useFinePointer";
import { cn } from "@/lib/cn";

export function GlowCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const fine = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(20);
  const glow = useMotionTemplate`radial-gradient(180px circle at ${glowX}% ${glowY}%, rgba(125,211,252,0.16), transparent 70%)`;

  function onMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || !fine) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
    glowX.set(((event.clientX - rect.left) / rect.width) * 100);
    glowY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce || !fine ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={cn(
        "group relative h-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 motion-reduce:transition-none hover:border-cyan-200/35 hover:bg-white/[0.055]",
        className,
      )}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent opacity-70"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
